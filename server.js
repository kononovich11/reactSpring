const {Card} = require('./src/DB/models/card');
const {User} = require('./src/DB/models/user');
const express= require('express');
const crypto = require('crypto');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', async (req, res) => {
  Card.findAll({raw: true}).then(data=> {
    res.send(data);
  }).catch(err => console.log(err));
});

app.post('/signup', async(req, res) => {
  let redistratedUser = false;
  const key1 = crypto.pbkdf2Sync(req.body.password , 'salt', 100000, 64, 'sha512').toString('hex') ;
  const key2 = crypto.pbkdf2Sync(req.body.passwordR , 'salt', 100000, 64, 'sha512').toString('hex') ;
  req.body.password = key1;
  req.body.passwordR = key2;
  if(req.body.password !== req.body.passwordR) {
    res.send({errorPasswords: 'password not equels'});
  }
  console.log(req.body);
  await User.findOne({where: {userName: req.body.userName}})
  .then((data) => {
    redistratedUser = data? true : false;
  });

  if(!redistratedUser) {
     User.create(req.body)
      .then(() => res.send({success: 'thank you for registration'}))
      .catch(err => {
        res.send(err)
      });
  } else {
    res.send({errorUser: 'user is login'});
  }
});

app.post('/login', async (req, res, next) => {
  const key = crypto.pbkdf2Sync(req.body.password , 'salt', 100000, 64, 'sha512').toString('hex') ;
  req.body.password = key;
  let checkUser = false;
  await User.findOne({where: req.body})
  .then(data => {
    checkUser = data? true : false;
  });

  if(!checkUser) {
    res.send({errorLogin: 'Sorry, but you have error in the user name or the password. Try again!'});
  } else {
    res.send({checkUser});
  }
});

app.get('/home', (req, res) => {
  const inputValue = req.query.inputValue;
  Card.findAll({attributes: ['title', 'description']})
  .then(data => {
    const filterArr = data.filter(item => {
    return item.dataValues.title.includes(inputValue) || item.dataValues.description.includes(inputValue);
   });
   res.send(filterArr);
  });
});

app.listen(3002, () => {
  console.log('server goes on 3002 port');
});


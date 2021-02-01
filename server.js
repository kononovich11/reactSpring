const express= require('express');
const Joi = require('@hapi/joi');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const cardsData = [
  {
    title: 'Spring Boot',
    description: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
  },
  {
    title: 'Spring Framework',
    description: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
  },
  {
    title: 'Spring Data',
    description: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
  },
  {
    title: 'Spring Cloud',
    description: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
  },
  {
    title: 'Spring Cloud Data Flow',
    description: 'Provides an orchestration service for composable data microservice applications on modern runtimes.'
  },
  {
    title: 'Spring Security',
    description: 'Protects your application with comprehensive and extensible authentication and authorization support.'
  },
];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const schema = Joi.object({
  userName: Joi.string()
  .min(2)
  .required(),

  password: Joi.string()
    .min(4)
    .required(),
});

app.post('/', async (req, res, next) => {
  const answer = await schema.validate(req.body);
  if(answer.userName === 'admin' && answer.password === '1234') {
    res.send(answer);
  }
});

app.get('/', (req, res) => {
  res.send(cardsData);
});

app.get('/search', (req, res) => {
  const inputValue = req.query.inputValue;
  const filterArr = cardsData.filter(item => {
    return item.title.includes(inputValue) || item.description.includes(inputValue);
  });
  res.send(filterArr);
});

app.listen(3002, () => {
  console.log('server goes on 3002 port');
});


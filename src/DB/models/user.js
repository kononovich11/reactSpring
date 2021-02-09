'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', 'mysql11', {
  dialect: 'mysql',
  host: 'localhost'
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userName: {
      type: Sequelize.STRING,
        validate: {
            len: {
                args: 3,
                msg: 'userName must be atleast characters in length',
            },
       },
   },
  password: {
      type: Sequelize.STRING,
      validate: {
          len: {
              args: 4,
              msg: 'Length of password must be more 4 symbols'
          },
          validateSymbols(value) {
              const flag = /\d/.test(value) && /[a-z]/i.test(value)? true: false;
              if(!flag) {
                throw new Error('Password must be atleast number and symbol');
              }
          }, 
      },
  },
  passwordRepeat: {
      type: Sequelize.STRING,
      validate: {
          validateEquals(value) {
              if(this.password !== value) {
                  throw new Error('Passwords not equals');
              }
          },
      },
  },
  firstName: {
      type: Sequelize.STRING,
      validate: {
          len: {
              args: 3,
              msg: 'Length of first name must be more 3 symbals',
          },
      },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
        len: {
            args: 3,
            msg: 'Length of last name must be more 3 symbols',
        },
    },
  } ,
  age: {
      type: Sequelize.INTEGER,
      validate: {
          min: {
              args: 1,
              msg: 'Age must be more 1 year',
          },
      },
  },
});   

sequelize.sync().then(()=>{
  console.log('connection db');
})
.catch(err=> {
    console.log(err);
});

module.exports = {
    User,
};
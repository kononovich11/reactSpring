'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', 'mysql11', {
  dialect: 'mysql',
  host: 'localhost'
});

const Card = sequelize.define('card', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

//Procedure create 

Card.create(
    {
        title: 'Spring Boot',
        description: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    } 
);

Card.create(
    {
        title: 'Spring Framework',
        description: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
    }, 
);

Card.create(
  {
      title: 'Spring Data',
      description: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
  }, 
);

Card.create(
  {
      title: 'Spring Cloud',
      description: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
  }, 
);

Card.create(
  {
      title: 'Spring Cloud Data Flow',
      description: 'Provides an orchestration service for composable data microservice applications on modern runtimes.'
  }, 
);

Card.create(
  {
      title: 'Spring Security',
      description: 'Protects your application with comprehensive and extensible authentication and authorization support.'
  }, 
);

sequelize.sync().then(()=>{
  console.log('connection db'); 
})
.catch(err=> console.log(err));

module.exports = {
    Card,
};
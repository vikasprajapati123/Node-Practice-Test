// const mysql = require('mysql2');
// require('dotenv').config();

// const connection = mysql.createConnection({
//     'host': process.env.DB_HOST,
//     'user': process.env.DB_USER,
//     'password': process.env.DB_PASS,
//     'database': process.env.DB_NAME,
// })

// connection.connect((error)=>{
//     if(error){
//         console.error('Error connecting to database:', error.message);
//          return;
//     }
//     else{
//         console.log('Mysql connect successfully')
//     }
// })

require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('✅ MySQL connection established with Sequelize!');
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err.message);
  });

module.exports = sequelize;

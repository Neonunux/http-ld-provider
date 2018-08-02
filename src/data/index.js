import dotenv from 'dotenv'
import Sequelize from 'sequelize'

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    logging: false,
  }
)

export function generateTable (name, props) {
  sequelize.define(name, resolvePropsConfig(props)).sync()
}

function resolvePropsConfig (config) {
  return Object.entries(config).reduce((acc, [prop, type]) => {
    acc[prop] = resolveType(type)
    return acc
  }, {})
}

function resolveType (type) {
  switch (type) {
    case 'string': return Sequelize.STRING
    case 'date': return Sequelize.DATE
    default: throw new Exception(`Unknown config property type ${type}.`)
  }
}

// const User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE,
// })

// sequelize.sync()
//   .then(() => User.create({
//     username: 'Dan Doe',
//     birthday: new Date(1987, 6, 20),
//   }))
//   .then(jane => {
//     console.log(jane.toJSON())
//   })

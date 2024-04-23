const { Model, DataTypes, Sequelize } = require ('sequelize')
const { toDefaultValue } = require('sequelize/lib/utils')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    PrimaryKey: true,
    type: DataTypes.INTEGER
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING
  },

  createdAd: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate () {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }

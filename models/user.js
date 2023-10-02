import { sequelizeconnection } from '../config/db.js';
import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;

export const User = sequelizeconnection.define('User', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
      this.setDataValue('email', value.toLowerCase());
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  tableName: 'oauth_users',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

// This line will ensure that the table exists in the database
User.sync().then(() => {
  console.log("User table synced successfully");
}).catch((error) => {
  console.error("Error syncing User table:", error);
});

// Check if the model is successfully defined
console.log("Is User model defined?", User === sequelizeconnection.models.User);

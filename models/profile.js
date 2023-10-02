import { sequelizeconnection } from '../config/db.js';
import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;

export const Profile = sequelizeconnection.define('Profile', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
      this.setDataValue('email', value.toLowerCase());
    },
  },
  old_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  new_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirm_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  tableName: 'profile',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

// Function to sync the Profile model with the database
const syncProfileModel = async () => {
  try {
    await Profile.sync();
    console.log("Profile table synced successfully");
  } catch (error) {
    console.error("Error syncing Profile table:", error);
  }
};

// Check if the model is successfully defined
console.log("Is Profile model defined?", Profile === sequelizeconnection.models.Profile);

// Uncomment the following line to sync the Profile model with the database
// syncProfileModel();

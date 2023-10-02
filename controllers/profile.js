import { Profile } from "../models/profile.js";
import {User} from "../models/user.js"


const createProfile =async(req,res)=>{
    const { email, old_password, new_password, full_name, confirm_password } = req.body;
    console.log("req",req)
    try {
      // Check if the email already exists
      const existingProfile = await User.findOne({
        where: { email }
      });
    
      if (!existingProfile) {
        throw new Error("Email already doesn't exist in the database");
      }
    
      // Password validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
      if (passwordRegex.test(new_password)) {
        throw new Error("Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.");
      }
    
      if (new_password !== confirm_password) {
        throw new Error("Passwords do not match.");
      }
    
      // Create the profile
      const createProfile = await Profile.create({
        email,
        new_password,
        old_password,
        confirm_password,
        full_name,
        
      });
    
      // Respond with success
      res.status(200).json({
        status: "success",
        createProfile
      });
    } catch (error) {
      // Handle errors
      res.status(400).json({
        status: "error",
        message: error.message
      });
    }
    
}

const updateProfile = async (req, res) => {
    const { email, new_password, full_name } = req.body;
  
    try {
      // Find the profile based on the email
      const existingProfile = await Profile.findOne({
        where: { email }
      });
  
      if (!existingProfile) {
        throw new Error("Profile not found.");
      }
  
      // Update profile properties if provided
      if (new_password) {
        // Password validation (similar to the createProfile function)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(new_password)) {
          throw new Error("Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.");
        }
  
        existingProfile.new_password = new_password;
      }
  
      if (full_name) {
        existingProfile.full_name = full_name;
      }
  
      // Save the updated profile
      await existingProfile.save();
  
      // Respond with success
      res.status(200).json({
        status: "success",
        message: "Profile updated successfully"
      });
    } catch (error) {
      // Handle errors
      res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  };
  

  export {createProfile,updateProfile}
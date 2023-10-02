import express from 'express'
import { protect } from '../middleware/auth.js'
import { createProfile,updateProfile } from '../controllers/profile.js'
const router = express.Router()

router.route("/create-profile").post(protect,createProfile)
router.route("/update-profile").put(updateProfile)


export default router
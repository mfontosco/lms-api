import dotenv from 'dotenv'
dotenv.config()
import JWT from 'jsonwebtoken'


const generateToken= async(id)=>{
    return await JWT.sign({id},process.env.JWT_SECRET,{expiresIn:"2hrs"})
}

export default generateToken;
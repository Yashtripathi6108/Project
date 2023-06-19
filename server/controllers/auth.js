import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    try{
        const existinguser = await users.findOne({ email });
        if(existinguser){
            console.log(existinguser)
            return res.status(404).jason({ message: "User already Exist."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword})
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '4h'});
        res.status(200).jason({ result: newUser, token})
        
    } catch(error){
        console.log(error)
        res.status(500).jason("Something wnet wrong...")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).jason({ message: "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)

        if(!isPasswordCrt){
            return res.status(404).jason({ message: "Invalid Credentials"})
        }
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '4h'});
        res.status(200).jason({ result: newUser, token})
        
    } catch(error){
        res.status(500).jason("Something wnet wrong...")
    }
}
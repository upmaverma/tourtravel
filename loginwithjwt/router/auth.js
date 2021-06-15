const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/connection');
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send(`Hello from the server`)
})

router.post('/register', async (req, res) => {
    const { name, phone, email, password, cpassword } = req.body;


    if (!name || !phone || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled all the fields properly." });
    }

    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(406).json({ error: "Email already exists" });
        } else if (password !== cpassword) {
            return res.status(401).json({ error: "password are not matching" });
        } else {
            const user = new User({ name, phone, email, password, cpassword });

            await user.save();
            res.status(201).json({ message: "User resgistered successfully!" });

        }

    } catch (err) {
        console.log(err);
    }

});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please filled the field carefully" })
        }
        const userLogin = await User.findOne({ email: email });
        
        if (userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 172800000),
                httpOnly:true
            });

            if (isMatch) {
                res.status(200).json({ message: "User Login suceesfully" });
            } else {
                res.status(400).json({ error: "Invalid credentials" });
            }
        }else{
            res.status(400).json({ error: "Invalid credentials" });
        }
        

    } catch (err) {
        console.log(err);
    }
})

router.get('./logout' , (req , res)=>{
    console.log(`logout sucesssfully`);
    res.clearCookie('jwtoken' , {path :'/'})
    res.status(200).send('User Logout')
});

module.exports = router;
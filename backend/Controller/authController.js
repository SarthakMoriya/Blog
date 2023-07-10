const authController = require("express").Router();
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authController.post('/register', async (req, res) => {
    try {
        const isExisting = await User.findOne({email: req.body.email})
        if(isExisting){
            throw new Error("Already such an account. Try a different email")
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({...req.body, password: hashedPassword})
        console.log(newUser._doc)

        const {password, ...others} = newUser._doc
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '5h'})

        return res.status(201).json({user: others, token})
    } catch (error) {
        return res.status(500).json({err:error.message})
    }
})

authController.post("/login", async (req, res) => {
  try {
    //find if user exists or not
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("Invalid Credentials");

    //compare passwords
    const comparePass = await bcrypt.compare(req.body.password, user.password);

    if (!comparePass) throw new Error("Invalid Credentials...");

    //return to user
    const { password, ...others } = user._doc;
    //assign token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({ user: others, token });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports=authController

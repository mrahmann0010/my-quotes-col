const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req, res, next)=>{
    res.status(200).json({
        status:'success',
        message:'Hello from the user!'
    });
};


// SignUp Controller
exports.signUp = async (req, res, next)=>{
    try {
        const {name, email, password, confirmPassword, role} = req.body;
        
        // 1)) Check All fields are provided
        if(!name || !email || !password || !confirmPassword || !role){
            return res.status(400).json({
                status:'fail',
                message:'All fields are required',
            });
        };

        // 2)) Check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                status:'fail',
                message:'Email already in use',
            });
        };

        // 3)) Create an User
        const newUser = await User.create({name, email, password, confirmPassword, role});

        console.log(process.env.JWT_SECRET);

        const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET, {expiresIn:60*60});
       
        // 4)) Remove sensitive info before sending response
        const userResponse = {
            _id:newUser._id,
            email:newUser.email,
            name:newUser.name,
            role:newUser.role,
        }

        // 5)) Sending response
        res.status(201).json({
            status:'success',
            token,
            data:{
                user: userResponse
            }
        })
    } catch (error) {
        // Mongoose Special Error
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                status: 'fail',
                message: error.message,
            });
        }

        res.status(500).json({
            status:'fail',
            message:'Internal Server Error',
            error:error.message,
        });
    }
}

exports.signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // 1)) Check email or Passowrd are provided
        if(!email || !password) {
            return res.status(400).json({
                status:'fail',
                message:'Email or Password not provided!'
            });
        }

        // 2)) Check if user Exists
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            return res.status(401).json({
                status:'fail',
                message:'User not found!'
            });
        }

        // 3)) Check for Passowrd
        const passIsMatch = await user.comparePassword(password, user.password);
        console.log(passIsMatch);
        if(!passIsMatch) {
            return res.status(401).json({
                status:'fail',
                message:'Incorrect Password!'
            });
        }

        // 4)) Generate JWT Token
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:60*60});

        // 5)) Prepare Response
        const userResponse = {
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        }

        // 6)) Send UserResponse
        res.status(200).json({
            status:'success',
            token,
            data:{
                user:userResponse
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal Server Error',
            error: error.message,
        });
    };
};
const User = require('../models/usersModel');
const asyncHandler = require('../utilities/asyncHandler');
const jwt = require('jsonwebtoken');
const CustomError = require('../utilities/CustomError');


const signToken = (userId) => {
    return jwt.sign({id:userId}, process.env.JWT_SECRET, {expiresIn:60*60});
}

exports.getAllUsers = (req, res, next)=>{
    res.status(200).json({
        status:'success',
        message:'Hello from the user!'
    });
};


// SignUp Controller
exports.signUp = async (req, res, next)=>{
    try {
        const {name, email, password, confirmPassword, role, passwordChangedAt} = req.body;
        
        // 1)) Check All fields are provided
        if(!name || !email || !password || !confirmPassword || !role || !passwordChangedAt){
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
        const newUser = await User.create({name, email, password, confirmPassword, role, passwordChangedAt});

        console.log(process.env.JWT_SECRET);

        const token = signToken(newUser._id);
       
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

exports.signIn = asyncHandler (async (req, res, next) => {
    const { email, password } = req.body;
        // 1)) Check email or Passowrd are provided
        if(!email || !password) {
            const error = new CustomError('Email or Password not provided!', 400);
            return next(error);
        }

        // 2)) Check if user Exists
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            const error = new CustomError('User not found!', 401);
            return next(error);
        }

        // 3)) Check for Passowrd
        const passIsMatch = await user.comparePassword(password, user.password);

        if(!passIsMatch) {
            const error = new CustomError('Incorrect Password!', 401);
            return next(error);
        }

        // 4)) Generate JWT Token
        const token = signToken(user._id);

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
});

exports.protect = asyncHandler (async (req, res, next) => {

        // 1)) Get the token and Check it
        const testToken = req.headers.authorization;
        let token;
        if(testToken && testToken.toLowerCase().startsWith('bearer')){
            token = testToken.split(' ')[1];
        }
        if(!token){

            const error = new CustomError('You are not signed in!', 401);
            return next(error);
        }

        // 2)) Validate the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 3)) Check if the user exists using ObjectID from token
        const currentUser = await User.findById(decoded.id);
        if(!currentUser){
            const error = new CustomError('The user belonging to this token no longer exists!', 401);
            return next(error);
        }

        // 4)) Compare timestamp of changing password and JWTtoken timestamp
        if(currentUser.isPasswordChanged(decoded.iat)) {
            const error = new CustomError('The password has been changed recently. Please login again', 401);
            return next(error);
        }

        // Grant Access to current User
        req.user = currentUser;
        console.log(currentUser);  
        next();
});
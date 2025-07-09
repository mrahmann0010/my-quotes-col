const devError = (error, res) => {
    res.status(error.statusCode).json({
            status:error.status,
            message:error.message,
            stackTrace:error.stack,
            error:error
    });
}

const prodError = (error, res) => {
    if(error.isOperational){
        res.status(error.statusCode).json({
            status:error.status,
            message:error.message
        });
    } else {
        res.status(500).json({
            status:'error',
            message:'Something went wrong! Please try again later.'
        });
    };
};

module.exports = (error, req, res, next)=> {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        devError(error, res);

    } else if (process.env.NODE_ENV === 'production') {
        prodError(error, res);
    }
};
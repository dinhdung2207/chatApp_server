async function login(req, res,next) {
    try {
        return res.send('Login')
    } catch (error) {
        return next(error)
    }
}

async function register(req, res,next) {
    try {
        
    } catch (error) {
        return next(error);
    }
}

export {
    login,
    register,
}
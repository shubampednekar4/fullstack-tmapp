export const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
            success : false,
            message : 'Invalid token or missing'
        })
    }
    const user = { 'id' : 1, 'name' : 'shubam'}
    req.user = user;
    next();
}
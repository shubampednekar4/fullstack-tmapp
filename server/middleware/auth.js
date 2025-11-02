import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
    const rawtoken = req.headers.authorization;
    const token = rawtoken.split(" ")[1];
    if(!token){
        res.status(401).json({
            success : false,
            message : 'Invalid token or missing'
        })
    }
    const isvalid = jwt.verify(token, process.env.JWT_SECRET)
    if(!isvalid){
        res.status(401).json({
            success : false,
            message : 'Invalid token or missing'
        })
    }
    req.user = isvalid.loggedin;
    next();
}
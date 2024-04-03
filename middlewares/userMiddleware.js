
const jwt = require("jsonwebtoken")

const getUserId = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'User ID not provided' });
    }
    try {
        const decoded = jwt.verify(token,"login")
        
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.send({"msg" : "unAuthirized"})
    }
   
};

module.exports = {
    getUserId
};
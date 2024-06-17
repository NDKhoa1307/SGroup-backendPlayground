const postingValidation = (req, res, next) => {
    if (!req.body.length) {
        return res.status(400).send("Invalid body request (body must contain at least one student)");      
    }
    next();
};

module.exports = {postingValidation};
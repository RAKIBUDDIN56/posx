const AuthModel = require('./../models/auth.model')
const validation = require("./../services/validation/inputValidation")

exports.login = async (req, res, next) => {
    console.log(req.body);
    try {
        const { username, password, roll } = req.body;

        if (username == undefined || password == undefined || roll == undefined) {
            return res.status(400).send({ success: false, message: "All fields are required", data: [] })
        }


        const isAuthenticated = await AuthModel.findOne({ username });
        console.log(isAuthenticated);
        if (isAuthenticated) {
            return res.send({ success: true, data: isAuthenticated });
        } else {
            return res.status(400).send({ success: false, message: "Authentication failed", data: [] });

        }
    } catch (error) {
        console.log(error);
        return next(error.message);
    }
}
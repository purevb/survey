

const UserModel = require("../models/users");
const jwt = require('jsonwebtoken');
class UserService {
    static async registerUser(email, password, name, phone_number) {
        try {
            // Ensure the user does not already exist
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                throw new Error('User already exists');
            }

            // Create a new user
            const createUser = new UserModel({ email, password, name, phone_number });
            return await createUser.save();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (err) {
            throw err;
        }
    }
    static async generateToken(tokenData, secretKey, jwt_expire) {
        return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    }
}

module.exports = UserService;
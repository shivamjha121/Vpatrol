const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    data: {
        user_id: Number,
        user_name: String,
        back_accounts: [String],
        id: Number,
        name: String,
        accounts: {
            bank: String,
            branch: String,
            address: String,
            city: String,
            district: String,
            state: String,
            bank_code: String,
            weather: {
                temp: Number,
                humidity: Number
            }
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

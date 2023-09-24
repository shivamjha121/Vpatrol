const mongoose = require('mongoose');
const uri = "mongodb+srv://jhashivam121:Shivam%40123@cluster0.53mlwf1.mongodb.net/?retryWrites=true&w=majority"

async function db() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((result) => {
        console.log('MongoDB Connected');

    })
        .catch((err) => {
            console.log('MongoDB Connection Error: ' + err);
        });

    }
    module.exports = db;
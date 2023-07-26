const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://kalpit:kalpit@shopit.2hz8knw.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase
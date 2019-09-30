// use mongoose to connect to our database

const mongoose = require('mongoose');
const config = require('config');

// grab what we have in default.json
const db = config.get('mongoURI'); 

// Using promises
const connectDB = () => {
    mongoose
        .connect(db, {
            newNewUrlParser: true,
            newCreateIndex: true,
            useFindAndModify: false
        })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => {
            console.error(err.message);
            process.exit(1);
        });    
};

// Using async await
// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });

//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

module.exports = connectDB




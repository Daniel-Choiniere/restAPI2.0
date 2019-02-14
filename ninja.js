const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the ninja schema and model
const ninjaSchema = new Schema({
    name: {
        type: String,
        required:[true, 'Name field is required']
},
    rank: {
        type: String
    },
    avaliable: {
        type: Boolean,
        default: false
});

// this will be the name of our model, typically this is given a    capital for the first letter of its name
// pass horug the name of your collection
//  mongoose is going to go ahead and make a db collection called (plural) ninjas
// we want the objects n the collection to be structured on the ninja Schema
const Ninja = mongoose.model('ninja', NinjaSchema);

// export our module so it can be used in other files
module.exports = Ninja;

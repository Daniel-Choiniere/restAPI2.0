const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the ninja schema
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
    }
});
// we will now create our model with one line of code
// this first parameter (ninja) will be the name of our model, typically this is given a capital for the first letter of its name
//  mongoose is going to go ahead and make a db collection called (plural) ninjas
// we want the objects in the collection to be structured on the ninja Schema
const Ninja = mongoose.model('ninja', ninjaSchema);

// export our model so it can be used in other files
module.exports = Ninja;

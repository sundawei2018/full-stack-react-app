const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/react-chat';
mongoose.connect(DB_URL);

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd' : {type: String, require: true},
        'type': {type: String, require: true},
        'avatar': {type: String},
        'desc': {type: String},
        'title': {type: String},

        // employer
        'company': {type: String},
        'salary': {type: String}
    },
    chat: {
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name);
	}
}

// const User = mongoose.model('user', new mongoose.Schema({
//     user: {type: String, required:true},
//     age: {type: Number, required: true}
// }));

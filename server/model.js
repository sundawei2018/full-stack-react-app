const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required:true},
    age: {type: Number, required: true}
}));

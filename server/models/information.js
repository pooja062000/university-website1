const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    student_name: String,
    student_phone:Number,
    email: String
})

const UserModels = mongoose.model('students', UserSchema)

module.exports = UserModels
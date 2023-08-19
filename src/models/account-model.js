import mongoose from 'mongoose'

// User schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

// Account schema
const accountSchema = mongoose.Schema({
    user: { type: userSchema, required: true },    
    sent: { type: Boolean, required: false, default: false },
    letter: { type: mongoose.Types.ObjectId, ref: 'letter', required: false},

})

export default mongoose.model('account', accountSchema)
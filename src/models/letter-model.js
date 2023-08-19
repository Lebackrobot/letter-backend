import mongoose from 'mongoose'

const letterSchema = mongoose.Schema({
    createAt: { type: Date, required: true },
    sendAt: { type: Date, required: true },
    sendTo: { type: Date, required: true }
})

export default mongoose.model('letter', letterSchema)
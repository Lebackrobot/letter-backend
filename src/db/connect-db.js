import mongoose from 'mongoose'
import { urlDb } from './../config/env.js'

mongoose.connect(urlDb).connect

export default mongoose.connection
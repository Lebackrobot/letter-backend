import express from 'express'
import cors from 'cors'
import db from './db/connect-db.js'

// Instance app
const app = express()

//Impor Routes

//Config app
app.use(express.json({ limit: '100mb '}))
app.use(express.urlencoded({ limit: '100mb', extended: true }))
app.use(cors())

// Connect to database
db.on('error', err => { console.error(`Connect error ${ err }`)})
db.once('open', () => { console.log('Success to connect')})

export default app
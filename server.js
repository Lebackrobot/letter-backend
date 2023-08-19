import app from './src/app.js'
import { port } from './src/config/env.js'

// Server listen 
app.listen(port, async () => {
    console.log(`Server listen on port ${ port } ☕`)
})
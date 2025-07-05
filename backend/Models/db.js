const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Connection Established Successfully...")
}).catch((err)=>{
    console.error(`Connection has been failed Mongodb ${err}`)
})

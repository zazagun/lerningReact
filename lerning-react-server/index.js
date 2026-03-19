import cors from "cors"
import express from "express"
const app = express()
app.use(cors())

app.get("/api/pid", (req, res) => {
    res.json({pid: process.pid})
})

app.listen(3001, () => {
    console.log(`Server PID: ${process.pid}`)
})
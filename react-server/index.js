import cors from "cors"
import express from "express"

const PORT = 3001 || 3002
const app = express()
app.use(cors())

app.get("/api/pid", (req, res) => {
    res.json({pid: process.pid})
})

app.listen(PORT, () => {
    console.log("Server working on " + PORT + " port")
    console.log(`Server PID: ${process.pid}`)
})
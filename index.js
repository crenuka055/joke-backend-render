const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors)   // Allow frontend to call the backend

app.get('/api/joke', (req, res) => {
    const jokes = [
         "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    "Why do programmers prefer dark mode? Because light attracts bugs!"
    ]

    const joke = jokes[Math.floor(Math.random() * jokes.length)]
    res.json({joke})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})
const express = require('express')
const router = express.Router()

router.get('/testing', (req, res) => {
    res.send('I made it here')
})


module.exports = router
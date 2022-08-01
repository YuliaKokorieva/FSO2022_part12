const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  const counter = await redis.getAsync('todoCount')
  res.send({
    "added_todos": counter
  })
})

module.exports = router;
const router = require('express').Router()
const main = require('../service/userIndex')
const {
  validateLogin, 
  handlingResult,
  validateRegister
} = require('../validation/userValidation')

router.post('/login',validateLogin, handlingResult, async (req, res) => {
  let result = await main.login(req.body)
  res.json(result)
})

router.post('/register', validateRegister, handlingResult, async (req, res) => {
  let result = await main.register(req.body)
  res.json(result)
})

module.exports = router
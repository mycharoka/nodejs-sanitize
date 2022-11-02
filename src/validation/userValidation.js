const {check, validationResult} = require('express-validator')

const validateLogin = [
  check('username', 'Username must be an email!').isEmail().trim().escape().normalizeEmail(),
  check('password').isLength({min: 8})
    .withMessage('Password must be at least 8 characters!')
    .matches('[0-9]').withMessage('Password must contain numbers!')
    .matches('[A-Z]').withMessage('Password must constain an uppercase!')
    .trim()
    .escape()
]

const validateRegister = [
  check('username', 'Username must be an email!').isEmail().trim().escape().normalizeEmail(),
  check('password')
    .isLength({min: 8})
    .withMessage('Password must be at least 8 characters!')
    .matches('[0-9]').withMessage('Password must contain numbers!')
    .matches('[A-Z]').withMessage('Password must constain an uppercase!')
    .trim()
    .escape(),
  check('name')
    .matches(/^[A-Za-z ]+$/).withMessage('No special characters or numbers allowed!')
]

function handlingResult (req, res, next) {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    console.log('validasi error');
    res.status(422).json({message: "error", data: err.array()})
    return
  }
  console.log('validasi tidak error');
  next()
}
  

module.exports = {
  validateLogin,
  validateRegister,
  handlingResult
}
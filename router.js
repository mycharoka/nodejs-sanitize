function registRoutes (app) {
  app.use('/api/auth', require('./src/api/userRoute'))
  app.use('/api/form', require('./src/api/formRoute'))
}

module.exports = {
  registRoutes
}
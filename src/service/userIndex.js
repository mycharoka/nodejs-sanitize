async function login (body) {
  return {
    message: "Login Success"
  }
}

async function register (body) {
  return {
    message: "Register Success"
  }
}

module.exports = {
  login,
  register
}
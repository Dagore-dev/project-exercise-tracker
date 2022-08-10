const User = require('../database/User')
// const Exercise = require('../database/Exercise')

async function getAllUsersWithoutLogs () {
  const users = await User
    .find({})
    .select({ log: 0 })
    .exec()

  return users
}

async function createNewUser (username) {
  const newUser = new User({ username })

  try {
    const savedUser = (await newUser.save()).toObject()
    return { ok: true, data: savedUser }
  } catch (e) {
    console.error(e.message)
    return { ok: false, data: e.message }
  }
}

module.exports = {
  getAllUsersWithoutLogs,
  createNewUser
}

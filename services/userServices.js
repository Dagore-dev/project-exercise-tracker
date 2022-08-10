const User = require('../database/User')
// const Exercise = require('../database/Exercise')

async function getAllUsersWithoutLogs () {
  const users = await User
    .find({})
    .select({ log: 0 })
    .exec()

  return users
}

module.exports = {
  getAllUsersWithoutLogs
}

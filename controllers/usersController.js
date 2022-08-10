// eslint-disable-next-line
const express = require('express')
const UserServices = require('../services/userServices')
/**
 * You can make a `GET` request to `~/api/users` to get a list of all users. This request response with an array of objects with `username` and `_id` properties.
 * @param {express.Request} request
 * @param {express.Response} response
 */
async function getAllUsers (request, response) {
  const users = await UserServices.getAllUsersWithoutLogs()

  response.json({ users })
}

/**
 * You can `POST` to `~/api/users` with form data username to create a new user. The returned response will be an object with `username` and `_id` properties.
 * @param {express.Request} request
 * @param {express.Response} response
 */
function createNewUser (request, response) {
  console.error('Not implemented')
}

/**
 * You can `POST` to `~/api/users/:_id/exercises` with form data `description`, `duration`, and optionally `date`. If no date is supplied, the current date will be used. The response will be the user object with the exercise fields added.
 * @param {express.Request} request
 * @param {express.Response} response
 */
function updateUserExercises (request, response) {
  console.error('Not implemented')
}

/**
 * You can make a `GET` request to `~/api/users/:_id/logs` to retrieve a full exercise log of any user. This returns an user object with a `count` property representing the number of exercises that belong to that user and a `log` property which is an array of all exercises added (Each of them consist in an object with the `description`, `duration` and `date` properties).
 * @param {express.Request} request
 * @param {express.Response} response
 */
function getExercisesFromUser (request, response) {
  console.error('Not implemented')
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUserExercises,
  getExercisesFromUser
}

const express = require('express')
const { sendThanksEmail } = require('../emails/account')
const router = new express.Router()

router.post('/emails/contact', async (req, res) => {
  const { description, name, email, company, position } = req.body
  try {
    await sendThanksEmail(description, name, email, company, position)
    res.status(201).send("Email sent successfully.")
  } catch (e) {
    res.status(400).send("Something went wrong with sending email!")
  }
})

module.exports = router
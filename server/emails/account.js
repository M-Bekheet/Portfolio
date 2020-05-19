const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendThanksEmail = async (description, name, email, company, position) => {
  await sgMail.send({
    to: 'mlartwel@gmail.com',
    from: 'mlartwel@gmail.com',
    subject: 'Thanks for your message.',
    html: `
      Quote Info:
      Description: ${description}<br/>
      Client Name: ${name}<br/>
      Client Email: ${email}<br/>
      ${company && `Company Name: ${company}<br/>`}
      Client Position: ${position}
    `
  })
}


module.exports = {
  sendThanksEmail
}
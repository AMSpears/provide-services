import React from 'react'
import axios from 'axios'

import './ContactForm.css'

class ContactForm extends React.Component {
  // Setting the handle submission function
  handleSubmit (e) {
    // preventing another window to open after submittion
    e.preventDefault()
    // Storing the values of each input needed from the contact form  
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const message = document.getElementById('message').value
    e.target.reset() // Clearing the contact form after message is sent
    // Action to call the backend api for the contact form
    axios({
      method: 'POST',
      // change URL once backend has been deploy
      url: 'http://localhost:3001/send',
      data: {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    })
      .then((response) => {
        // storing the msg divs
        const elMsg = document.getElementById('msg')
        // condition for sucessfull or unsucessful form submition
        if (response.data.msg === 'success') {
          // MSG after sucessfull form submition
          elMsg.innerHTML = 'Thanks for reaching out! We received your message and will contact you soon.'
        } else if (response.data.msg === 'fail') {
          // MSG after unsucessfull form submition
          elMsg.innerHTML = 'An error occurred when sending this message! Please try again or send us a direct message to hello@provide.services'
        }
      })
    }
     render () {
        return (
        // Inside tag we are binding the handle submit condition we set above and set the form to make a post request
        <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
            <div className= "contact-form-inner-container">
                <p id='msg'></p>
                <br/>

                <label>Full Name</label>
                <br/><br/>

                <input
                id='name'
                type='text'
                name='name'
                placeholder='Your full name'
                required />
                <br/><br/>

                <label>Email</label>
                <br/><br/>

                <input
                id='email'
                type='email'
                name='email'
                placeholder='name@email.com'
                required />
                <br/><br/>

                <label>Phone Number</label>
                <br/><br/>

                <input
                id='phone'
                type='number'
                name='phone'
                minLength='9'
                placeholder='555-555-5555' />
                <br/><br/>

                <label>Message</label>
                <br/><br/>

                <textarea
                id='message'
                name='message'
                rows='5'
                maxLength='300'
                placeholder='Enter message here'
                />

                <br/><br/>
                <input id="button" type='submit' value='Send' />

            </div>
        </form>
        )
    }
}

export default ContactForm
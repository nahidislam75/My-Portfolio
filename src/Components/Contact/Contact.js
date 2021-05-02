import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_l2wf7fm', 'template_mszoi74', e.target, 'user_EPDVNzD3UJs6ozwTwgzxh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="container">
            <form className="contact-form" onSubmit={sendEmail} >
                <input type="hidden" name="contact_number" /><br/>
                <label>Name</label>
                <br/>
                <input type="text" name="name" />
                <br/>
                <label>Subjests</label>
                <br/>
                <input type="text" name="subject" />
                <br/>
                <label>Email</label>
                <br/>
                <input type="email" name="email" />
                <br/>
                <label>Message</label>
                <br/>
                <textarea name="massage" />
                <br/>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
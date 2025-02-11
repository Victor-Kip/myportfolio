import React from 'react';

function Contact() {

  function hello(){
    alert('Hello there')
  }
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Feel free to contact me for any queries</p>
      <div className='contacts'>
      <div>
      <ul>
        <li><strong>Email: </strong>vicklan132@gmail.com</li>
        <li><strong>Phone No:</strong>0710414911</li>
      </ul>
      </div>
      <div style={{marginLeft: 'auto',marginRight: 'auto'}}>
      <h2>Leave a message?</h2>
      <form onSubmit={hello}>
        <p>
        <label for = 'fullName: '>Full Name</label>
        <input type='text' id = 'fullName' name = 'fullName' ></input>
        </p>
        <p>
          <label for = 'message'>Message: </label>
        </p>
        <p>
          <textarea id = 'message' name = 'message' rows={5} cols={50}></textarea>
        </p>
        <input type='submit' id = 'submitButton'/>
      </form>
      </div>
      </div>
    </div>
  );
}
export default Contact;
import React from 'react';

function Contact() {

  function hello(){
    alert('Hello there')
  }
  return (
    <div>
      <h1>Contact Me</h1>
      <ul>
        <li><strong>Email: </strong>vicklan132@gmail.com</li>
        <li><strong>Phone No:</strong>0710414911</li>
      </ul>
      <h2>Leave a message?</h2>
      <form onSubmit={hello}>
        <p>
        <label for = 'fullName: '>Full Name</label>
        <input type='text'id = 'fullName' ></input>
        </p>
        <p>
          <label for = 'message'>Message: </label>
        </p>
        <p>
          <input type='text' id = 'message'></input>
        </p>
        <input type='submit' id = 'submitButton'/>
      </form>
    </div>
  );
}
export default Contact;
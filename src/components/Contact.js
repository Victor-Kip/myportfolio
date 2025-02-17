import React,{useState} from 'react';

function Contact() {
  const [hasFeedback,setHasFeedback] = useState(false);
  const [feedMessage,setFeedMessage] = useState("");
  const[feedEmail,setFeedEmail] = useState("");
  const [feedFullName,setFeedFullName] = useState("");

  function writeFeedback(){
    if (feedMessage !== ''){
      setHasFeedback(true)
    }
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
      <div className = "message">
      <h2>Leave a message?</h2>
      <form onSubmit={writeFeedback}>
        <p>
        <label for = 'fullName '>Full Name :</label>
        <input type='text' id = 'fullName' name = 'fullName' onChange={(e)=>setFeedFullName(e.target.value)} ></input>
        </p>
        <p>
        <label for = 'email '>Email :</label>
        <input type='email' id = 'email' name = 'email' onChange={(e)=>setFeedEmail(e.target.value)} ></input>
        </p>
        <p>
          <label for = 'message'>Message: </label>
        </p>
        <p>
          <textarea id = 'message' name = 'message' rows={5} cols={50} onChange={(e)=>setFeedMessage(e.target.value)}></textarea>
        </p>
        <input type='submit' id = 'submitButton'/>
      </form>
      </div>
      </div>
      <h3>Feedback</h3>
      {hasFeedback && (
        <div>
        <p>{feedFullName}</p>
        <p>feedMessage</p>
        </div>
      )}
    </div>
  );
}
export default Contact;
import React,{useState} from 'react';
import axios from 'axios';

function Contact() {
  const [feedMessage, setFeedMessage] = useState("");
  const [feedEmail, setFeedEmail] = useState("");
  const [feedFullName, setFeedFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const writeFeedback = async (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (!feedMessage || !feedEmail || !feedFullName) {
      setError("Please fill out all fields.");
      return;
    }

    const feedbackData = {
      message: feedMessage,
      email: feedEmail,
      fullName: feedFullName,
    };

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/feedback", feedbackData);
      console.log("Feedback submitted successfully:", response.data);

      setFeedMessage("");
      setFeedEmail("");
      setFeedFullName("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <label htmlFor = 'fullName '>Full Name :</label>
        <input type='text' id = 'fullName' name = 'fullName' value={feedFullName} onChange={(e)=>setFeedFullName(e.target.value)} ></input>
        </p>
        <p>
        <label htmlFor = 'email '>Email :</label>
        <input type='email' id = 'email' name = 'email' value = {feedEmail}onChange={(e)=>setFeedEmail(e.target.value)} ></input>
        </p>
        <p>
          <label htmlFor = 'message'>Message: </label>
        </p>
        <p>
          <textarea id = 'message' name = 'message' rows={5} cols={50} value = {feedMessage}onChange={(e)=>setFeedMessage(e.target.value)}></textarea>
        </p>
        <input type='submit' disabled={isSubmitting} />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isSubmitting && <p>submitting feedback...</p>}
      </div>
      </div>
    </div>
  );
}
export default Contact;
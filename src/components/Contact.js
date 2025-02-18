import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [feedMessage, setFeedMessage] = useState("");
  const [feedEmail, setFeedEmail] = useState("");
  const [feedFullName, setFeedFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const writeFeedback = async (event) => {
    event.preventDefault();

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
    console.log("Submitting feedback:", feedbackData);


    try {
      const response = await axios.post("http://localhost:5000/feedback", feedbackData);
      console.log("Full API Response:", response);  // Log full response
      console.log("Response Data:", response.data); // Log only data
      setSuccessMessage(response.data.message);
      setSuccess(true);
  } catch (error) {
      console.error("Error submitting feedback:", error);
      setError("An error occured")
      if (error.response) {
          console.error("Server Response:", error.response.data);
      } else if (error.request) {
          console.error("No response received:", error.request);
      } else {
          console.error("Axios error:", error.message);
      }
  }
   finally {
      setIsSubmitting(false);
    }
  }
  useEffect(() => {
    if (success) {
        const timer = setTimeout(() => {
            setSuccess(false);
            setSuccessMessage('');
        }, 3000);
        return () => clearTimeout(timer);
    }
}, [success]);

  ;

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
        <div className="message">
          <h2>Leave a message?</h2>
          <form onSubmit={writeFeedback}>
            <p>
              <label htmlFor='fullName'>Full Name :</label>
              <input type='text' id='fullName' name='fullName' value={feedFullName} onChange={(e) => setFeedFullName(e.target.value)} aria-label="Full Name" />
            </p>
            <p>
              <label htmlFor='email'>Email :</label>
              <input type='email' id='email' name='email' value={feedEmail} onChange={(e) => setFeedEmail(e.target.value)} aria-label="Email" />
            </p>
            <p>
              <label htmlFor='message'>Message: </label>
            </p>
            <p>
              <textarea id='message' name='message' rows={5} cols={50} value={feedMessage} onChange={(e) => setFeedMessage(e.target.value)} aria-label="Message"></textarea>
            </p>
            <input type='submit' disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"} aria-label="Submit Feedback" />
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
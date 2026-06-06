import { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="border p-3 w-50 mt-5 bg-light">
        <h1 className="text-center">Contact Us</h1>

        <br />

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            className="form-control"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="What is this about?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="2"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />

          <div className="float-end">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

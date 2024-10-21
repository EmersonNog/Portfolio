import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Email.css";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill out all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_2tvpiaq",
        "template_uphvs4b",
        templateParams,
        "pg-3XEBvcm85Dqr5Z"
      )
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email sent successfully!");
        },
        (err) => {
          console.log("Error:", err);
          toast.error("Failed to send email");
        }
      );
  }

  return (
    <>
      <form className="form" onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input
          className="input"
          type="text"
          placeholder="Your name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label htmlFor="">Email Address</label>
        <input
          className="input"
          type="email"
          placeholder="email@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="">Message</label>
        <textarea
          className="textarea"
          placeholder="Your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button className="button" type="submit">
          Send Feedback <i className="fas fa-arrow-right arrow-icon"></i>
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default Email;

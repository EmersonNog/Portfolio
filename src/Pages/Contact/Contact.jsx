import Email from "../../Components/Email/Email";
import AnimatedSection from "../../Components/Animate/Animate";
import "./Contact.css";

function Contact() {
  return (
    <AnimatedSection>
      <div className="email-container" id="email-container">
        <h1 className="email-title">
          Ready to take your <span>digital presence</span> to the next level?
        </h1>
        <span>Don't settle for "good enough" - let's make it great!</span>
        <Email />
      </div>
    </AnimatedSection>
  );
}

export default Contact;

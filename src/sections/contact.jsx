import emailjs from "@emailjs/browser";
import { useRef } from "react";
import '../styles/contact.css';
function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_79bz6hp",
    "template_pdlioxq",
    form.current,
    "7GnOUa8QxJjLq_hIV"
  )
  .then(() => {
    alert("Message sent successfully ✅");
  })
  .catch(() => {
    alert("Failed to send ❌");
  });
};
    return (
    <section id="contact">
        <h3 className="contact-title">Lets Connect !</h3>
<form ref={form} onSubmit={sendEmail} className="contact-form">
  <input 
    type="email" 
    name="user_email" 
    placeholder="Your Email" 
    required 
  />

  <textarea 
    name="message" 
    placeholder="Your Message" 
    required 
  ></textarea>

  <button type="submit">Send</button>
</form>
</section>
    );
}

export default Contact;
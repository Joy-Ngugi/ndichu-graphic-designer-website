import React from 'react';

function Contact() {
  return (
   <div class="contact-container">
  <h2 style={{fontSize:"35px"}}>Contact Me</h2>
  <p>Interested in collaborating? <br></br>Feel free to reach out to me for freelance projects, consultations, or just to say hello!</p>
  
  <div class="contact-details">
    <h3>Contact Details</h3>
    <p><strong>Email:</strong> francisndichu2020@gmail.com</p>
    <p><strong>Phone:</strong> +254 769 123 694</p>
    <p><strong>Location:</strong> Nairobi, Kenya</p>
  </div>
  
  <div class="social-media">
    <h3>Follow Me On </h3>
    <a href="https://www.facebook.com/share/1Zksnw8c12/" target="_blank" class="social-icon facebook" aria-label="Facebook">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://x.com/IAmTheKamau" target="_blank" class="social-icon twitter" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/n.d.i.c.h.u1?igsh=dzJncTQxbGxjYmtw" target="_blank" class="social-icon instagram" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/in/francis-ndichu-591166261/" target="_blank" class="social-icon linkedin" aria-label="LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>
  );
}

export default Contact;
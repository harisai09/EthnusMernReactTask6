import React from 'react';

const Contact = () => {
  const labelStyle = { color: '#F1B4BB' }; 

  return (
    <section>
      <h2>Contact</h2>
      <p>
        I'm always open to new opportunities and collaborations. Please feel free to reach out to me anytime!
      </p>
      <ul>
        <li>
          <strong style={labelStyle}>Email:</strong> <a href="mailto:veerahari373@gmail.com">Email</a>
        </li>
        
        <li>
          <strong style={labelStyle}>GitHub:</strong>{' '}
          <a href="https://github.com/harisai09" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <p>
        I'm looking forward to connecting with you!
      </p>
    </section>
  );
};

export default Contact;

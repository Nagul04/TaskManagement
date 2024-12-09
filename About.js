import React, {useState} from 'react';
import './AboutCss.css'
const About = () => {
  const[comment,setcomment]=useState("");
  function update_comment(e){
    setcomment(e.target.value);
 }
  return (
    <div className="about-page">
      <h1>About Our Task Management App</h1>
      <p>
        Welcome to BuzzFlow, where productivity meets simplicity! Our
        task management app is designed to streamline your daily activities,
        helping you stay organized, focused, and in control of your tasks.
        Whether you're a professional managing work projects or an individual
        keeping track of personal to-dos, our app is here to make your life
        easier.
      </p>

      <h2>Why Choose BuzzFlow?</h2>
      <h3>User-Friendly Interface</h3>
      <p>
        We believe in the power of simplicity. Our intuitive and user-friendly
        interface ensures that you can start managing your tasks effortlessly
        from day one. No steep learning curves—just a smooth experience.
      </p>

      

      <h2>Our Mission</h2>
      <p>
        At BuzzFlow, our mission is to empower individuals and teams to
        achieve more by providing them with the tools they need to manage their
        tasks efficiently. We believe that a well-organized task management
        system is the key to unlocking productivity and reducing stress.
      </p>

      <h2>Get Started Today!</h2>
      <p>
        Ready to take control of your tasks? Download BuzzFlow now and
        experience the difference. Join thousands of users who have already
        embraced a more organized and productive life.
      </p>

      <p>
        If you have any questions, feedback, or suggestions, feel free to{' '}
        <a href="mailto:info@yourappname.com">contact us</a>. We're here to
        help!
      </p>

      <p>Thank you for choosing BuzzFlow for your task management needs. Happy tasking!</p>
      <textarea value={comment} onChange={update_comment} placeholder="Your Comments are Welcomed"/>
    </div>
  );
};

export default About;
import React from 'react';
import '../styles/Section.css';
import myPic from '../Assets/images/myImage.jpg'
// import myPic from '../images/myImage.jpg'

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section1() {
  return (
    <section>
      <aside className = "left">
      <h1 id ="aboutMe">About Me</h1>
      <img className = "myFace" src={myPic} width = "300" height = "300" alt = "Picture of me."/>
      </aside>
      <main className = "right">
            <p>  I am a Recent Graduate from Southern New Hampshire University Earning my Bachelors Degree in Computer Science with a concentration in Software Engineering. I learned languages like Java, C++, Embedded C, and Pyton before graduating Summa Cum Laude with a GPA of 3.95.  While attending SNHU, I also attended University of New Hampshire's full stack software development bootcamp where I learned the following languages, HTML, CSS, JavaScript, Graphql, and Reactjs. I'm from the United States, born in Boston MA and raised in Malden MA and current live in Salem NH. My all time favorite hobby is racing cars as well as working on cars, in the performance enhancing way, I also enjoy the causual video game whenever I can, mainly racing games. Ultimatly, I enjoy any kind of software developing, but I do prefer the more challenging tasks that stimulate the mind as well as further my knowledge. The main reason for wanting to become a programmer is that I very much enjoy technology whether is hardware or software.  I do take more of a liking to the software due to the many amazing applications that can be created.  
            </p>

            <p>As of right now I am also in the process of completly updating this portfolio to better showcase my knowledge.  The new profile makes better use of react components as well as using react router.  This new page will list out projects seperated by the language used and this new portfolio will be more scalable. Here is the link to the github respository for the page once I have it deployed I will have a link to the deployed page. </p>

            <center><a href='https://github.com/coreyNance/My_Portfolio'>Updated portfolio Github(in production)</a></center>
        </main>
    </section>
  );
}


export default Section1;

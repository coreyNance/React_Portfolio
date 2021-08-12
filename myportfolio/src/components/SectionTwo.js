import React from 'react';
import '../styles/Section.css';
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

function Section2() {
  return (
    <section>
      <aside className = "left">
      <h1 id ="aboutMe">About Me</h1>
      <img className = "myFace" src="Assets/images/myImage.jpg" width = "300" height = "300" alt = "Picture of me."/>
      </aside>
      <main className = "right">
            <p>  I am a Software Development student at UNH's bootcamp as well as a Software Engineering student at SNHU's Bachelor Degree program I'm from the United States, born in Boston MA and raised in Malden MA and current live in Salem NH.. My all time favorite hobby is racing cars as well as working on cars, in the performance enhancing way.  I also enjoy the causual video game whenever I can, mainly racing games. Ultimatly, I enjoy any kind of software developing, but my dream job would most likely be developing performance programs for a racing team where I may be afforded the opportunity to test out my work on a closed course. Why do you want to be a web developer? I enjoy technology, one of my favorite things to do is to enhance and push a car's performance to the limits which takes alot of creativity to achiveve that goal. I also love the technology behind software development which becoming a developer gives me the best of both worlds.
            </p>
        </main>
    </section>
  );
}

function SectionTwo() {
  return (
    <section>
      <aside className = "left">
                <h1 id = "work">Work</h1>
        </aside>
        <main className = "right">
        
            <div className = "container">

                <figure class = "sunsetImage bigImage">
                    <a href = "https://shielded-tor-91530.herokuapp.com/login" target = "_blank">
                     <img src="Assets/images/paddock.png" height = "400" alt = "Find Me Food Website Image"/>
                     </a>
                     <figcaption>
                         <h3>Paddock</h3>
                         Fullstacks Group Project
                     </figcaption>
                     <a class = "resLink" href ="https://github.com/luketeal/projectAwesome" target ="_blank">Paddock Repository</a>
                </figure>

                
                <figure class = "sunsetImage bigImage">
                    <a href = "https://unh-bootcamp-projects.github.io/project-1-group-c/" target = "_blank">
                     <img src="Assets/images/FindMeFoodBig.png" height = "400" alt = "Find Me Food Website Image"/>
                     </a>
                     <figcaption>
                         <h3>Find Me Food</h3>
                         API Group Project
                     </figcaption>
                     <a class = "resLink" href ="https://github.com/UNH-Bootcamp-Projects/project-1-group-c" target ="_blank">Find Me Food Repository</a>
                </figure>
                
                

                <figure class = "sunsetImage">
                    <a href = "https://coreynance.github.io/WeatherApplication/" target = "_blank">
                    <img  src="Assets/images/WeatherAppBig.png" width = "100" height = "200" alt = "Weather app website"/>
                    </a>
                    <figcaption>
                        <h3>Weather Application</h3>
                        Working with APIs
                    </figcaption>
                    <a class = "resLink" href ="https://github.com/coreyNance/WeatherApplication" target ="_blank">Weather Application Repository</a>
                </figure>

                <figure class = "sunsetImage"> 
                    <a href = "https://coreynance.github.io/Car_Enthusiast_Quiz/" target = "_blank">
                    <img src="Assets/images/codeQuizBig.png" width = "100" height = "200" alt = "quiz website image"/>
                    </a>
                    <figcaption>
                        <h3>Car Car Enthusiast Quiz</h3>
                        Test your car knowledge
                    </figcaption>
                    <a class = "resLink" href ="https://github.com/coreyNance/WeatherApplication" target ="_blank">Weather Application Repository</a>
                </figure>

                <figure class = "sunsetImage">
                    <a href = "https://github.com/coreyNance/CPlusPlus-Program/blob/master/Main2.cpp" target = "_blank">
                    <img src="Assets/images/CPlusPlus.png" width = " 300" height = "200" alt = "C++ program image"/>
                    </a>
                    <figcaption>
                        <h3>C++ Programming</h3>
                        The Zoo application
                    </figcaption>
                    <a class = "resLink" href ="https://github.com/coreyNance/CPlusPlus-Program" target ="_blank">The Zoo Application Repository</a>
                </figure>

                <figure class = "sunsetImage">
                    <a href = "https://coreynance.github.io/Daily_Planner/" target = "_blank">
                    <img src="Assets/images/DailyPlannerBig.png" width = "300" height = "200" alt = "Daily Planner image"/>
                    </a>
                    <figcaption>
                        <h3>Daily Planner</h3>
                        Working with MommentJS
                    </figcaption>
                    <a class = "resLink" href ="https://github.com/coreyNance/Daily_Planner" target ="_blank">Daily Planner Repository</a>
                </figure>

            </div>

        </main>
    </section>
  );
}

export default SectionTwo;

import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css"; 

function Home() {
  return ( 
   <div className='home'>
     <div className='about'>
      <h2>Hey, I am Mayank</h2>
      <div className='prompt'>
        <p>
          A Software engineer with a passion for building things.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
      </div>
     </div>
     <div className='skills'>
       <h1>
        Skills
       </h1>
       <ol className='list'>
         <li className='item'>
          <h2>Backend</h2>
          <span>
            Spring MVC, Spring Boot, REST, ApolloServer, Tomcat
            MySQL, DynamoDB, AWS Lamba, S3, PostgresSQL, Maven,
            Redis, AWS Elasticcache
          </span>
         </li>
         <li className='item'>
          <h2>Languages</h2>
          <span>Java, Python, C, C++, TypeScript, Golang, PHP</span>
         </li>
         <li className='item'>
          <h2>Front-End</h2>
          <span>HTML, CSS, ReactJS, BootStrap, MaterialUI</span>
         </li>
       </ol>
       
      </div>   
   </div>
  )
}


export default Home

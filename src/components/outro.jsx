import React from "react";
import "./css/outro.css";

const outro = () => {
  return (
    <>
      <div className="footer" id="idAbout">
        <div className="About">
          <h1 className="headingAbout">About</h1>
          <p className-="footerContent">
            The site displays data collected by NASA, the NASA Image of the Day
            and some recent Near Earth Objects. It's real-time data obtained
            through their open APIs. The site is built using ReactJS and hosted
            on Deep Web Africa (the hosting keeps changing, but the site is
            always somewhere, in a data center, safe:) The project is open
            source and availabe on GitHub. All images are copyright of their
            respective owners. See blog post on <u>blog.genZtech.xyz</u> for
            more details on the project.
            <br />
            Created by Riunge Maina for Castynet.
          </p>
        </div>
        <div className="Products">
          <h1 className="headingAbout">Links</h1>
          <ul className-="footerContent">
            <li>
              <a href="https://www.instagram.com/castynet_/?hl=en">
                @castynet instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/thebrownpirate">Twitter</a>
            </li>
            <li>
              <a href="mailto:riungemaina@gmail.com">Contact the Developer</a>
            </li>
            <li>
              <a href="https://github.com/castynet/react-nasa">
                project files, GitHub
              </a>
            </li>
            <li>
              <a href="https://www.nukesafaris.co.ke/">NukeSafaris</a>
            </li>
            <li>
              <a href="https://www.riungemaina.xyz">
                Portfolio: I'm looking for a good job :)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          copyright <span className="andCopy">©</span> 2020 Castynet all rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default outro;

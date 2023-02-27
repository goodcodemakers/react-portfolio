import React from "react";
import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="skill">
        <h3>기술 스택</h3>
        <div className="skillBox">
          <div className="row">
            <img src="./image/html.png" alt="html" />
            <img src="./image/css.png" alt="css" />
            <img src="./image/js.png" alt="js" />
          </div>
          <div className="row">
            <img src="./image/jq.png" alt="jq" />
            <img src="./image/node.png" alt="node" />
            <img src="./image/react.png" alt="react" />
          </div>
        </div>
      </div>

      <div className="tool">
        <h3>TOOL</h3>
        <div className="toolBox">
          <img src="./image/github.png" alt="github" />
          <img src="./image/pig.png" alt="pig" />
          <img src="./image/ps.png" alt="ps" />
        </div>
      </div>
    </section>
  );
}

export default About;

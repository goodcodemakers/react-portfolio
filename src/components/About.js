import React from 'react'
import './About.css'
function About() {
  return (
    <section id="about">
    <div class="process">
      <h3>수료한 과정</h3>
      <div class="processcontent">
        <p>
          (스마트웹&콘텐츠개발)UI/UX웹디자인(웹퍼블리셔&프론트엔드개발)실무
        </p>
        <p>22.08~23.02</p>
      </div>
    </div>
    <div class="skill">
      <h3>기술 스택</h3>
      <div class="skillBox">
        <div class="row">
          <img src="./image/html.png" alt="html" />
          <img src="./image/css.png" alt="css" />
          <img src="./image/js.png" alt="js" />
        </div>
        <div class="row">
          <img src="./image/jq.png" alt="jq" />
          <img src="./image/node.png" alt="node" />
          <img src="./image/react.png" alt="react" />
        </div>
      </div>
      
    </div>
   
    <div class="tool">
      <h3>TOOL</h3>
      <div class="toolBox">
        <img src="./image/github.png" alt="github" />
        <img src="./image/pig.png" alt="pig" />
        <img src="./image/ps.png" alt="ps" />
      </div>
    </div>
  </section>
  )
}

export default About

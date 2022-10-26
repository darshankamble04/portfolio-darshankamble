import './App.css';
import './css/utils.css'
import GIF1 from './Assets/gif-12.gif'
import portfolio from './Assets/portfolio.png'
import notebooks from './Assets/notebooks.png'
import loopChat from './Assets/loopChat.png'
import quotewebsite from './Assets/quotewebsite.png'
import linkedin from './Assets/linkedin.png'
import instagram from './Assets/instagram.png'
import gmail from './Assets/gmail.png'
import dbms from './Assets/dbms.jpg'
import github from './Assets/github.png'
import twitter from './Assets/twitter.png'
import avatar from './Assets/avatar.jpg'
import pwdchecker from './Assets/pwdchecker.png'
import ProjectCard from './components/ProjectCard';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
function App() {

  const [posiR, setPosiR] = useState([])
  const [posiB, setPosiB] = useState([])
  const mouseMoveRed = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    setPosiR([x - 120, y - 120])
  };
  const mouseMoveBlue = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    setPosiB([x - 60, y - 60])
  };

  const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"))
  const [css, setCss] = useState({})
  useEffect(() => {
    if(!localStorage.getItem("portfolio-theme")){setThemeL("#e0e0e0")}
    switch (theme) {
      case "#e0e0e0":
        setCss({
          color:"black"
        })
        break;

      case "black":
        setCss({
          color:"rgb(255 255 255 / 55%)"
        })
        break;

      case "#15202b":
        setCss({
          color:"rgb(255 255 255 / 55%)",
        })
        break;

      case "gray":
        setCss({
          color:"black"
        })
        break;
    }
    console.log(theme)
  }, [theme, localStorage.getItem("portfolio-theme")])


  const setThemeL = (color) => {
    setTheme(color)
    localStorage.setItem("portfolio-theme", color)
  }
 const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div style={{background:theme}} onLoad={() => { console.log("isLoaded") }} className="kdContainer">
      <div style={{ transform: `translate3d(${posiR[0]}px,${posiR[1]}px,0px)` }} className="circle circleR"></div>
      <div style={{ transform: `translate3d(${posiB[0]}px,${posiB[1]}px,0px)`, background: "blue" }} className="circle circleB"></div>
      {/* <div style={{ transform: `translate3d(${posiY[0]}px,${posiY[1]}px,0px)` ,background:"#15202b"}} className="circle circleB"></div> */}

      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} css={css} />
      <div className={`right margincal ${!toggleSidebar?"toggleRight":""}`}>
        <div  onMouseMove={(e) => { mouseMoveBlue(e) }} className="containerBox d-flex justify-content-between align-items-center">
          <h3 className='text-center textShadow-1 d-flex align-items-center'><span onClick={()=>{setToggleSidebar(toggleSidebar?false:true)}} class="material-symbols-outlined  menuIcon mx-3" style={css}>menu</span><span className='mx-4' style={css}>Hii, I'm Darshan Kamble</span></h3>
          <div className="impLinks">
            <a href="https://www.linkedin.com/in/darshankamble04/" target="_blank" rel="noopener noreferrer"><img href="/#hii" className='mx-1' src={linkedin} alt="..." /></a>
            <a href = "mailto: darshankamble7371@gmail.com" target="_blank" rel="noopener noreferrer"><img className='mx-1' src={gmail} alt="..." /></a>
            <a href="http://github.com/darshankamble04" target="_blank" rel="noopener noreferrer"><img className='mx-1' src={github} alt="..." /></a>
            {/* <img className='mx-1' src={instagram} alt="..." /> */}
            
            
            {/* <img className='mx-1' src={twitter} alt="..." /> */}
          </div>
        </div>
        <br />
        <div className="d-flex">
          <div  onMouseMove={(e) => { mouseMoveBlue(e) }} className="d-flex ll">

            <h4 style={css} className='d-flex textShadow-1'>
              <span className="material-symbols-outlined d-flex align-items-center a1234" style={css}>local_cafe</span>
              <br /> coffee with me?</h4> </div>
          <div  onMouseMove={(e) => { mouseMoveRed(e) }} className="containerBox rr d-flex ">
            <div className="leftCB d-flex">
              <img src={avatar}  className="avatar containerBox"></img>
              <br />
              <h4 style={css} className="text textShadow-1">
                Personalize Theme
              </h4>
              <div className="themeDots cursor-pointer d-flex my-2">
                <div onClick={() => { setThemeL("#e0e0e0") }} className={`dot mx-2 ${theme === "#e0e0e0" ? "selectedDot" : ""}`} style={{ background: "#e0e0e0" }}><span class={`material-symbols-outlined ${theme === "#e0e0e0" ? "" : "d-none"}`}>check</span></div>

                <div onClick={() => { setThemeL("black") }} className={`dot mx-2 ${theme === "black" ? "selectedDot" : ""}`} style={{ background: "black" }}><span class={`material-symbols-outlined ${theme === "black" ? "" : "d-none"}`}>check</span></div>

                <div onClick={() => { setThemeL("#15202b") }} className={`dot mx-2 ${theme === "#15202b" ? "selectedDot" : ""}`} style={{ background: "#15202b" }}><span class={`material-symbols-outlined ${theme === "#15202b" ? "" : "d-none"}`}>check</span></div>

                <div onClick={() => { setThemeL("gray") }} className={`dot mx-2 ${theme === "gray" ? "selectedDot" : ""}`} style={{ background: "gray" }}><span class={`material-symbols-outlined ${theme === "gray" ? "" : "d-none"}`}>check</span></div>

              </div>
              {/* style={{ fontSize: "0.6rem" }}  */}
              <p style={{...css,fontSize:"0.6rem"}} className="text-center">
                *Theme setting will be saved for your next visit
              </p>
            </div>
            <div className="rightCB d-flex justify-content-center flex-column">
              <h2 style={css} className='textShadow-1'>What do I do?</h2>
              <h4 style={css} >Crazy full stack developer who wants to explore every tech stack. <br /> I am an engineer by profestion and A developer by passion I would love to connect with you.</h4>
            </div>
          </div>

        </div>
        <br />
        <div id='mySkill' className="d-flex encounterflex">
          <div className="margin-5">
            <div  className="leftBox leftBox1 containerBox">
              <h3 style={css} className='textShadow-1' >More about me</h3>
              <br />
              <p style={css}>I am a Computer Engineer <br /><br />
                Apart from academics, I love to build new projects and codepens just to tickle my brain. <br /><br />
                Now a days, people are addicted to Insta Reels and Snapchatting. I am geeky and I am addicted to Green Dots of GitHub.</p>
            </div>
            <br /><br />
            <div  className="leftBox leftBox2">
              <h3 style={css} className='textShadow-1'>Tech that i mastered</h3>
              <br />
              <p style={css}>My primary focus on React and JavaScript</p>
              <div style={css} className="d-flex bShadow-1">
                <div>
                  <span style={css}>HTML/CSS</span>
                  <br /><span style={css}>JAVASCRIPT</span>
                  <br /><span style={css}>REACT JS</span>
                  <br /><span style={css}>BOOTSTRAP</span>
                  <br /><span style={css}>TAILWIND CSS</span>
                </div>
                <div>
                  <span style={css}>MATERIAL UI</span>
                  <br /><span style={css}>FIREBASE</span>
                  <br /><span style={css}>NODE JS</span>
                  <br /><span style={css}>EXPRESS JS</span>
                  <br /><span style={css}>MONGODB</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="gif">

            </div>
            <div  className="media containerBox text-center">
              <img src={GIF1} alt="..."></img>
              <br />
              <br />
              <span style={css}>
                <h3 className='textShadow-1 my-3' style={css}>Find me on GitHub and LinkedIn</h3>
                GitHub <a rel="noopener noreferrer" href="https://github.com/darshankamble04" target="_blank" >@darshankamble04</a><br />
                LinkedIn <a rel="noopener noreferrer" href="https://www.linkedin.com/in/darshankamble04/" target="_blank" >@darshankamble04</a>
              </span>
            </div>
          </div>
        </div>
        <div className="containerBox">
          <h3 id='MyProjects' className="text-center textShadow-1" style={css}>Some of my past big projects</h3>
        </div>
        <br />
        <div className="d-flex flex-wrap">

          <ProjectCard css={css} codeUrl="https://github.com/darshankamble04/notebooks-frontend/" demoUrl="https://enotebooks-darshankamble.herokuapp.com/" imgUrl={notebooks} description="It is an application to create highly secure and functionl Notes and Notebooks on the web. Based on MERN stack." title="Notebooks" />
          <ProjectCard css={css} imgUrl={loopChat} codeUrl="" demoUrl="" description="It is a way to transfer messages(via chats) and multicast your messages(via groups) more faster. Based on REACT AND FIREBASE." title="Loop-chat" />
          <ProjectCard css={css} codeUrl="" demoUrl="" imgUrl={portfolio} description="My portfolio with four personalize themes as well as cool transparancy and cursor hover effect.Based on REACT." title="My portfolio" />




        </div>
        <br />
        <br />
        <br />
        <div className="containerBox">
          <h3 id='MyProjects' className="text-center textShadow-1" style={css}>Some of my past mini projects</h3>
        </div>
        <br />
        <div className="d-flex flex-wrap">

          <ProjectCard css={css} codeUrl="https://github.com/darshankamble04/Quotes-website" demoUrl="https://quotes-website.netlify.app/" description="This project is the part of REACT JS CERTIFICATION COURSE @freecodecamp.It is based on HTML, CSS and JAVASCRIPT" title="Quote website" imgUrl={quotewebsite} />
          <ProjectCard css={css} codeUrl="https://github.com/darshankamble04/password-strength-checker" demoUrl="https://github.com/darshankamble04/password-strength-checker" description="It ensure that user will enter strong password.It uses REGULAR EXPRESSIONS for password comparison. It is based on REACT JS" title="Password Strength Checker" imgUrl={pwdchecker} />
          <ProjectCard css={css} codeUrl="#" demoUrl="#" description="DBMS MINI PROJECT which uses database MONGODB and REACT frontend library and NODE JS as backend which runtime of js" title="DBMS MINI PROJECT" imgUrl={dbms} />




        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import './css/utils.css'
import GIF1 from './Assets/gif-12.gif'
import portfolio from './Assets/portfolio.png'
import notebooks from './Assets/notebooks.png'
import loopChat from './Assets/loopChat.png'
import ProjectCard from './components/ProjectCard';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
function App() {

  const [posiR, setPosiR] = useState([])
  const [posiB, setPosiB] = useState([])
  const mouseMoveRed = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    setPosiR([x - 60, y - 60])
  };
  const mouseMoveBlue = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    setPosiB([x - 60, y - 60])
  };
 
  const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"))
  const [css, setCss] = useState({})
  useEffect(() => {
    switch (theme) {
        case "#e0e0e0":
          setCss({
              background:"#e0e0e000",
              boxShadow: "rgb(190 190 190 / 50%) 8px 9px 20px, rgb(255 255 255 / 49%) -8px -8px 20px"
            })
            break;
        
          case "black":
        setCss({
          background:"#000",
          boxShadow: "rgb(190 190 190 / 50%) 8px 9px 20px, rgb(255 255 255 / 49%) -8px -8px 20px"
        })
        break;
    
      case "#15202b":
        setCss({
            background:"#15202b",
          boxShadow: "rgb(190 190 190 / 50%) 8px 9px 20px, rgb(255 255 255 / 49%) -8px -8px 20px",
          color:"#fff !important"
        })
        break;
    
      case "gray":
        setCss({
          background:"gray",
          boxShadow: "rgb(190 190 190 / 50%) 8px 9px 20px, rgb(255 255 255 / 49%) -8px -8px 20px"
        })
        break;
    
      default:
        setCss({
          background:"#e0e0e0",
          boxShadow: "8px 9px 20px #bebebe, -8px -8px 20px #ffffff"
        })
        break;
    }
    console.log(theme)
  }, [theme,localStorage.getItem("portfolio-theme")])
  
  const setThemeL=(color)=>{
    setTheme(color)
    localStorage.setItem("portfolio-theme",color)
  }
  
  
  return (
    <div style={css} onLoad={() => { console.log("isLoaded") }} className="kdContainer">
      <div style={{ transform: `translate3d(${posiR[0]}px,${posiR[1]}px,0px)` }} className="circle circleR"></div>
      <div style={{ transform: `translate3d(${posiB[0]}px,${posiB[1]}px,0px)`, background: "blue" }} className="circle circleB"></div>
      {/* <div style={{ transform: `translate3d(${posiY[0]}px,${posiY[1]}px,0px)` ,background:"#15202b"}} className="circle circleB"></div> */}

      <Sidebar css={css}/>
      <div className="right margincal">
        <div style={css} onMouseMove={(e) => { mouseMoveBlue(e) }} className="containerBox">
          <h3 className='text-center textShadow-1'>Hii, I'm Darshan Kamble</h3>
        </div>
        <br />
        <div className="d-flex">
          <div style={css} onMouseMove={(e) => { mouseMoveBlue(e) }} className="d-flex ll">

            <h4 className='d-flex textShadow-1'>
              <span className="material-symbols-outlined d-flex align-items-center a1234">local_cafe</span>
              <br /> coffee with me?</h4> </div>
          <div style={css} onMouseMove={(e) => { mouseMoveRed(e) }} className="containerBox rr d-flex ">
            <div className="leftCB d-flex">
              <div style={css} className="avatar containerBox"></div>
              <br />
              <h4 className="text textShadow-1">
                Personalize Theme
              </h4>
              <div className="themeDots cursor-pointer d-flex my-2">
                <div onClick={()=>{setThemeL("#e0e0e0")}} className={`dot mx-2 ${theme==="#e0e0e0"?"selectedDot":""}`} style={{ background: "#e0e0e0" }}><span class={`material-symbols-outlined ${theme==="#e0e0e0"?"":"d-none"}`}>check</span></div>

                <div onClick={()=>{setThemeL("black")}} className={`dot mx-2 ${theme==="black"?"selectedDot":""}`} style={{ background: "black" }}><span class={`material-symbols-outlined ${theme==="black"?"":"d-none"}`}>check</span></div>

                <div onClick={()=>{setThemeL("#15202b")}} className={`dot mx-2 ${theme==="#15202b"?"selectedDot":""}`} style={{ background: "#15202b" }}><span class={`material-symbols-outlined ${theme==="#15202b"?"":"d-none"}`}>check</span></div>

                <div onClick={()=>{setThemeL("gray")}} className={`dot mx-2 ${theme==="gray"?"selectedDot":""}`} style={{ background: "gray" }}><span class={`material-symbols-outlined ${theme==="gray"?"":"d-none"}`}>check</span></div>

              </div>
              <p style={{ fontSize: "0.6rem" }} className="text-center">
                *Theme setting will be saved for your next visit
              </p>
            </div>
            <div className="rightCB d-flex justify-content-center flex-column">
              <h2 className='textShadow-1'>What do I do?</h2>
              <h4>Crazy full stack developer who wants to explore every tech stack. <br /> I am an engineer by profestion and A developer by passion I would love to connect with you.</h4>
            </div>
          </div>

        </div>
        <br />
        <div className="d-flex encounterflex">
          <div className="margin-5">
            <div style={css} className="leftBox leftBox1 containerBox">
              <h3 className='textShadow-1 text-dark' >More about me</h3>
              <br />
              <p>I am a Computer Engineer <br /><br />
                Apart from academics, I love to build new projects and codepens just to tickle my brain. <br /><br />
                Now a days, people are addicted to Insta Reels and Snapchatting. I am geeky and I am addicted to Green Dots of GitHub.</p>
            </div>
            <br /><br />
            <div style={css} className="leftBox leftBox2">
              <h3 className='textShadow-1'>Tech that i mastered</h3>
              <br />
              <p>My primary focus on React and JavaScript</p>
              <div className="d-flex bShadow-1">
                <div>
                  <span>HTML/CSS</span>
                  <br /><span>JAVASCRIPT</span>
                  <br /><span>REACT JS</span>
                  <br /><span>BOOTSTRAP</span>
                </div>
                <div>
                  <span>MATERIAL UI</span>
                  <br /><span>FIGMA</span>
                  <br /><span>FIREBASE</span>
                  <br /><span>TAILWIND CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="gif">

            </div>
            <div className="media containerBox text-center">
              <img src={GIF1} alt="..."></img>
              <br />
              <br />
              <span>
                <h3 className='textShadow-1 my-3'>Find me on GitHub and LinkedIn</h3>
                GitHub <a href="https://github.com/darshankamble04" target="_blank" >@darshankamble04</a><br />
                LinkedIn <a href="#" target="_blank" >@darshankamble04</a>
              </span>
            </div>
          </div>
        </div>
        <div className="containerBox">
          <h3 id='MyProjects' className="text-center textShadow-1">Some of my past big projects</h3>
        </div>
        <br />
        <div className="d-flex flex-wrap">

          <ProjectCard codeUrl="https://github.com/darshankamble04/notebooks-frontend/" demoUrl="https://enotebooks-darshankamble.herokuapp.com/" imgUrl={notebooks} description="It is an application to create highly secure and functionl experience of Notes and Notebooks on the web. Based on MERN stack." title="Notebooks" />
          <ProjectCard imgUrl={loopChat} codeUrl="" demoUrl=""  description="It is a way to transfer messages(via chats) and multicast your messages(via groups) more faster. Based on REACT AND FIREBASE." title="Loop-chat"/>
          <ProjectCard codeUrl="" demoUrl="" imgUrl={portfolio} description="My portfolio with four personalize themes as well as cool transparancy and cursor hover effect.Based on REACT." title="My portfolio" />




        </div>
        <br />
        <br />
        <br />
        <div className="containerBox">
          <h3 id='MyProjects' className="text-center textShadow-1">Some of my past mini projects</h3>
        </div>
        <br />
        <div className="d-flex flex-wrap">

          <ProjectCard imgUrl={portfolio} />
          <ProjectCard imgUrl={portfolio} />
          <ProjectCard imgUrl={portfolio} />
          <ProjectCard imgUrl={portfolio} />
          <ProjectCard imgUrl={portfolio} />
          <ProjectCard imgUrl={portfolio} />




        </div>
      </div>
    </div>
  );
}

export default App;

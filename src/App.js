import './App.css';
import './css/utils.css'
import GIF1 from './Assets/gif-12.gif'
function App() {
  return (
    <div className="kdContainer">
      <div className="left">
        <nav className="rightNav">
          <ul>
            <li className='textShadow-1 selectedNav' ><a href="#">Home</a></li>
            <li><a className='textShadow-1' href="#">My Skill</a></li>
            <li><a className='textShadow-1' href="#">Blog</a></li>
            <li><a className='textShadow-1' href="#MyProjects">Projects</a></li>
            <li><a className='textShadow-1' href="#">Resume</a></li>
          </ul>
        </nav>
      </div>
      <div className="right container">
        <div className="containerBox">
          <h3 className='text-center textShadow-1'>Hii, I'm Darshan Kamble</h3>
        </div>
        <br />
        <div className="d-flex">
          <div className="d-flex ll"> 
          
          <h4 className='d-flex textShadow-1'>
          <span class="material-symbols-outlined d-flex align-items-center a1234">local_cafe</span>
            <br /> coffee with me?</h4> </div>
          <div className="containerBox rr d-flex ">
            <div className="leftCB d-flex">
              <div className="avatar containerBox"></div>
              <br />
              <h4 className="text textShadow-1">
                Personalize Theme
              </h4>
              <div className="themeDots d-flex my-2">
                <div className="dot mx-2" style={{ background: "#e0e0e0" }}></div>
                <div className="dot mx-2" style={{ background: "black" }}></div>
                <div className="dot mx-2" style={{ background: "blue" }}></div>
                <div className="dot mx-2" style={{ background: "gray" }}></div>
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
        <div className="d-flex">
          <div className="left">
            <div className="leftBox leftBox1">
              <h3 className='textShadow-1 text-dark' >More about me</h3>
              <br />
              <p>I am a Computer Engineer <br /><br />
                Apart from academics, I love to build new projects and codepens just to tickle my brain. <br /><br />
                Now a days, people are addicted to binge watching and Snapchatting. I am geeky and I am addicted to Green Dots of GitHub.</p>
            </div>
            <br /><br />
            <div className="leftBox leftBox2">
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
              <img src={GIF1}></img>
              <br />
              <br />
              <span>
                <h3 className='textShadow-1 my-3'>Find me on GitHub and LinkedIn</h3> 
                GitHub <a href="#" target="_blank" rel="noopener noreferrer">@darshankamble04</a><br />
                LinkedIn <a href="#" target="_blank" rel="noopener noreferrer">@darshankamble04</a>              </span>
            </div>
          </div>
        </div>
        <div className="containerBox">
          <h3 id='MyProjects' className="text-center textShadow-1">Some of my past projects</h3>
        </div>
        <br />
        <div className="d-flex">

        </div>

      </div>
    </div>
  );
}

export default App;

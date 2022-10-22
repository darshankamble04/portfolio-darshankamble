import React, { useState } from 'react'

function Sidebar({css,toggleSidebar, setToggleSidebar}) {
  const [posiV, setPosiV] = useState([])
  const mouseMoveViolet = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    setPosiV([x - 120, y - 120])
  };
    return (
        <div className={`left ${toggleSidebar?"d-none":""}`}>
            <div style={{ transform: `translate3d(${posiV[0]}px,${posiV[1]}px,0px)`, background: "violet" }} className="circle circleV"></div>

            <nav className="rightNav">
                <ul onMouseMove={(e) => { mouseMoveViolet(e) }}>
                    <li onClick={()=>{setToggleSidebar(true)}}><a style={css} className='textShadow-1' href="/#">Home</a></li>
                    <li onClick={()=>{setToggleSidebar(true)}}><a style={css} className='textShadow-1' href="#mySkill">My Skill</a></li>
                    <li onClick={()=>{setToggleSidebar(true)}}><a style={css} className='textShadow-1' href="#MyProjects">Projects</a></li>
                    <li onClick={()=>{setToggleSidebar(true)}} className='d-none'><a style={css} className='textShadow-1 d-flex jc-between' target="__blank" href="#">Blog <span class="material-symbols-outlined" style={css} >open_in_new</span></a></li>
                    <li onClick={()=>{setToggleSidebar(true)}}><a style={css} className='textShadow-1 d-flex jc-between' target="__blank" href="#">Resume <span class="material-symbols-outlined" style={css} >open_in_new</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

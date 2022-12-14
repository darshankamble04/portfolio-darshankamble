import React from 'react'

export default function ProjectCard({css, imgUrl ,description ,title,codeUrl,demoUrl}) {
    return (
        <div className="mt-5 containerBox costomCard card" style={{ width: "30%" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 style={css} className="card-title">{title}</h5>
                <p style={css} className="card-text">{description}</p>
                <div className="d-flex jc-between">
                    <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Source code</a>
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live demo</a>
                </div>
            </div>
        </div>
    )
}

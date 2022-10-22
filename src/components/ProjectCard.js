import React from 'react'

export default function ProjectCard({ imgUrl ,description ,title,codeUrl,demoUrl}) {
    return (
        <div className="mt-5 containerBox costomCard card" style={{ width: "30%" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex jc-between">
                    <a href={codeUrl} className="btn btn-secondary">Source code</a>
                    <a href={demoUrl} className="btn btn-secondary">Live demo</a>
                </div>
            </div>
        </div>
    )
}

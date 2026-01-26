import React from "react";
import feather from '../utils/feather';

const Project = () => {
    const PROJECTS = [
        // {
        //     name: "Musicbrackts",
        //     url: "https://musicbrackts.com"
        // },
        {
            name: "OneDayOnly Refined",
            url: "https://odo-refined.onrender.com"
        },
        {
            name: "Lwendo",
            url: "https://www.lwendo.com"
        },
        {
            name: "Solar Power Technologies",
            url: "https://solarpowertech.myshopify.com"
        },
        {
            name: "CreditWorth",
            url: "https://creditworth.co.za"
        },
        {
            name: "B.I.G Finance",
            url: "https://bigfinance.co.za"
        }
    ]

    const getSibling = (el, siblingSelector) => {
        if(el == null) return null;

        let parent = el.parentElement;
        let sibling = parent.querySelector(siblingSelector);

        return sibling;
    }

    function handleProjectClick(e) {
        let currProject = e.currentTarget;
        let currProjectContent = getSibling(currProject, ".project-content");

        if(currProjectContent.classList.contains("show")){
            currProjectContent.classList.remove("show");
            
            return;
        }

        document.querySelectorAll(".project-content").forEach(el => {
            el.classList.remove("show");
        })
        
        currProjectContent.classList.add("show");
    }
    return (
        <section className="section-wrapper w-100 h-100 py-5" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Projects</h2>
                    <p>I've built many websites. Here are few of them.</p>
                </div>
                <div className="section-content mt-5">
                    <div className="projects-wrapper">
                        { PROJECTS.map((project, idx) => (
                            <div className="project">
                                <h3 className="project-name" onClick={(e) => handleProjectClick(e)} onKeyDown={(e) => handleProjectClick(e, idx)}>
                                    <i>{idx+1}.</i>{project.name}
                                    <a href={project.url} target="_h" className="d-inline-block">{feather("external-link", [21, 21])}</a>
                                </h3>
                                <a className="project-content row" href={project.url} target="_h">
                                    <figure className="project-screenshot col-md-7">
                                        <img src={`https://api.microlink.io?url=${project.url}&screenshot=true&embed=screenshot.url`} loading="lazy" alt={project.name}/>
                                    </figure>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project

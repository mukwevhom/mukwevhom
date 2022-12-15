import React from "react";
import $ from 'jquery';
import feather from '../utils/feather';

const Project = () => {
    const PROJECTS = [
        {
            name: "Musicbrackts",
            url: "https://musicbrackts.com"
        },
        {
            name: "OneDayOnly Refined",
            url: "https://odo-refined.onrender.com"
        },
        {
            name: "Pandelani Psychotherapy",
            url: "https://pandelani.co.za"
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
            name: "Vhukhudo",
            url: "https://vhukhudo.co.za"
        },
        {
            name: "t-Drive",
            url: "https://t-drive.co.za"
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

    function handleProjectClick(e) {
        let currProject = e.currentTarget;

        let currProjectContent = $(currProject).siblings(".project-content");

        if(currProjectContent.hasClass("show")){
            currProjectContent.removeClass("show");
            
            return;
        }

        $(".project-content").removeClass("show");
        
        currProjectContent.addClass("show");
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
                                <h3 className="project-name" onClick={(e) => handleProjectClick(e)} onKeyDown={(e) => handleProjectClick(e)}>
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

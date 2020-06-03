import React from "react";
import $ from 'jquery';

export default () => {
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
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>1.</i>Musicbrackts</h3>
                            <a className="project-content row" href="//musicbrackts.com" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=https%3A%2F%2Fmusicbrackts.com&screenshot=true&embed=screenshot.url" loading="lazy" alt="Musicbrackts"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>2.</i>The Shave Union<span>while with Inbound</span></h3>
                            <a className="project-content row" href="//shaveunion.co.za" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=https%3A%2F%2Fshaveunion.co.za&screenshot=true&embed=screenshot.url" loading="lazy" alt="The Shave Union"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>3.</i>OneDayOnly Refined</h3>
                            <a className="project-content row" href="//odo-refined.herokuapp.com/" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=https%3A%2F%2Fodo-refined.herokuapp.com/&screenshot=true&embed=screenshot.url" loading="lazy" alt="OneDayOnly Refined"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>4.</i>Vhukhudo</h3>
                            <a className="project-content row" href="//vhukhudo.co.za" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=http%3A%2F%2Fvhukhudo.co.za&screenshot=true&embed=screenshot.url" loading="lazy" alt="Vhukhudo"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>5.</i>t-Drive</h3>
                            <a className="project-content row" href="//t-drive.co.za" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=http%3A%2F%2Ft-drive.co.za&screenshot=true&embed=screenshot.url" loading="lazy" alt="t-Drive"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>6.</i>Zuki</h3>
                            <a className="project-content row" href="//zuki.co.za" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=http%3A%2F%2Fzuki.co.za&screenshot=true&embed=screenshot.url" loading="lazy" alt="Zuki"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <h3 className="project-name" onClick={handleProjectClick}><i>7.</i>Inspire Academy</h3>
                            <a className="project-content row" href="//inspireacademy.co.za" target="_h">
                                <figure className="project-screenshot col-md-7">
                                    <img src="https://api.microlink.io?url=http%3A%2F%2Finspireacademy.co.za&screenshot=true&embed=screenshot.url" loading="lazy" alt="Inspire Academy"/>
                                </figure>
                                <div className="project-info col-md-5">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
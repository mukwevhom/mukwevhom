import React from "react";
import $ from 'jquery';
import HeadManager from "../components/head-manager";
import SocialLinks from "../components/socialLinks";
import Project from './project';

import '../styles/global.scss';

export default () => {
    function handleViewProjectClick(e) {
        e.preventDefault();

        $(".main-wrapper").scrollTop($("#projects").offset().top);

    }
    return (
        <div className="main-wrapper w-100 h-100">
            <HeadManager location="/" />
            <section className="section-wrapper w-100 h-100" id="intro-section">
                <div className="site-header col-lg-4 col-sm-6 col-xs-12 text-center">
                    <h1 className="m-0 black-text">Ndaa!!!</h1>
                    <p className="m-0 my-5">I'm Murendeni Mukwevho. I build websites and web applications. I currently work at <a href="//inbound.co.za" target="_h">Inbound</a></p>
                    <SocialLinks />
                </div>
                <a href="#" onClick={handleViewProjectClick} className="btn border rounded mt-5">View Select Projects</a>
            </section>
            <Project />
        </div>
    )
}

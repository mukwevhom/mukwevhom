import React from "react";
import HeadManager from "../components/head-manager";
import { Link, useScrollRestoration } from "gatsby";

import '../styles/uses.scss';

const Uses = () => {
    return (
        <main className="main-wrapper w-100 h-100">
            <HeadManager location="/uses" />
            <section className="section-wrapper py-5" id="uses-intro-section">
                <div className="section-content">
                    <div class="container">
                        <h1><Link to={"/"} className="home">Murendeni Mukwevho</Link> is a developer based in Johannesburg, South Africa. Currently working at <a href="//www.dotmodus.com/">DotModus</a></h1>
                        <p className="mt-4">Below are few tools and services I use everyday</p>
                    </div>
                </div>
            </section>
            <section className="section-wrapper py-5" id="uses-section">
                <div className="section-content container">
                    <div className="category">
                        <h4 className="category-title">Hardware</h4>
                        <ul className="category-uses mt-3">
                            <li>Macbook Pro, Late 2016, 13", i5<span>laptop</span></li>
                            <li>Dell S2240Lc<span>monitor</span></li>
                            <li>Apple Magic Keyboard<span>keyboard</span></li>
                            <li>Apple Magic Mouse 2<span>mouse</span></li>
                            <li>Motorola Moto G5s<span>phone</span></li>
                            <li>Sony WH-CH500<span>headset</span></li>
                        </ul>
                    </div>
                    <div className="category mt-5">
                        <h4 className="category-title">Development</h4>
                        <ul className="category-uses mt-3">
                            <li>VS Code<span>editor</span></li>
                            <li>Google Chrome<span>browser</span></li>
                            <li>Trello<span>task management</span></li>
                            <li>iTerm2 with Oh My zsh<span>terminal</span></li>
                            <li>Postman<span>api</span></li>
                        </ul>
                    </div>
                    <div className="category mt-5">
                        <h4 className="category-title">Extras</h4>
                        <ul className="category-uses mt-3">
                            <li>Spotify<span>music</span></li>
                            <li>DSTV Now & Showmax<span>tv shows</span></li>
                            <li>Google Keeps<span>notes</span></li>
                            <li>Google Podcast<span>podcast</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Uses;

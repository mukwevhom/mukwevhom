import React from "react";
import feather from '../utils/feather';

export default () => {
    const measureArray = ['21', '21'];
    
    return (
        <ul className="social-links mb-0">
            <li><a href="https://twitter.com/IAmMurendeni" target="_h">{feather('twitter', measureArray)}</a></li>
            <li><a href="https://github.com/mukwevhom" target="_h">{feather('github', measureArray)}<i data-feather="github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mukwevhom/" target="_h">{feather('linkedin', measureArray)}</a></li>
            <li><a href="mailto:murendeni@mukwevhom.xyz" target="_h">{feather('mail', measureArray)}</a></li>
        </ul>
    )
};
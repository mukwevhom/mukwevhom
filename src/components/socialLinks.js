import React from "react";
import feather from '../utils/feather';

const SocialLinks = () => {
    const measureArray = ['21', '21'];
    
    return (
        <ul className="social-links mb-0">
            <li><a href="https://x.com/IAmMurendeni" target="_h">{feather('twitter', measureArray)}</a></li>
            <li><a href="https://github.com/mukwevhom" target="_h">{feather('github', measureArray)}<i data-feather="github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mukwevhom/" target="_h">{feather('linkedin', measureArray)}</a></li>
        </ul>
    )
};

export default SocialLinks

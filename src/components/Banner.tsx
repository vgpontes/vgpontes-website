import Image from "react-bootstrap/Image";
import React, {useEffect, useState} from "react";
import bannerImage from "../images/banner.jpg"
import "./Banner.css"

function Banner() {
    const [isImageRendered, setImageRendered] = useState(false);

    useEffect(() => {
        // Set the flag to true after the first component has fully rendered
        setImageRendered(true);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className="parentContainer">
            <Image className="banner" src={bannerImage} fluid/>
            {isImageRendered && (
                <div className="centered">
                    <div className="bannerText">
                        <p className="superscript">Hi, I'm</p>
                        <h1 className="headerText">Victor</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;
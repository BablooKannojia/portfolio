import React from "react";
import "./Skills.css";
import HTML from "../../img/html-logo.png";
import {Container} from "react-bootstrap";
const Skills= ()=>{
    return(
        <>
            <div className="skill-background">
                <div className="Container">
                    <h1 className="text-center"> Skills </h1>
                    <div className="row row-cols-2 row-cols-lg-5">
                        <div className="cols">
                            <div className="skill-item">
                                <div className="skill-item-img">
                                    <img src={HTML} alt="" width="80px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;
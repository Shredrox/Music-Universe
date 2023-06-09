import React from "react";
import featuredProductImage from '../assets/mishaGuitar.png';

export function StartSection(){
    return (
        <div>
            <div className="homeSection">
                <div className="homeTextContainer">
                    <h1 className="homeH1">MUSIC UNIVERSE</h1>
                    <h2 className="homeH2">- everything about music in one place -</h2>
                </div>
            </div>
             <div className="featuredProductSection">
                <div className="featuredProduct">
                    <img className="featuredProductImg" src={featuredProductImage} alt="featuredProduct"/>
                    <p className="featuredProductText">
                        The Jackson Pro Series Signature Misha Mansoor Juggernaut HT6 
                        is a hard-rocking, djent-ready axe at a great price. 
                        Designed in conjunction with Periphery’s Misha Mansoor, 
                        the Juggernaut HT6 features a lightweight, resonant 
                        basswood body that kicks out all the growl and grit 
                        you need for djent as well as other hard rock genres. 
                        A pair of Jackson MM1 humbuckers delivers all the hot 
                        humbucking growl and grime you expect and are controlled 
                        with master volume and tone controls, plus a 5-way blade 
                        switch.
                    </p>
                </div>
            </div>
        </div>
    )
}
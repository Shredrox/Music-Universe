import React from "react";
import homeImage from '../assets/homeBackground.png';
import featuredProductImage from '../assets/mishaGuitar.png';

export function StartSection(){
    return (
        <div>
            <div class="homeSection">
                <img class="homeImage" src={homeImage} alt="homeImage"/>
                <div class="homeTextContainer">
                    <h1 class="homeH1">MUSIC UNIVERSE</h1>
                    <h2 class="homeH2">- everything about music in one place -</h2>
                </div>
            </div>
             <div class="featuredProductSection">
                <div class="featuredProduct">
                    <img class="featuredProductImg" src={featuredProductImage} alt="featuredProduct"/>
                    <p class="featuredProductText">
                        The Jackson Pro Series Signature Misha Mansoor Juggernaut HT6 
                        is a hard-rocking, djent-ready axe at a great price. 
                        Designed in conjunction with Periphery’s Misha Mansoor, 
                        the Juggernaut HT6 features a lightweight, resonant 
                        basswood body that kicks out all the growl and grit 
                        you need for djent as well as other hard rock genres. 
                        A pair of Jackson MM1 humbuckers delivers all the hot 
                        humbucking growl and grime you expect and are controlled 
                        with master volume and tone controls, plus a 5-way blade 
                        switch. A push-pull (on/off) pot on the tone control 
                        adds further to this electric guitar’s sonic versatility. 
                        A 1-piece caramelized maple neck, with a 20"-radius 
                        caramelized maple fingerboard and 24 jumbo frets is fast, 
                        playable, and comfortable.
                    </p>
                </div>
            </div>
        </div>
    )
}
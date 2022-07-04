import React from 'react';
import './AnimeSongs.css';
import Data from './data.js';

function AnimeSongs(){
    return(
        <>

            <div className="navigation">
                <ul>
                    <li className="list">
                        <a href="index.html">
                            <span className="icon"><ion-icon name="home-outline" /> </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#endnav">
                            <span className="icon"><ion-icon name="play-outline" /></span>
                            <span className="text">Bottom</span>
                        </a>
                    </li>
                </ul>
            </div>


            <section id="home">
                <h1 className="h1-primary">Welcome to Anime songs section</h1>
                <p>This section will provide you with all the anime songs that I have in this laptop.</p>
            </section>

            <section className="songs_container">
                <div className="box1">
                    {
                        Data.map((data)=>{
                            return <div>
                                <h2>{data.songName}</h2>
                                <video src={data.videoLink}
                                 controls width="750px" />
                                </div>
                        })}
                </div>
            </section>

            <nav id="endnav">
                <ul>
                    <li className="item"><a href="#home">Top</a></li>
                </ul>
            </nav>

        </>
    );
}

export default AnimeSongs;
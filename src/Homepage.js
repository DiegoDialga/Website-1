import React from 'react';
import AnimeSongs from './animeSongs.js';
import './HomePage.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function HomePage() {
    return (
        <React.StrictMode>
        <Router>
            <div className='navigation'>
                <ul>
                    <li className='list'>
                        <Link to='/'>
                            <span className='icon'>
                                <ion-icon name='home-outline' />
                            </span>
                            <span className='text'>Home</span>
                        </Link>
                    </li>

                    <li className='list'>
                        <a href='#services'>
                            <span className='icon'>
                                <ion-icon name='play-outline' />
                            </span>
                            <span className='text'> Services</span>
                        </a>
                    </li>

                    <li className='list'>
                        <a href='#'>
                            <span className='icon'>
                                <ion-icon name='information-circle-outline' />
                            </span>
                            <span className='text'> Help</span>
                        </a>
                    </li>

                    <li className='list'>
                        <a href='#'>
                            <span className='icon'>
                                <ion-icon name='settings-outline' />
                                <span className='text'> Settings</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <section id='home'>
                <h1 className='h-primary'>Welcome to the songs section.</h1>
                <p>This is just a demo website for some practice. The website was created just for some personal use and coding practice. Wanna see anything? Go ahead.</p>
                <button className = 'btn'>
                <a href = '#services'>Get started</a>
                </button> 
            </section>

            <section className='services-container'>
                <h1 className = 'h-primary center'>Our Services</h1>
                <div id = 'services'>
                    <div className = 'box'>
                        <Link to='/AnimeSongs'>
                            <img src = 'pictures/images (2).jpg' aria-hidden alt='Image not available' />
                            <h2 className = 'h-secondary center'>Anime Songs</h2>
                            <p className = 'center'>Here we provide with Anime Songs.</p> 
                        </Link>
                    </div>

                    <div className="box">
                        <Link to='EnglishSongs'>
                            <img src="pictures/1 direction.png" aria-hidden alt="Image not avaliable" />
                                <h2 className="h-secondary center"> English songs</h2>
                                <p className="center">Here we provide services with One direction and English songs.</p>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to='HindiSongs'>
                            <img src="pictures/kesari.png" aria-hidden alt="Image not avaliable" />
                                <h2 className="h-secondary center">Hindi songs</h2>
                                <p className="center">Here we provide services with Hindi songs.</p>
                        </Link>
                    </div>
                </div>
            </section>
                <Routes>
                    
                    <Route exact path='/AnimeSongs/' element={<AnimeSongs />} />
                    
                </Routes>
            </Router>
        </React.StrictMode>
    );
}


export default HomePage;
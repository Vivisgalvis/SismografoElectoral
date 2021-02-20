import React from 'react';
import Logo from '../img/logo.png';
import add from '../img/Home/add.png';
import avatar from '../img/Home/avatar-01.png';
import card from '../img/Home/card.png';
import home from '../img/Home/home.png';
import mdi_search from '../img/Home/mdi_search.png';
import search from '../img/Home/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css'


function Home () { 

    return (
           
<section className="animsition">
    <div className="page-wrapper">       
        <div className="page-container">           
            <header className="header-desktop">
                <div className="logo">             
                    <img src={Logo} />              
            </div>
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Buscar.." />
                                <button className="au-btn--submit" type="submit">
                                    <img src={mdi_search}/>
                                </button>
                            </form>
                            <div className="header-button">

                                <div className="account-wrap">
                                    <div className="account-item">
                                        <div className="image">
                                            <img src={avatar} />
                                        </div>
                                        <div className="content">
                                            john doe
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
           
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title-1">overview</h2>
                                </div>
                            </div>
                        </div>

                        <class className="row m-t-25">
                            <div className="col-lg-3">
                                <div className="overview-item ">
                                    <div className="iconAdd">
                                        <img src={add} />
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3">
                                <div className="overview-item home">
                                    <div className="overview-box">
                                        <div className="iconHome">
                                            <img src={home} />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="overview-item card">
                                    <div className="overview-box">
                                        <div className="iconCard">
                                            <img src={card} />
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3">
                                <div className="overview-item search" >
                                    <div className="overview-box">
                                        <div className="iconSearch">
                                            <img src={search} />
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </class>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="au-card recent-report">
                                    <div className="au-card-inner">
                                        <h3 className="title-2">Casos recientes</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </header></div></div></section>
    );
}

export default Home;
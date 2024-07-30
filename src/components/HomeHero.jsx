import React from 'react';
import "./Hero.css";
import SideImage from "../assets/cardimage.avif";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HomeHero() {
  return (
    <>
      {/* Hero Section */}
      <div className="mainherodiv">
        <div className="herodiv">
          <h1>Let us find your</h1>
          <h1 style={{ color: "red" }}>Forever Food.</h1>
          <p className="heropara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde nihil voluptate debitis at aut vitae illo laboriosam aliquid odit!</p>
          <button className="searchnow" style={{ backgroundColor: "red", color: "white" }}>Search Now</button>
          <button className="knowmore" style={{ backgroundColor: "white", color: "red" }}>Know More</button>
        </div>
      </div>

      {/* Card Section */}
      <div className="wrapper-card">
        <div className="image">
          <img src={SideImage} alt="sideimage" />
        </div>
        <div className="sidecard">
          <div>
            <h1>Lorem ipsum consectetur adipisicing elit. Fugit necessitatibus ndae!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat pariatur delectus, repudiandae libero rerum nobis blanditiis laboriosam consequatur! Accusantium iusto, adipisci quod at quo corrupti ratione eos sed laboriosam.</p>
            <button>Get in touch</button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section id="profile">
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
          
        </div>
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
          </div>
          <div className="profile">
            <div className="profileImage">
              <AccountCircleIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="nameandpost">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;

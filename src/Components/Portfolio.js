import React from 'react';
import { Grid } from '@material-ui/core';
import "./Portfolio.css"

const data = [
  {
    "title": "Corona Tracker(Web Application & Hybrid App)",
    "category": "",
    "image": "/images/portfolio/Covid.png",
    "url": "https://coronatracker19-a6553.web.app/"
  },
  {
    "title": "Real-Time-Chat-App",
    "category": "",
    "image": "/images/portfolio/chat.png",
    "url": "https://github.com/mustafahaider508/Real-Time-Chat-App"
  },
  {
    "title": "Tesla-clone WEB APPLICATION",
    "category": "",
    "image": "/images/portfolio/Tesla.png",
    "url": "https://tesla-clone-e90f0.web.app/"
  },
  {
    "title": "Slack",
    "category": "",
    "image": "/images/portfolio/Slack.png",
    "url": "https://github.com/mustafahaider508/Amazon-clone"
  },
  {
    "title": "Amazon-clone",
    "category": "",
    "image": "/images/portfolio/Amazon.png",
    "url": "https://github.com/mustafahaider508/Amazon-clone"
  }

]

function Portfolio() {
  return (
    <>
    <div className="main_div" >
    <div className="row">
      <h1 className="title">PROJECTS</h1>
      <p className="para">CHECK OUT SOME OF MY WORKS.</p>
       <Grid container spacing={3}>
            {data.map((i) =>
            <Grid item  md={4} sm={12} xs={12}>
             <div className="div">
             <a href={i.url}> <img  className="img" src={i.image} alt="" /></a>
              <p style={{color:"white",textAlign:"center"}}>{i.title}</p>
              </div>
            
        
           </Grid>
           )}
            </Grid>
            
        
    </div>
    </div>
    </>
  )
}

export default Portfolio


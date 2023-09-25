import React from 'react'
import './css/index'
import cases1 from '../image_resources/cases/cases1.jpg'
import cases2 from '../image_resources/cases/cases2.jpg'
import cases3 from '../image_resources/cases/cases3.jpg'
import cases4 from '../image_resources/cases/cases4.jpg'
import cases5 from '../image_resources/cases/cases5.jpg'
import cases6 from '../image_resources/cases/cases6.jpg'
import cases7 from '../image_resources/cases/cases7.jpg'
import cases8 from '../image_resources/cases/cases8.jpg'


function Cases() {
    return (
      <section id="cases" className="cases flex-grid section-padding">
        <header className="section-header">
          <h4>This is what we do</h4>
          <h2>Business Cases</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!</p>
        </header>
        <div className="row">
          <div className="column">
            <a
              href={cases1}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases1} alt="" />
            </a>
            <a
              href={cases2}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases2} alt="" />
            </a>
          </div>
          <div className="column">
            <a
              href={cases3}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases3} alt="" />
            </a>
            <a
              href={cases4}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases4} alt="" />
            </a>
          </div>
          <div className="column">
            <a
              href={cases5}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases5} alt="" />
            </a>
            <a
              href={cases6}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases6} alt="" />
            </a>
          </div>
          <div className="column">
            <a
              href={cases7}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases7} alt="" />
            </a>
            <a
              href={cases8}
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!"
            >
              <img src={cases8} alt="" />
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Cases;
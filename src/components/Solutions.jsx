import React from 'react'
import './css/index'
import people from "../image_resources/home/people.jpg"

function Solutions() {
  return (
    <>
      <section className="solutions flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src= {people} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h4>What you are looking for</h4>
              <h2>We provide bespoke solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="#" className="btn btn-outline">
                <i className="fas fa-chevron"></i>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solutions
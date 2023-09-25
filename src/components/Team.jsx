import React from 'react'
import './css/index'
import person1 from "../image_resources/team/person1.jpg"
import person2 from "../image_resources/team/person2.jpg"
import person3 from "../image_resources/team/person3.jpg"

function Team() {
  return (
    <>
    <section id="team" className="team section-padding">
        <header className="section-header">
          <h4>Who we are</h4>
          <h2>Our Professional Team</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!
          </p>
        </header>
        <div className="flex-items">
          <div>
            <img src={person1} alt="" />
            <h4>John Doe</h4>
            <p>President</p>
          </div>
          <div>
            <img src={person2} alt="" />
            <h4>Jane Doe</h4>
            <p>Vice President</p>
          </div>
          <div>
            <img src={person3} alt="" />
            <h4>Steve Smith</h4>
            <p>Marketing Head</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default Team
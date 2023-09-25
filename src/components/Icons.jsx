import React from 'react'
import './css/index'

function Icons() {
  return (
    <>
        <section id="about" className="icons bg-light">
            <div className="flex-items">
            <div>
                <i className="fas fa-university fa-2x"></i>
                <div>
                <h3>Investment Banking</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, iusto!
                </p>
                </div>
            </div>
            <div>
                <i className="fas fa-book-reader fa-2x"></i>
                <div>
                <h3>Portfolio Manager</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, iusto!
                </p>
                </div>
            </div>
            <div>
                <i className="fas fa-pencil-alt fa-2x"></i>
                <div>
                <h3>Tax & Custodial</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, iusto!
                </p>
                </div>
            </div>
            </div>
        </section>

    </>
  )
}

export default Icons
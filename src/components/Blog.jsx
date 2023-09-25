import React from 'react'
import './css/index'
 import blog from '../image_resources/home/blog.jpg'

function Blog() {
  return (
    <>
    <section id="blog" className="blog flex-columns flex-reverse">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src={blog} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-secondary">
              <h4>April 16 2020</h4>
              <h2>Blog Post One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="blog.html" className="btn btn-outline">
                <i className="fas fa-chevron"></i>
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
    </section>


    </>
  )
}

export default Blog
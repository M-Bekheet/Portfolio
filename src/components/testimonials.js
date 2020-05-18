import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import testimonialsStyles from './styles/testimonials.module.scss'

export const Testimonials = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="testimonials" className={testimonialsStyles.testimonials}>
      <h3 className="section-title">Testimonials</h3>

      <Carousel showStatus={false}>
        <div>
          <Img alt="slide1" fixed={data.placeholderImage.childImageSharp.fixed} />
          <p className={testimonialsStyles.legend}>Very responsive, and very flexible in terms of time and direction. Definitely recommended!</p>
          <p className={testimonialsStyles.clientName}>Peter<span>, United States</span></p>
        </div>
        <div>
          <Img alt="slide2" fixed={data.placeholderImage.childImageSharp.fixed} />
          <p className={testimonialsStyles.legend}>Mahmoud's understanding and quality of work was exceptional. When challenged with a back end problem that I did not communicate to him in the original proposal, he rose to the challenge and resolved the problem!! Exceptional work, great communication and willing to go above and beyond. Looking forward to working with him again in the future!</p>
          <p className={testimonialsStyles.clientName}>Darren<span>, Australia</span></p>
        </div>
        <div>
          <Img alt="slide3" fixed={data.placeholderImage.childImageSharp.fixed} />
          <p className={testimonialsStyles.legend}>Mahmoud was very helpful and professional, as well as very kind and responsive. He really knew how to do what was asked and recommended a couple of improvements to the job. He asked all the right questions and described his way of working beforehand. I definitely recommend him and I will work with him again given the opportunity. </p>
          <p className={testimonialsStyles.clientName}>Ersin<span></span>, Turkey</p>
        </div>
      </Carousel>
    </section>
  )
}

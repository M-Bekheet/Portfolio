import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import workStyles from './styles/work.module.scss'


export const Work = () => {

  const imagesInfo = {
    pomodoro: ['Pomodoro Web App', 'SSp', 'DD'],
    portfolio: ['Portfolio', 'EE'],
    restaurant: ['Restatuant Website', 'RR'],
    weather: ['Weather App Landing Page', 'WW', "MM"]
  }

  const data = useStaticQuery(graphql`
    query {
       images: allFile(filter: { relativeDirectory: { eq: "samples" } } ){
        nodes{
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  console.log(data.images.nodes)

  return (
    <section id="work" className={workStyles.work}>
      <h3 className="section-title">Work</h3>

      <div className={workStyles.samples}>

        {data.images.nodes.map(({ childImageSharp, id }) => (
          <div className={workStyles.sample} key={id}>
            <Img fluid={childImageSharp.fluid} className={workStyles.img} />
              <div className={workStyles.sampleName}>
                {
                  imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][0]
                }
              </div>

              <div className={workStyles.sampleLink}>
                {
                  <a href={imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][1]} target="_blank">Link</a>
                }
              </div>
              {

              imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][2] && (
                <div className={workStyles.sampleLink}>
                  <a href={imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][2]} target="_blank">Repo</a>
                </div>
                )
              }
          </div>
        ))}
      </div>
    </section>
  )
}


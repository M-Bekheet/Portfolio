import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import workStyles from './styles/work.module.scss'


export const Work = () => {

  const imagesInfo = {
    pomodoro: ['Pomodoro Web App', 'https://pomodoro-react-app.netlify.com', 'https://github.com/Lartwel/pomodoro-app'],
    // portfolio: ['Portfolio', 'http://mahmoud-ahmed.eb2a.com/'],
    restaurant: ['Restatuant Website', 'https://goo.gl/XgzNJe'],
    weather: ['Weather App Landing Page', 'https://goo.gl/sDYhJk'],
    wooder: ['Furniture Agency Website', 'https://lartwel.github.io/wooder', 'https://github.com/Lartwel/Wooder']
  }

  const data = useStaticQuery(graphql`
    query {
       images: allFile(
          filter: { relativeDirectory: { eq: "samples" } },
          sort:{ fields:name, order:DESC } 
          ){
        nodes{
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      icons : allFile(filter: { relativeDirectory: { eq: "social" } } ){
        nodes{
          id
          childImageSharp {
            fixed(width:20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  console.log(data.icons.nodes[0].childImageSharp)

  return (
    <section id="work" className={workStyles.work}>
      <h3 className="section-title">Work</h3>

      <div className={workStyles.samples}>

        {data.images.nodes.map(({ childImageSharp, id }) => (
          <div className={workStyles.sample} key={id}>

            <a 
              href={imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={childImageSharp.fluid} className={workStyles.img} />
            </a>
              <div className={workStyles.sampleName}>
                {
                  imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][0]
                }
              </div>

              <div className={workStyles.sampleLink}>
                {
                  <a 
                    href={imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][1]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={data.icons.nodes.find(icon => icon.childImageSharp.fixed.src.includes('link')).childImageSharp.fixed.src} alt="link" />
                </a>
                }
              </div>
              {

              imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][2] && (
                <div className={workStyles.sampleLink}>
                  <a 
                    href={imagesInfo[childImageSharp.fluid.src.slice(childImageSharp.fluid.src.lastIndexOf('/') + 1, childImageSharp.fluid.src.lastIndexOf('.'))][2]} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >{
                      <img src={data.icons.nodes.find(icon => icon.childImageSharp.fixed.src.includes('github')).childImageSharp.fixed.src} alt="github"/>
                  }</a>
                </div>
                )
              }
          </div>
        ))}
      </div>
    </section>
  )
}


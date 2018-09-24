import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './home-about.scss'


export default class HomeAbout extends React.Component {

  render() {
    return (
      <section id="about" className="about indented">
        <header>
          <h2>Our Mission</h2>
          <p>{this.props.mission}</p>
        </header>
       <br />
        <hr />
        <ul className="indented about-actions">
          {this.props.aboutItems && this.props.aboutItems.map(item => {
            return (
              <li className="about-action width-third" key={item.title}>
                <Link to={item.link}>
                  <img alt="About Icon" src={item.image}/>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}
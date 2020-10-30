import React from 'react'
import './stylized.scss'
import self from '../../../static/self.png'

const CardInfo = () => {
  return (
    <div className={'content'}>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
      <div className={'card'}>
        <div className={'outline'}>
          <img src={self} alt="self"></img>
          <div className={'name'}>
            <h1>Manuel Herrera</h1>
            <h3>Sacramento, CA</h3>
            <div className={'info'}>
              <p>
                A college graduate who has experience working on software development, application security, and bash scripting.
                <div className={'icons'}>
              <a href='https://github.com/HerreraManuel' alt="github"><i className="fab fa-github"></i></a>
              <a href='https://www.linkedin.com/in/herrera-manuel/' alt="linkedin"><i className="fab fa-linkedin"></i></a>
              <a href='https://twitter.com/man__whale' alt="twitter"><i className="fab fa-twitter"></i></a>
              <a href='mailto:mherrera.jm@gmail.com' alt="email"><i className="fas fa-envelope"></i></a>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
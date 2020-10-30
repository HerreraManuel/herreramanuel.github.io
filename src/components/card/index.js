import React from 'react'
import './stylized.scss'
import self from '../../../static/self.png'

const CardInfo = () => {
  return (
    <div className={'content'}>
      <div className={'card'}>
        <div className={'outline'}>
          <img src={self} alt="self"></img>
          <div className={'name'}>
            <h1>Manuel Herrera</h1>
            <h3>Programmer, Musician, Dedicated Coomer</h3>
            <div className={'info'}>
              <p>please go away please go awayplease go awayplease go awayplease go awayplease go away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
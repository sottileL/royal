import Aprilia1 from '../../images/banner-1.webp'

import React, { Component } from 'react'
import Slider from 'react-slick'

// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

class CustomSlide extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { image } = this.props
    return (
      <Box sx={{ width: '100vw' }}>
        <img width="100%" height="auto" src={image}></img>
      </Box>
    )
  }
}

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      pauseOnFocus: true
    }
    return (
      <div>
        <Slider {...settings}>
          <CustomSlide image={Aprilia1} />
        </Slider>
      </div>
    )
  }
}

import Aprilia1 from '../../images/banner-1.webp'

import React, { Component } from 'react'
import Slider from 'react-slick'

// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

class CustomSlide extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { index, ...props } = this.props
    return (
      <Box {...props}>
        <img width="100%" height="auto" src={index}></img>
      </Box>
    )
  }
}

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: false,
      fade: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 500
    }
    return (
      <div>
        <Slider {...settings}>
          <CustomSlide index={Aprilia1} />
          <CustomSlide index={Aprilia1} />
        </Slider>
      </div>
    )
  }
}

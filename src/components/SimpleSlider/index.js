/* eslint-disable no-unused-vars */
// import Aprilia1 from '../../images/banner-1.webp'

import React, { Component } from 'react'
import Slider from 'react-slick'

// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// class CustomSlide extends Component {
//   render () {
//     // eslint-disable-next-line react/prop-types
//     const { image } = this.props
//     return (
//       <Box sx={{ width: '100vw' }}>
//         <img width="100%" height="auto" src={image}></img>
//       </Box>
//     )
//   }
// }

class CustomSlide extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { index, ...props } = this.props
    return (
      <Box sx={{ backgroundColor: 'red' }}>
        <h3>{index}</h3>
      </Box>
    )
  }
}

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <h2>Custom Slides</h2>
        <Slider {...settings}>
          <CustomSlide index={1} />
          <CustomSlide index={2} />
          <CustomSlide index={3} />
          <CustomSlide index={4} />
          <CustomSlide index={5} />
          <CustomSlide index={6} />
        </Slider>
      </div>
    )
  }
}

// export default class SimpleSlider extends Component {
//   render () {
//     const settings = {
//       dots: true,
//       fade: true,
//       speed: 500,
//       autoplaySpeed: 2000,
//       autoplay: true,
//       pauseOnFocus: true,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//     return (
//       <div>
//         <Slider {...settings}>
//           <CustomSlide image={Aprilia1} />
//           <CustomSlide image={Aprilia1} />
//         </Slider>
//       </div>
//     )
//   }
// }

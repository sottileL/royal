/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Banner1 from '../../images/banner-1.webp'

import React, { Component } from 'react'
import Slider from 'react-slick'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography, styled } from '@mui/material'

import distance from '../../images/specs/distance.svg'
import oil from '../../images/specs/oil.svg'
import enigne from '../../images/specs/engine.svg'
import thunder from '../../images/specs/thunder.svg'

const TitleNavbar = styled(Typography)(() => ({
  fontSize: '1.1rem!important',
  fontWeight: 'bold !important',
  color: 'white',
  paddingLeft: 25,
  letterSpacing: '3px',
  textDecoration: 'none'
}))

const SpecsTypography = styled(Typography)(() => ({
  fontSize: '0.8rem',
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none'
}))

export default class SimpleSlider extends Component {
  render () {
    return (
      <div>
        <Slider {...settings}>
        </Slider>
      </div>
    )
  }
}

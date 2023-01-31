import React, { useRef } from 'react'
// import { styled } from '@mui/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/system'

import LocationCityRounded from '@mui/icons-material/LocationOn'
import WhatsApp from '@mui/icons-material/WhatsApp'

// import { Carousel } from 'react-responsive-carousel'
// import Lightbox from 'react-image-lightbox'

// import getImages from '../../helpers/getImages'

import ContactForm from '../../components/ContactForm/Desktop'
import Header from '../../components/Header/Desktop'
// import Marcas from '../../components/Marcas/Desktop'

import Banner1 from '../../images/banner-1.webp'
import PrimerMoto from '../../images/cuadros/1.webp'
import SegundaMoto from '../../images/cuadros/2.webp'
import TercerMoto from '../../images/cuadros/3.webp'
import CuartaMoto from '../../images/cuadros/4.webp'
import QuintaMoto from '../../images/cuadros/5.webp'
import SextaMoto from '../../images/cuadros/6.webp'
import Logo from '../../images/logo.webp'
import Nosotros from '../../images/nosotros.webp'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-image-lightbox/style.css'

// const SubtitleTypography = styled(Typography)(() => ({
//   fontSize: '23px!important',
//   fontWeight: 'bold !important',
//   color: 'white',
//   letterSpacing: '2px'
// }))

const Desktop = () => {
//   const [brand, setBrand] = useState(null)
  //   const images = getImages(brand)
  //   const [photoIndex, setPhotoIndex] = useState(0)
  //   const [isOpen, setIsOpen] = useState(false)

  const inicioRef = useRef(null)
  const modelosRef = useRef(null)
  const nosotrosRef = useRef(null)
  const contactoRef = useRef(null)

  const handleClickMenu = section => {
    if (section === 'inicio') {
      inicioRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'modelos') {
      modelosRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'nosotros') {
      nosotrosRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'contacto') {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
        <Grid direction="column" width="100%" id="inicio" ref={inicioRef}>
            <Header handleClickMenu={handleClickMenu}/>
            <Grid item>
                    <div>
                        <img
                            src={Banner1}
                            alt="banner-1"
                            style={{
                              width: '100%', height: 'auto'
                            }}
                        />
                    </div>
                {/* <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                </Carousel> */}
            </Grid>
            {/* <Grid item id="marcas" ref={modelosRef}>
                <Marcas setIsOpen={setIsOpen} setBrand={setBrand}/>
            </Grid> */}
            {/* {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => { setIsOpen(false); setPhotoIndex(0); setBrand(null) }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )} */}
            <Grid container padding={10}>
                    <img
                        src={PrimerMoto}
                        alt="cuadro-1"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
                    <img
                        src={SegundaMoto}
                        alt="cuadro-2"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
                    <img
                        src={TercerMoto}
                        alt="cuadro-2"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
                    <img
                        src={CuartaMoto}
                        alt="cuadro-2"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
                    <img
                        src={QuintaMoto}
                        alt="cuadro-2"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
                    <img
                        src={SextaMoto}
                        alt="cuadro-2"
                        style={{
                          width: '33%', alignSelf: 'center'
                        }}
                    />
            </Grid>
            <Grid
                item
                sx={{
                  width: '100%', backgroundColor: '#222222', textAlign: 'center'
                }}
                id="nosotros"
                ref={nosotrosRef}
            >
                <img
                    src={Nosotros}
                    alt="nosotros"
                    style={{
                      height: 'auto', width: '60%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item id="contacto" ref={contactoRef}>
                <ContactForm/>
                <Grid container mt={2} spacing={4} sx={{ backgroundColor: '#1a1a1a' }} justifyContent="center" alignItems="center" height={300}>
                    <Grid item xs={4} display="flex" justifyContent="center">
                        <img
                            src={Logo}
                            alt="imgNosotros"
                            style={{
                              width: '35%', height: 'auto', alignSelf: 'center', textAlign: 'center'
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography fontFamily="Arial" color="white" fontWeight="bold" fontSize={15} textAlign="center">
                                CONTACTO:
                            </Typography>
                            <Typography fontFamily="Arial" color="white" fontSize={13}>
                                <Grid container direction="column" mt={2}>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1} pl={1}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Post venta: 3364023223
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1.4}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Ventas: 33640223222
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1} pl={2.5}>
                                        <LocationCityRounded/>
                                        </Grid>
                                        <Grid item>
                                            Av Presidente Peron 2020.<br/>
                                            San Nicolas de los Arroyos
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <a
                href="https://api.whatsapp.com/send?phone=+5493412129143&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20..."
                className="float"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-whatsapp my-float"/>
            </a>
        </Grid>
  )
}

export default Desktop

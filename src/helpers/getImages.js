/* eslint-disable no-empty */
import Classic1 from '../images/gallery/classic/CLASSIC_01.png'
import Classic2 from '../images/gallery/classic/CLASSIC_02.png'
import Scram1 from '../images/gallery/scram/SCRAM_01.png'
import Scram2 from '../images/gallery/scram/SCRAM_02.png'
import Himalayan1 from '../images/gallery/himalayan/HIMALAYAN_01.png'
import Himalayan2 from '../images/gallery/himalayan/HIMALAYAN_02.png'
import Interceptor1 from '../images/gallery/interceptor/INTERCEPTOR_01.png'
import Interceptor2 from '../images/gallery/interceptor/INTERCEPTOR_02.png'
import Twin1 from '../images/gallery/twin/TWIN_01.png'
import Twin2 from '../images/gallery/twin/TWIN_02.png'
import Meteor1 from '../images/gallery/meteor/meteor_01.png'
import Meteor2 from '../images/gallery/meteor/meteor_02.png'

const getImages = brand => {
  if (brand === 'classic') {
    return [
      Classic1, Classic2
    ]
  }

  if (brand === 'scram') {
    return [
      Scram1, Scram2
    ]
  }

  if (brand === 'himalayan') {
    return [Himalayan1, Himalayan2]
  }

  if (brand === 'interceptor') {
    return [
      Interceptor1, Interceptor2
    ]
  }
  if (brand === 'twin') {
    return [
      Twin1, Twin2
    ]
  }
  if (brand === 'meteor') {
    return [
      Meteor1, Meteor2
    ]
  }

  return []
}

export default getImages

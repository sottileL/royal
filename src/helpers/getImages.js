/* eslint-disable indent */
/* eslint-disable no-unused-vars */
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

const EMPTY_VALUE = ''

const POTENCIA_CLASSIC_1 = '20.2 CV- 6100Rpm'
const POTENCIA_CLASSIC_2 = ' 27Nm-4000 Rpm'
const CILINDRADA_CLASSIC_1 = 'motocilindro, inyeccion electrónica'
const CILINDRADA_CLASSIC_2 = 'refrigeracion aire y aceite'
const CAPACIDAD_CLASSIC_1 = '13 LTS'
const ALTURA_LIBRE_CLASSIC_1 = 'distancia desde el piso 170MM'

const POTENCIA_INTERCEPTOR_1 = '47bph@7100rpm'
const POTENCIA_INTERCEPTOR_2 = ' 27Nm-4000 Rpm'
const CILINDRADA_INTERCEPTOR_1 = '648 CM3 bicilindrico en paralelo'
const SISTEMA_INTERCEPTOR_1 = 'antibloqueo de frenos'
const LUCES_INTERCEPTOR_1 = 'encendido automático de luces'

const POTENCIA_HIMALAYAN_1 = '24.5 bph @6500 RPM'
const CILINDRADA_HIMALAYAN_1 = '411 CC SINGLE CYLINDER'
const SISTEMA_HIMALAYAN_1 = 'Antibloqueo de frenos'
const LUCES_HIMALAYAN_1 = 'encendido automático de luces'

const POTENCIA_SCRAM_1 = '17.88KW@6500 RPM'
const CILINDRADA_SCRAM_1 = '411CC single cylinder'
const SISTEMA_SCRAM_1 = 'abs de dos canales'
const LUCES_SCRAM_1 = 'sistema automatico de luces'

const POTENCIA_CONTINENTAL_1 = '47bph@7100rpm'
const CILINDRADA_CONTINENTAL_1 = '648 CM3 bicilindrico en paralelo'
const SISTEMA_CONTINENTAL_1 = 'antibloqueo de frenos'
const LUCES_CONTINENTAL_1 = 'encendido automatico de luces'

const getImages = brand => {
  if (brand === 'classic') {
    return [
      {
        renderCapacity: true,
        renderFreeHeight: true,
        image: Classic1,
        potencia1: POTENCIA_CLASSIC_1,
        potencia2: POTENCIA_CLASSIC_2,
        cilindrada1: CILINDRADA_CLASSIC_1,
        cilindrada2: CILINDRADA_CLASSIC_2,
        capacidad1: CAPACIDAD_CLASSIC_1,
        capacidad2: EMPTY_VALUE,
        alturalibre1: ALTURA_LIBRE_CLASSIC_1,
        alturalibre2: EMPTY_VALUE
      },
      {
        renderCapacity: true,
        renderFreeHeight: true,
        image: Classic2,
        potencia1: POTENCIA_CLASSIC_1,
        potencia2: POTENCIA_CLASSIC_2,
        cilindrada1: CILINDRADA_CLASSIC_1,
        cilindrada2: CILINDRADA_CLASSIC_2,
        capacidad1: CAPACIDAD_CLASSIC_1,
        capacidad2: EMPTY_VALUE,
        alturalibre1: ALTURA_LIBRE_CLASSIC_1,
        alturalibre2: EMPTY_VALUE
      }
    ]
  }

  if (brand === 'interceptor') {
    return [
      {
        renderSystem: true,
        renderLights: true,
        image: Interceptor1,
        potencia1: POTENCIA_INTERCEPTOR_1,
        potencia2: POTENCIA_INTERCEPTOR_2,
        cilindrada1: CILINDRADA_INTERCEPTOR_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_INTERCEPTOR_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_INTERCEPTOR_1,
        luces2: EMPTY_VALUE
      },
      {
        renderSystem: true,
        renderLights: true,
        image: Interceptor2,
        potencia1: POTENCIA_INTERCEPTOR_1,
        potencia2: POTENCIA_INTERCEPTOR_2,
        cilindrada1: CILINDRADA_INTERCEPTOR_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_INTERCEPTOR_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_INTERCEPTOR_1,
        luces2: EMPTY_VALUE
      }
    ]
  }

  if (brand === 'himalayan') {
    return [
      {
        renderSystem: true,
        renderLights: true,
        image: Himalayan1,
        potencia1: POTENCIA_HIMALAYAN_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_HIMALAYAN_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_HIMALAYAN_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_HIMALAYAN_1,
        luces2: EMPTY_VALUE
      },
      {
        renderSystem: true,
        renderLights: true,
        image: Himalayan2,
        potencia1: POTENCIA_HIMALAYAN_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_HIMALAYAN_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_HIMALAYAN_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_HIMALAYAN_1,
        luces2: EMPTY_VALUE
      }
    ]
  }

  if (brand === 'scram') {
    return [
      {
        renderSystem: true,
        renderLights: true,
        image: Scram1,
        potencia1: POTENCIA_SCRAM_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_SCRAM_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_SCRAM_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_SCRAM_1,
        luces2: EMPTY_VALUE
      },
      {
        renderSystem: true,
        renderLights: true,
        image: Scram2,
        potencia1: POTENCIA_SCRAM_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_SCRAM_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_SCRAM_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_SCRAM_1,
        luces2: EMPTY_VALUE
      }
    ]
  }

  if (brand === 'continental') {
    return [
      {
        renderSystem: true,
        renderLights: true,
        image: Twin1,
        potencia1: POTENCIA_CONTINENTAL_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_CONTINENTAL_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_CONTINENTAL_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_CONTINENTAL_1,
        luces2: EMPTY_VALUE
      },
      {
        renderSystem: true,
        renderLights: true,
        image: Twin2,
        potencia1: POTENCIA_CONTINENTAL_1,
        potencia2: EMPTY_VALUE,
        cilindrada1: CILINDRADA_CONTINENTAL_1,
        cilindrada2: EMPTY_VALUE,
        sistema1: SISTEMA_CONTINENTAL_1,
        sistema2: EMPTY_VALUE,
        luces1: LUCES_CONTINENTAL_1,
        luces2: EMPTY_VALUE
      }
    ]
  }

  if (brand === 'meteor') {
    return [
      {
        renderSystem: false,
        renderLights: false,
        cilindrada1: '349cc 20,2 bhp',
        cilindrada2: '@6100 rpm',
        altura1: '170mm',
        altura2: EMPTY_VALUE,
        frenos1: 'ABS de doble canal',
        frenos2: EMPTY_VALUE,
        image: Meteor1
      },
      {
        renderSystem: false,
        renderLights: false,
        cilindrada1: '349cc 20,2 bhp',
        cilindrada2: '@6100 rpm',
        altura1: '170mm',
        altura2: EMPTY_VALUE,
        frenos1: 'ABS de doble canal',
        frenos2: EMPTY_VALUE,
        image: Meteor2
      }
    ]
  }

  return []
}

export default getImages

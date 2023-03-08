import classic from '../files/classic-ficha.pdf'
import twin from '../files/gt-twin-ficha.pdf'
import himalayan from '../files/himalayan-ficha.pdf'
import interceptor from '../files/interceptor-ficha.pdf'
import meteor from '../files/meteor-ficha.pdf'
import scram from '../files/scram-ficha.pdf'

const getFicha = brand => {
    if (brand === 'interceptor') {
        return interceptor
    }

    if (brand === 'classic') {
        return classic
    }

    if (brand === 'himalayan') {
        return himalayan
    }

    if (brand === 'meteor') {
        return meteor
    }

    if (brand === 'scram') {
        return scram
    }

    if (brand === 'twin') {
        return twin
    }
}

export default getFicha

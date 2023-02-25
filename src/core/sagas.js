import { all } from 'redux-saga/effects'

import RoyalEnfieldSagas from './state/RoyalEnfield/sagas'

export default function * rootSagas () {
  yield all([
    RoyalEnfieldSagas()
  ])
}

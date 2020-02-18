import { takeEvery, select, call, put } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies'

const getLatestRate = (currency) => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`)
function* fetchLatestConversionRates(action) {
  try {
    let currency = action.currency || (yield select(state => state.currencies.baseCurrency))
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({type: CONVERSION_ERROR,error: result.error})
    } else {
      yield put({type:CONVERSION_RESULT, result})
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
    
  }
}
// Saga Effects
// Effect -> call the function Api.fetch with `./products` as argument
// {
//   CALL: {
//     fn: Api.fetch,
//       args: ['./products']
//   }
// }
// put -> creates the dispatch Effect
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}
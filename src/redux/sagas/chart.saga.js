import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChartInfo() {
    console.log('getChartInfo:');
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/chart',
        })
        yield put({
            type: 'SET_CHARTS',
            payload: response.data
        })
    } catch (error) {
        console.log('error getting Charts Details from server', error);
    }
}

function* chartInfoSaga() {
    yield takeLatest('GET_CHARTS_INFO', getChartInfo)
}
export default chartInfoSaga;
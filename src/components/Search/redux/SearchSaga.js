import { debounce, put } from 'redux-saga/effects';
import types from '../types';
import axios from 'axios';
import { setSearchResult } from '../action';

function* setSearch({ value }) {
    try {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=SJ3gd22swLoHaqz3dbUBt0XwV2uOsRv1&q=${ value }?limit=20`;
        const data = yield axios.get(url);
        return yield put(setSearchResult(data.data.data));
    } catch (e) {
        console.log(e);
    }
}

function* watchSearch() {
    yield debounce(1000, types.watchGetSearchResults, setSearch);
}

export default watchSearch;
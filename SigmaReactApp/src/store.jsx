import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/reducers/counterReducer';

export default configureStore( {
    reducer: {
        counter: counterReducer,
    },
    devTools: true
});
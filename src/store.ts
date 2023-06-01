import { configureStore } from '@reduxjs/toolkit';
import audioCurrentIDReducer  from './reducers/audioCurrentID/audioCurrentTimeID';
import audioDeliveryModeReducer from './reducers/audioDeliveryMode/audioDeliveryModeSlice';
import currentPageReducer from './reducers/currentPage/currentPageSlice';
import investigatorDeliveryModeReducer from './reducers/investigatorDeliveryMode/investigatorDeliveryModeSlice';
import narratorDeliveryModeReducer from './reducers/narratorDeliveryMode/narratorDeliveryModeSlice';
import playPauseReducer from "./reducers/playPause/playPauseSlice"
import textDeliveryModeReducer  from './reducers/textDeliveryMode/audioDeliveryModeSlice';
import haloModeReducer from './reducers/haloMode/haloModeSlice';






export const store = configureStore({
    reducer:{
        audioID: audioCurrentIDReducer,
        audioMode: audioDeliveryModeReducer,
        currentPage: currentPageReducer,
        characterVoice: investigatorDeliveryModeReducer,
        narratorMode: narratorDeliveryModeReducer,
        playPause: playPauseReducer,
        textMode: textDeliveryModeReducer,
        haloMode: haloModeReducer,
    }
});
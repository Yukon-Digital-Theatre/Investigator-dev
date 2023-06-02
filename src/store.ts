import { configureStore } from '@reduxjs/toolkit';
import audioCurrentIDReducer  from './reducers/audioCurrentID/audioCurrentTimeID';
import invAudioDeliveryModeReducer from './reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import currentPageReducer from './reducers/currentPage/currentPageSlice';
import investigatorDeliveryModeReducer from './reducers/investigatorDeliveryMode/investigatorDeliveryModeSlice';
import narratorAudioDeliveryModeReducer from './reducers/narratorAudioDeliveryMode/narratorAudioDeliveryModeSlice';
import playPauseReducer from "./reducers/playPause/playPauseSlice"
import textDeliveryModeReducer  from './reducers/textDeliveryMode/textDeliveryModeSlice';
import haloModeReducer from './reducers/haloMode/haloModeSlice';
import VoicePreferenceReducer from './reducers/voicePreference/voicePreferenceSlice'






export const store = configureStore({
    reducer:{
        audioID: audioCurrentIDReducer,
        invAudioMode: invAudioDeliveryModeReducer,
        currentPage: currentPageReducer,
        invTextMode: investigatorDeliveryModeReducer,
        narratorAudioMode: narratorAudioDeliveryModeReducer,
        playPause: playPauseReducer,
        textMode: textDeliveryModeReducer,
        haloMode: haloModeReducer,
        voicePref: VoicePreferenceReducer,
    }
});
import { Howl } from "howler";



export const backgroundAudio = [
    
    {id:1, audio:new Howl({src: require('../audio/LOOP 1 PRESTORY.wav'), loop:true, preload:true})},
    {id:2, audio:new Howl({src: require('../audio/LOOP 2 MEET THE WEAVER.wav'), loop:true, preload:true})},
    {id:3, audio:new Howl({src: require('../audio/LOOP 3 CAT AND MOUSE.wav'), loop:true, preload:true})},
    {id:4, audio:new Howl({src: require('../audio/LOOP 4 GETTING ICKY.wav'), loop:true, preload:true})},
    {id:5, audio:new Howl({src: require('../audio/LOOP 5 FULL ON ICKY.wav'), loop:true, preload:true})},
    {id:6, audio:new Howl({src: require('../audio/LOOP 6 GUILTY OR NOT.wav'), loop:true, preload:true})},
    {id:7, audio:new Howl({src: require('../audio/LOOP 7 ENDING.wav'), loop:true, preload:true})},

]
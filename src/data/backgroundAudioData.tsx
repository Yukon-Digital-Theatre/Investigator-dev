import { Howl } from "howler";



export const backgroundAudio = [
    
    {id:1, audio:new Howl({src: require('../audio/background/LOOP 1 PRESTORY.mp3'), loop:true, preload:true})},
    {id:2, audio:new Howl({src: require('../audio/background/LOOP 2 MEET THE WEAVER.mp3'), loop:true, preload:true})},
    {id:3, audio:new Howl({src: require('../audio/background/LOOP 3 CAT AND MOUSE.mp3'), loop:true, preload:true})},
    {id:4, audio:new Howl({src: require('../audio/background/LOOP 4 GETTING ICKY.mp3'), loop:true, preload:true})},
    {id:5, audio:new Howl({src: require('../audio/background/LOOP 5 FULL ON ICKY.mp3'), loop:true, preload:true})},
    {id:6, audio:new Howl({src: require('../audio/background/LOOP 6 GUILTY OR NOT.mp3'), loop:true, preload:true})},
    {id:7, audio:new Howl({src: require('../audio/background/LOOP 7 ENDING.mp3'), loop:true, preload:true})},

]
<template>
    <div class="w-full h-16 bg-[#14061F] absolute bottom-0 grid grid-cols-3 justify-center items-center text-white">
        <audio 
            :src="songs[0]" 
            preload="auto"
            hidden="true"
            ref="audio"
            loop
            autoplay
            >
        </audio>

        <div class="w-full absolute bottom-12">
            <input 
                type="range"
                name="actual-time" 
                id="inputSlider"
                min="0" 
                max="100"
                value="0"
                @input="setDurationBar($event.target)"
                @change.stop="setCurrentTimeOfSong()"
            >
        </div>

        <div class="flex">
            <div class="flex justify-center items-center my-2 mx-6">
                <i class="fas fa-heart linearGradient text-lg cursor-pointer" title="Remover como favorito"></i>
            </div>
            <div class="flex flex-col justify-center items-start text-xs" title="Nome da musica">
                <p class="font-medium xl:text-base">{{ currentSongName }}</p>
                <span class="font-medium text-zinc-400 xl:text-sm">{{ currentSongSinger}}</span>
            </div>
        </div>

        <div class="flex justify-center items-center relative">
            <img src="../assets/repeat.svg" class="w-5 cursor-pointer" alt="">

            <div class="flex mx-12 gap-6">
                <i class="fas fa-chevron-left text-lg cursor-pointer text-white" @click="songPrev()"></i>
                <i v-if="!currentSongPlaying" class="text-lg fas fa-play cursor-pointer linearGradient" @click="songPlay()"></i>
                <i v-if="currentSongPlaying" class="text-lg fas fa-pause cursor-pointer linearGradient" @click="songPause()"></i>
                <i class="fas fa-chevron-right text-lg cursor-pointer text-white" @click="songNext()"></i>
            </div>

            <i class="fas fa-redo linearGradient cursor-pointer"></i>
        </div>

        <div class="flex gap-5 mx-6 justify-self-end">
            <img src="../assets/volume-2.svg" class="w-5 cursor-pointer" alt="">
            <img src="../assets/minimize-2.svg" class="w-5 cursor-pointer" alt="">
        </div>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, ref } from "vue";
    import Warsongs from "../assets/sounds/Warsongs - Piercing Light (Mako Remix).mp3";
    import Warriors from "../assets/sounds/Warriors  Season 2020 Cinematic - League of Legends (ft. 2WEI and Edda Hayes).mp3";
    import TheCall from "../assets/sounds/The Call  Season 2022 Cinematic - League of Legends (ft. 2WEI, Louis Leibfried, and Edda Hayes).mp3";
    export default{
        name: "Music Bar",
        setup(props, { emit }){
            const songs = [{
                1:{
                    title: 'Warsongs',
                    singer: 'Pierce Light (Mako Remix)',
                    src: Warsongs,
                    wallpaper: 'https://i.ytimg.com/vi/fmI_Ndrxy14/maxresdefault.jpg'
                },
                2:{
                    title: 'Warriors',
                    singer: '2WEI e League of Legends',
                    src: Warriors,
                    wallpaper: 'https://i.ytimg.com/vi/aR-KAldshAE/maxresdefault.jpg'
                },
                3:{
                    title: 'The Call',
                    singer: 'RIOT GAMES',
                    src: TheCall,
                    wallpaper: 'https://i.ytimg.com/vi/mDYqT0_9VR4/maxresdefault.jpg'
                }
            }]
            const counter = ref(1)
            const currentSongPlaying = ref(false);
            const currentSongDuration = ref(0);
            const currentSongName = ref(null);
            const currentSongSinger = ref(null);
            const slider = ref('');
            const audioCurrentTime = ref(0);
            let audio = new Audio(songs[0][counter.value].src);
            audio.load()    
            setCurrentSong();
            setCurrentSongDuration();
            awaitEndOfSong();
            
            function setCurrentSong(){
                currentSongName.value = songs[0][counter.value].title
                currentSongSinger.value = songs[0][counter.value].singer
                emit('currentWallpaper', songs[0][counter.value].wallpaper)
            }

            function setNewSong(){
                currentSongPlaying.value = false
                audio.src = songs[0][counter.value].src
                setCurrentSong();
            }

            function awaitEndOfSong(){
                audio.addEventListener('ended', ()=>{
                    counter.value++
                    if(counter.value > songs[0].length - 1){
                        counter.value = 1
                    }
                })
            }

            //Acompanha a reprodução da Musica
            function songTimeUpdate(){
                audio.addEventListener('timeupdate', () =>{
                    audioCurrentTime.value = audio.currentTime
                    slider.value.value = Math.floor(audio.currentTime);
                    setDurationBar(slider.value)
                })
            }

            //Seta a Duração do Audio
            function setCurrentSongDuration(){
                audio.addEventListener("loadedmetadata", () =>{
                    currentSongDuration.value = audio.duration
                    calculateTime();
                    setSliderMax();
                })
            }

            //Seta o Atributo Max do Slider
            function setSliderMax(){
                slider.value.max = Math.floor(audio.duration);
            }
            
            //Faz a barra acompanhar o Slider
            function setDurationBar(e){
                slider.value = e
                e.style.setProperty('--seek-before-width', e.value / e.max * 100+ '%');
            }

            function setCurrentTimeOfSong(){
                audio.currentTime = slider.value.value
            }

            //Calcula o Tempo
            function calculateTime(){
                const minutes = Math.floor(currentSongDuration.value / 60);
                const seconds = Math.floor(currentSongDuration.value % 60);
                const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
                currentSongDuration.value = `${minutes}:${returnedSeconds}`
            }

            //Alternar o Status da Musica atual(Tocando, Pausada)
            function songTogglePlaying(){
                currentSongPlaying.value = !currentSongPlaying.value
            }

            function songPlay(){
                audio.play();
                songTogglePlaying();
            }

            function songPause(){
                audio.pause();
                songTogglePlaying();
            }

            function songNext(){
                counter.value++;
                setNewSong()
            }

            function songPrev(){
                counter.value--;
                setNewSong()
            }  

            onMounted(() =>{
                slider.value = document.getElementById("inputSlider");
                // setDurationBar(slider.value);
                songTimeUpdate();
            })

            onUnmounted(() =>{
                audio.pause()
            })

            return{
                setDurationBar,
                setCurrentTimeOfSong,
                songs,
                currentSongPlaying,
                currentSongName,
                currentSongSinger,
                songPlay,
                songPause,
                songNext,
                songPrev,
                audioCurrentTime,
                counter
            }
        }
    }
</script>
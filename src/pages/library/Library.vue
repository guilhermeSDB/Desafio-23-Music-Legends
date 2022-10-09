<template>
    <div 
    class="w-full min-h-full bg-cover" 
    :class="`bg-[url('${wallpaper}')]`"
    >
    </div>
    <MusicBar @currentWallpaper="setWallpaper" />
</template>

<script>
import { ref,computed } from "vue";
import MusicBar from "../../components/MusicBar.vue";
    export default{
        name:"Library",
        components:{
            MusicBar,
        },
        setup(){
            const wallpaper = ref('../../assets/wallpaper.svg')

            function setWallpaper(newWallpaper){
                wallpaper.value = newWallpaper
            }

            return{
                setWallpaper,
                wallpaper,
            }
        }
    }
</script>
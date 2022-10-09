<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
  export default{
    name:"App",
    components:{
      Navbar
    }
  }
</script>

<style lang="scss">

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-Thin.otf') format('opentype');
  font-weight: 100;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-UltraLight.otf') format('opentype');
  font-weight: 200;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-Light.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

@font-face{
  font-family: 'GT Eesti';
  src: url('./assets/font/gt-eesti-pro-display-font/GT-Eesti-Display-UltraBold.otf') format('opentype');
  font-weight: 900;
  font-style: normal;
}

body{
  font-family: 'GT Eesti';
  font-weight: 200;

  #app{
    width: 100vw;
    height: calc(100vh - 74px);

    input[type='range']{
      // --seek-before-width: 0%;
      -webkit-appearance: none;
      position: relative;
      width: 100%;
      padding: 0;
      height: 8px;
      outline: none;
      border: none;
      transition: all 0.1ms;
      
      //Compatibilidade com Google Chrome
      &::-webkit-slider-runnable-track {
          width: 100%;
          height: 10px;
          background-color: #14061F;
          outline: none;
          cursor: pointer;
      }
      &::before {
          position: absolute;
          transition: all 0.1ms;
          content: '';
          top: 0px;
          left: 0;
          border-radius: 10px;
          width: var(--seek-before-width);
          height: 2px;
          background: rgb(74,192,143);
          background: -moz-linear-gradient(108deg, rgba(74,192,143,1) 0%, rgba(47,180,255,1) 100%);
          background: -webkit-linear-gradient(108deg, rgba(74,192,143,1) 0%, rgba(47,180,255,1) 100%);
          background: linear-gradient(108deg, rgba(74,192,143,1) 0%, rgba(47,180,255,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4ac08f",endColorstr="#2fb4ff",GradientType=1);
          cursor: pointer;
      }
      &::-webkit-slider-thumb {
          position: relative;
          -webkit-appearance: none;
          box-sizing: content-box;
          border: 1px solid #2EF4CC;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background-color: #2EF4CC;
          cursor: pointer;
          margin: -7px 0 0 0;
      }
      &:active::-webkit-slider-thumb {
        transition: all 0.2s;
        transform: scale(1);
        background: #2EF4CC;
      }

      //Compatibilidade com Firefox
      &::-moz-range-track {
          width: 100%;
          height: 10px;
          background-color: #14061F;
          cursor: pointer;
      }
      &::-moz-range-progress {
          background-color: #2EF4CC;
      }
      &::-moz-focus-outer {
          border: 0;
      }
      &::-moz-range-thumb {
          box-sizing: content-box;
          border: 1px solid #2EF4CC;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background-color: #2EF4CC;
          cursor: pointer;
      }
      &:active::-moz-range-thumb {
        transition: all 0.2s;
        transform: scale(1);
        background: #2EF4CC;
      }

      //Compatibilidade com Edge
      &::-ms-track {
          width: 100%;
          height: 10px;
          background: transparent;
          border: solid transparent;
          color: transparent;
          cursor: pointer;
      }
      &::-ms-fill-lower {
          background-color: #2EF4CC;
      }
      &::-ms-fill-upper {
          background: #2EF4CC
      }
      &::-ms-thumb {
        position: relative;
          -webkit-appearance: none;
          box-sizing: content-box;
          border: 1px solid #2EF4CC;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background-color: #2EF4CC;
          cursor: pointer;
          margin: -7px 0 0 0;
      }
      &:active::-ms-thumb {
        transition: all 0.2s;
        transform: scale(1);
        background: #2EF4CC;
      }
      
    }

    .linearGradient{
      background: -webkit-linear-gradient(108deg, rgba(74,192,143,1) 0%, rgba(47,180,255,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>

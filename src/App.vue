<template>
  <div id="app" :style="{minHeight: screenHeight + 'px'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
                      screenHeight:
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight,
      }
  },
}
</script>
<style lang="less">
body {
    margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  margin: 0 auto;
  background: honeydew;
}
* {
    padding: 0;
    margin: 0;
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide-prev {
    border-radius: 28px;
}
.swiper-slide-prev {
    .swiper-slide-shadow-left {
        background: darkgray !important;
        border-radius: 28px;
    }

}
.swiper-button-next{
            outline: none !important;
            
}
.swiper-button-prev{
        outline: none !important;
}
.swiper-slide-shadow-left,.swiper-slide-shadow-right {
    border-radius: 28px !important;
}
.swiper-slide-next {
    .swiper-slide-shadow-right {
            background: darkgray !important;
            border-radius: 28px;
        }
}
</style>

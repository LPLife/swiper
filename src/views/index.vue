<template>
  <div class="hello">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide tab-item" v-for="(item, index) in  10" :key="index"> 
                        <div class="tip">dddd</div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { Indicator, Toast } from "mint-ui";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      this.slide();
  },
  methods: {
    slide(){
        let swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        lazyLoading : true,
        preloadImages:false,
        centeredSlides : true,//默认slide居中
        parallax : true, // 视差效果
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{ 
            reachEnd: function(){
                if (this.activeIndex != 0) {
                    Toast({
                        message: '已经是最后一张啦！',
                        duration: 1500
                    });
                }
                },
            },
        });
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
    padding-top: 32px;
}
.tab-item {
    width: 600px;
    height: 700px;
    margin: 0 10px;
    background: darkcyan;
    background-size: 100% 100% !important;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .slide-content {
        position: absolute;
        top: 752px;
        width: 100%;
    }
}
.swiper-button-next{
    background:url('https://img-fe.ggwan.com/images/4f5262bba56feb-78x79.png') no-repeat center;
    background-size: 100% 100%;
    height: 80px;
    width: 78px;
    &:focus{
        border: none !important;
    }
}
.swiper-button-prev {
    background:url('https://img-fe.ggwan.com/images/863f036728becd-78x79.png') no-repeat center;
    background-size: 100% 100%;
    height: 80px;
    width: 78px;   
    &:focus{
        border: none !important;
    }
}
.tip {
    font-size: 32px;
}
</style>

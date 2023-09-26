<template>
  
  <swiper
    class="swiper main_bnr"
    :modules="modules"
    slides-per-view="1"
    space-between="0"
    :loop="true"
    :autoplay="true"
    :pagination="{ el:'.swiper-pagination', type: 'fraction'}"
    :observer="true"
    :observeParents="true"
    
    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)"><img :src="a.img" :alt="a.alt"></NuxtLink>
    </swiper-slide>

    <div class="play_box">
      <button type="button" class="play_start" v-if="!autoPlay" @click="autoPlay = true"><span class="blind">시작</span></button>
      <button type="button" class="play_stop" v-if="autoPlay" @click="autoPlay = false"><span class="blind">멈춤</span></button>
      <div class="swiper-pagination"></div>
    </div>

  </swiper>

</template>
      
<script>
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import frontData from '@/assets/frontData.js'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default {
  name: "SwiperMainBnr",
  data(){
    return {
      modules: [Pagination, Autoplay],
      data: frontData.swiper.mainBanner,
      autoPlay:true,
      swiper: Object,
    }
  },
  watch:{
    autoPlay(a, b){
      if( b )   this.swiper.autoplay.stop();
      else      this.swiper.autoplay.start();
    }
  },
  methods:{
    onInit(a){
      this.swiper = a;
    },
    focus(i){
      this.swiper.slideTo(i);
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
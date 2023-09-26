<template>
  
  <swiper
    class="swiper notice"
    :modules="modules"

    slides-per-view="1"
    space-between="0"
    :loop="true"
    :pagination="true"
    :observer="true"
    :observeParents="true"

    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)"><img :src="a.img" :alt="a.alt"></NuxtLink>
    </swiper-slide>
  </swiper>
  
</template>
    
<script>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import frontData from '@/assets/frontData.js'

import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "SwiperNotice",
  data(){
    return {
      modules: [Pagination],
      swiper: Object,
      data: frontData.swiper.notice,
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
    SwiperSlide
  },
};
</script>
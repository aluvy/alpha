<template>
  <swiper
    class="swiper bnrSwiper"
    :modules="modules"
    :slidesPerView="1"
    :spaceBetween="17"
    :loop="true"
    :observer="true"
    :observeParents="true"
    :pagination="pagination"

    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)">
        <img :src="a.img" :alt="a.alt" class="pc_hide" />
        <img :src="a.pc_img" :alt="a.alt" class="pc_show" />
      </NuxtLink>
    </swiper-slide>
  </swiper>
</template>
  
<script>
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import frontData from "@/assets/frontData.js";

import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "SwiperBnr",
  data() {
    return {
      modules: [Pagination],
      data: frontData.swiper.banner,
      swiper: Object,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };
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
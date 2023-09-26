<template>
  
  <swiper
    class="swiper cardSwiper"
    :class="{ ty02 : option.type == 'youtube' || option.type == 'naver', ty03 : option.type == 'instagram' }"

    :modules="modules"
    :slidesPerView="'auto'"
    :spaceBetween="12"
    :grabCursor="true"
    :observer="true"
    :observeParents="true"
    :freeMode="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    
    @swiper="onInit"
    @slideChange="onSlideChange"
    @beforeTransitionStart = "isEnd"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      
      <!-- 요금제 카드 -->
      <NuxtLink :to="{}" v-if="option.type == 'rateplan'" @focus="focus(i)">
        <div class="plan_item">
          <div class="card_top">
            <div class="partner">
              <img :src="a.img" :alt="a.alt">
              <div class="star"><span class="blind">별점</span><span class="score">{{ a.score }}</span></div>
            </div>
          </div>
          <div class="card_mid">
            <span class="plan_tit">{{ a.title }}</span>
            <strong class="plan_tit_sub">{{ a.desc }}</strong>
          </div>
          <div class="combi">
            <div class="combi_inner">
              <strong>{{ a.price }}</strong>
              <span class="period">{{ a.priceOption }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>
      <!-- //요금제 카드 -->

      <!-- youtube -->
      <div class="thum_item" v-if="option.type == 'youtube'">
        <div class="thum_img">
          <iframe :src="a.url" :title="a.videoTitle" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
        </div>
        <NuxtLink :to="{}" class="thum_con" @focus="focus(i)">
          <strong>{{ a.title }}</strong>
          <span>{{ a.date }}</span>
        </NuxtLink>
      </div>
      <!-- //youtube -->

      <!-- event -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'event'" @focus="focus(i)">
        <span class="blind">이벤트 상세페이지 이동</span>
        <div class="thum_item no_border">
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt">
          </div>
          <div class="thum_con">
            <strong>{{ a.title }}</strong>
          </div>
        </div>
      </NuxtLink>
      <!-- //event -->
      
      <!-- instagram -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'instagram'" @focus="focus(i)">
        <div class="thum_item insta_thum">
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt">
          </div>
          <div class="thum_con">
            <ul class="sns_post">
              <li>{{ a.date }}</li>
              <li>{{ a.id }}</li>
            </ul>
          </div>
        </div>
      </NuxtLink>
      <!-- //instagram -->

      <!-- naver -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'naver'" @focus="focus(i)">
        <div class="thum_item">
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt">
          </div>
          <div class="thum_con">
            <strong>{{ a.title }}</strong>
            <ul class="sns_post">
              <li>{{ a.date }}</li>
              <li>{{ a.story }}</li>
            </ul>
          </div>
        </div>
      </NuxtLink>
      <!-- //naver -->

    </swiper-slide>

    <div class="swiper-navigation">
      <div class="left">
        <button type="button" class="swiper-button-prev"></button>
      </div>
      <div class="right">
        <button type="button" class="swiper-button-next"></button>
      </div>
    </div>

  </swiper>

</template>
  
<script>
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: "SwiperCard",
  data(){
    return {
      modules: [Navigation, Pagination],
      swiper: Object,
    }
  },
  methods: {
    onInit(a){
      setTimeout(()=>{
        this.isBeginning(a);
        this.isEnd(a);
      }, 10);
      this.swiper = a;
    },
    onSlideChange: function(a) {
      const el = a.el;
      const isHTML = document.querySelector("html").classList.contains("pc");
      if( !isHTML ) return;

      const wrapW = a.width;

      const swiperW = a.virtualSize;
      const Translate = a.translate;
      const gap = 20;

      if( swiperW + Translate - gap > wrapW ){
        ( a.activeIndex != 0 ) ? el.classList.add("activeIndex") : el.classList.remove("activeIndex");
      }

      this.isBeginning(a);
      this.isEnd(a);
    },
    isBeginning(a){
      const el = a.el;
      if( a.isBeginning ) el.classList.add("isBeginning")
      else                el.classList.remove("isBeginning")  
    },
    isEnd(a){
      const el = a.el;
      if( a.isEnd ) el.classList.add("isEnd")
      else          el.classList.remove("isEnd");
    },
    focus(i){
      // console.log('focus', i, this.swiper );
      // this.swiper.next()
      this.swiper.slideTo(i);
      // swiper.disable() // Swiper를 비활성화합니다
      // swiper.enable()	// Swiper 활성화(비활성화된 경우)
      // changeDirection
      // realIndexChange
      
    }
  },
  props: {
    data: Object,
    option: Object,
  },
  components: {
    Swiper,
    SwiperSlide
  },
};
</script>
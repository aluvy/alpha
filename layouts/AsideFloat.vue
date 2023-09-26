<template>

  <div class="aside_float" v-if="layout.floatMenu != 'none'">
    <div class="inner">
      <NuxtLink :to="{}" class="btn_reco"><span>추천하기</span></NuxtLink>
      <NuxtLink :to="{}" class="btn_deli"><span>바로배송</span></NuxtLink>
      <button type="button" class="btn_top" @click="scrollBehavior"><span>TOP</span></button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AsideFloat',
  data(){
    return {
      isTopClick: true, // 클릭 이벤트 가능 여부
    }
  },
  methods:{
    // scrollTop(){
    //   if( !this.isTopClick ) return;

    //   const scroll = document.querySelector("html").scrollTop;
    //   if( scroll <= 0 ) return;
    //   this.isTopClick = false;

    //   let scrollY = window.scrollY;
    //   let speed = Math.floor((scrollY * 0.02) * 2.5);

    //   const scrollAnimation = ()=>{
    //      if( scrollY <= 0 ){
    //       this.isTopClick = true;
    //       cancelAnimationFrame(scrollAnimation);
    //      } else {
    //       scrollY -= speed;
    //       window.scrollTo(0, scrollY);
    //       requestAnimationFrame(scrollAnimation);
    //      }
    //   }
    //   scrollAnimation();
    // },
    scrollBehavior(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  props: {
	  layout : Object
  }
}
</script>

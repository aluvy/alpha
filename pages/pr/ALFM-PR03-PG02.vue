<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">USIM을 <br>가지고 계신가요?</div>

      <div class="section">


        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step03_01', value:'USIM이 있어요', info:'즉시 셀프개통 할 수 있어요!', img:'/images/component/img_usim.png' },
              { checked:false, id:'step03_02', value:'USIM이 없어요', info:'USIM이 없어도 개통할 수 있어요!', img:'/images/component/img_usim_no.png' },
            ]
          }"
          @checkItem="checked = $event"
        />
      </div> <!-- // section-->

      <div class="section bottom_link_item" v-if="usimbuy">
        <strong>USIM을 구매하고 셀프개통 하시겠어요?</strong>
        <div class="bnr_area">
          <NuxtLink :to="{}">
            <img src="/images/data/img_bnr03.png" alt="바로배송 2시간이면 OK!">
          </NuxtLink>
        </div>
        <strong>USIM없이 eSIM으로 개통하시겠어요?</strong>
        <NuxtLink :to="{}" class="btn_text">eSIM 지원 휴대폰 확인하러 가기</NuxtLink>
      </div> <!-- // section-->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">{{ nextBtn }}</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import RadioActive from '@/components/RadioActive'

export default {
  name: 'ALFM-PR03-PG02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 여부 선택', floatMenu: 'none' },
      next: false,
      nextBtn: '다음으로',
      checked: '',
      usimbuy: false,
    }
  },
  watch: {
    checked(a){
      this.usimbuy = ( a == 'step03_02' ) ? true : false;
      this.nextBtn = ( a == 'step03_02' ) ? '다음으로(택배배송)' : '다음으로';
      this.next = true;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    RadioActive
  }
}
</script>
  

<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">⁠편의점을 <br>선택해주세요</div>

      <div class="section">
        <RadioActive
          :data="{
            option: { type:'ty02', itemList: 1, },
            data: [
              { checked:false, id:'ty02_radio_01', value:'GS25 바로픽업', img:'/images/component/img_gs25.png' },
              { checked:false, id:'ty01_radio_02', value:'세븐일레븐 바로픽업', img:'/images/component/img_seven_eleven.png' },
              { checked:false, id:'ty01_radio_03', value:'이마트24 바로픽업', img:'/images/component/img_emart.png' },
              { checked:false, id:'ty01_radio_04', value:'CU 바로픽업', img:'/images/component/img_cu.png' },
            ]
          }"
          @checkItem="ALFMBU02PG00 = $event"
        />
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="nextBtn == false">다음으로</button>
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
  name: 'ALFM-BU02-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '배송 방법 선택' },
      ALFMBU02PG00: '',
      nextBtn: false,
    }
  },
  watch: {
    ALFMBU02PG00(){
      this.nextBtn = true ;
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

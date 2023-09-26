<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- Default – 신규가입 문구 -->
      <div class="page_info">연락 가능한 휴대폰 번호를 <br>입력해 주세요</div>
      <!-- 번호이동 문구 -->
      <div class="page_info">현재 사용하고 계신 <br>휴대폰 번호를 입력해 주세요</div>

      <div class="section">

        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">통신사</strong>

            <div class="item_list03">
              <ul>
                <li v-for="(a, i) in [
                  { checked:false, id:'item_select_01', value:'LG U+' },
                  { checked:false, id:'item_select_02', value:'SKT' },
                  { checked:false, id:'item_select_03', value:'KT' },
                  { checked:false, id:'item_select_04', value:'LG U+ 알뜰폰' },
                  { checked:false, id:'item_select_05', value:'SKT 알뜰폰' },
                  { checked:false, id:'item_select_06', value:'KT 알뜰폰' },
                  { checked:false, id:'item_select_07', value:'없음' },
                ]" :key="i">
                  <div class="radio_item ty01">
                    <input type="radio" :id="a.id" name="filter_radio01" :value="a.id" v-bind:checked="a.checked" v-model="ALFMPR03PG11">
                    <label :for="a.id">{{ a.value }}</label>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>

          <div class="form_group" v-if="etcTelecom">
            <strong class="form_label">알뜰폰 통신사</strong>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">선택</button>
            </div>
            <PopupSelect ref="MVNO" :option="{ data:'MVNO2', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />
          </div>

          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">휴대폰 번호를 입력해주세요</div>
          </div>
        </div>

      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
</template>

<script>
import PopupSelect from '@/components/PopupSelect';
import RadioActive from '@/components/RadioActive'
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG11',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '고객정보 입력', floatMenu:'none' },

      ALFMPR03PG11: '',
      etcTelecom: false,
    }
  },
  watch: {
    ALFMPR03PG11(a){
      this.etcTelecom = ( a == 'item_select_04' || a == 'item_select_05' || a == 'item_select_06' ) ? true : false;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
    RadioActive,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>

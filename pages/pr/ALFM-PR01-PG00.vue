<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section"> <!-- bnr none/block-->
        <SwiperBnr />
      </div> <!-- // section -->

      <div class="crp_wrap">
        <div class="crp_l">

          <div class="section" :class="{ fixed : fixed.pc.isFixed }" ref="PC_scrollFixed">

            <div class="scroll_fixed" :class="{ on : fixed.mobile.isFixed }" ref="scrollFixed">
              <div class="filter_wrap" ref="filterWrap">
                  
                <div class="filter_other">
                  <div class="item_list02">
                    <ul>
                      <li>
                        <div class="radio_item ty01">
                          <input type="radio" id="filter_other_01" name="filter_other" checked>
                          <label for="filter_other_01">후불유심요금제</label>
                        </div>
                      </li>
                      <li>
                        <div class="radio_item ty01">
                          <input type="radio" id="filter_other_02" name="filter_other">
                          <label for="filter_other_02">선불유심요금제</label>
                        </div>
                      </li>
                    </ul>
                  </div> <!-- // item_list02 -->
                </div>

                <div class="filter_tit">추천 카테고리에요</div>

                <Tag :data="frontData.tag.category" :option="{ type:'expanded', multi: true }" />

                <div class="filter_tit">골라서 보고싶어요</div>

                <div class="check_wrap">
                  <div class="inner">
                    <div class="check_st">
                      <input type="checkbox" id="checkbox01_01" name="">
                      <label for="checkbox01_01">U+결합요금제</label>
                    </div>
                    <div class="check_st">
                      <input type="checkbox" id="checkbox01_02" name="">
                      <label for="checkbox01_02">바로배송</label>
                    </div>
                  </div>
                  <button type="button" class="filter_detail" :class="{ on : filterOn }" id="btn_PR01PG00" @click="this.$emit('openPopup', ['PR01PG00', 'btn_PR01PG00', 101]);">꼼꼼하게 찾기</button>
                  
                  <div class="filter_keyword_pc">
                    <Filter :data="PR01PG00_checked" @filterDelete="filterDelete($event)" />
                    <!-- <Filter :data="['데이터 무제한', '10Mbps', '데이터x통화 무제한', '사은품 팡팡', '인터넷 결합 요금제', '카톡/인터넷용', '5G 요금제', '부모님 추천', '초저가요금제', '통화무제한' ]" /> -->
                  </div>

                </div>
              </div> <!-- // filter_wrap -->
            </div> <!-- // scroll_fixed -->

            <div class="partner_bnr">
              <NuxtLink :to="{}">
                <div class="partner">
                  <img src="/images/data/logo_s_partner06.png" alt="프리티">
                  <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                </div>
                <strong>프리티 자세히보기</strong>
              </NuxtLink>
            </div>

            <div class="bnr_area">
              <NuxtLink :to="{}">
                <img src="/images/data/img_bnr02.jpg" alt="나에게 꼭 맞는 요금제 +알파에서 간편하게 찾아보세요!">
              </NuxtLink>
            </div>

          </div> <!-- // section -->

        </div> <!-- // crp_l -->
        <div class="crp_r">

          <div class="section">

            <div class="sort_wrap">
              <div>총 1,438개</div>
              <Sort :data="dataSort" @clickFormSelectItem="clickFormSelectItem('dataSort', $event)" />
            </div> <!-- // sort_wrap -->

            <div class="item_list ty02">
              <Card :cardInfo="{type: 'ty01', name: 'pr01', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr02', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr03', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr04', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr05', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr06', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr07', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr08', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr09', detail: false }" />
              <Card :cardInfo="{type: 'ty01', name: 'pr10', detail: false }" />

              <div class="btn_group">
                <NuxtLink :to="{}" role="button" class="btn md c05">더볼래요</NuxtLink>
              </div>
              <Pagination :option="{ pcShow: false }" />
              
            </div> <!-- // item_list -->

          </div> <!-- // section -->

          <div class="section pc_hide">
            <div class="bnr_area mgt32">
              <NuxtLink :to="{}">
                <img src="/images/data/img_bnr02.jpg" alt="나에게 꼭 맞는 요금제 +알파에서 간편하게 찾아보세요!">
              </NuxtLink>
            </div>
          </div> <!-- // section -->

          <div class="section">
            <div class="tit_wrap">
              <h3 class="tit03">내가 찜한 요금제</h3>
              <NuxtLink :to="{}" class="more">더보기</NuxtLink>
            </div>

            <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />

          </div> <!-- // section -->

          <div class="section">
            <div class="tit_wrap">
              <h3 class="tit03">최근 본 요금제</h3>
              <NuxtLink :to="{}" class="more">더보기</NuxtLink>
            </div>

            <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />

          </div> <!-- // section -->

        </div> <!-- // crp_r -->
      </div> <!-- // crp_wrap -->
      <Compare :option="{ wide:true }" @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import Card from '@/components/Card'
import SwiperBnr from '@/components/SwiperBnr'
import SwiperCard from '@/components/SwiperCard'
import Pagination from '@/components/Pagination'

import Tag from '@/components/Tag'
import Filter from '@/components/Filter'
import Sort from '@/components/Sort'
import Compare from '@/components/Compare'

export default {
  name: 'ALFM-PR01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '요금제 목록', floatMenu: 'none' },
      fixed: {
        mobile: { isFixed:false, scrollFixedTop:0, filterWrapH: 0, headerH:0, filterWrapPaddingTop:0, },
        pc: { isFixed:false, scrollFixedTop:0, headerH: 0,  },
      },

      // FixedSize: { isFixed:false, scrollFixedTop:0, filterWrapH: 0, headerH:0, filterWrapPaddingTop:0,   },

      dataSort: this.frontData.sort.rateplan,
      filterOn: true,

      // 필터
      PR01PG00: this.frontData.filter,
      PR01PG00_checked: [
        { id: 'filter_radio01_01', value: '데이터 전체' },
        { id: 'filter_radio02_01', value: '가격 전체' },
        { id: 'filter_radio03_01', value: '통신기술 전체' },
        { id: 'filter_radio04_01', value: '할인 전체' },
      ],
    }
  },
  watch: {
    popupItem: {
      handler(a){
        let filterPop = a.PR01PG00;
        this.filterOn = ( filterPop == undefined && this.PR01PG00_checked.length <= 0 ) ? false : true;
      }, deep: true,
    },
    PR01PG00_checked: {
      handler(a){
        this.filterOn = ( a.length <= 0 && this.popupItem.PR01PG00 == undefined ) ? false : true;
      }, deep: true,
    }
  },
  methods: {
    getFixedSize(){

      // const isMobile = document.querySelector("html").classList.contains("mobile");

      // if( isMobile ){
      if( front.isMobile() ){
        const scrollFixed = this.$refs.scrollFixed;
        const filterWrap = this.$refs.filterWrap;
        this.fixed.mobile.scrollFixedTop = scrollFixed.offsetTop;

        this.fixed.mobile.filterWrapH = filterWrap.offsetHeight;
        this.fixed.mobile.headerH = document.querySelector("header").offsetHeight;
        this.fixed.mobile.filterWrapPaddingTop = window.getComputedStyle(filterWrap).getPropertyValue("padding-top").replace("px", "") * 1;
      } else {

        const PC_scrollFixed = this.$refs.PC_scrollFixed;
        this.fixed.pc.scrollFixedTop = PC_scrollFixed.offsetTop;
        this.fixed.pc.headerH = document.querySelector("header").offsetHeight;

      }

      // console.log('getFixedSize', this.fixed.pc);

      
    },
    scrollFixed(){
      
      const scrollY = window.scrollY;

      // const isMobile = document.querySelector("html").classList.contains("mobile");
      // if( isMobile ){
      if( front.isMobile() ){
        const scrollFixed = this.$refs.scrollFixed;
        const filterWrap = this.$refs.filterWrap;
        const activeSize = this.fixed.mobile.scrollFixedTop - this.fixed.mobile.headerH;

        if( scrollY > activeSize ){
          this.fixed.mobile.isFixed = true;
          scrollFixed.style.height = `${this.fixed.mobile.filterWrapH}px`;
          filterWrap.style.top = `${this.fixed.mobile.headerH}px`;
        } else {
          this.fixed.mobile.isFixed = false;
          scrollFixed.style.height = ``;
          filterWrap.style.top = '';
        }
      } else {

        // const PC_scrollFixed = this.$refs.PC_scrollFixed;
        // const activeSize = this.fixed.pc.scrollFixedTop;
        const activeSize = this.fixed.pc.scrollFixedTop - this.fixed.pc.headerH;
        // console.log(scrollY, activeSize);

        if( scrollY > activeSize ){
          this.fixed.pc.isFixed = true;
        } else {
          this.fixed.pc.isFixed = false;
        }

      }

    },
    clickFormSelectItem(targetData, $event){
      this[targetData].option.value = $event.title;
      this[targetData].option.selected = $event.value;
      
      this[targetData].data = this[targetData].data.map((a)=>{
        a.selected = ( a == $event ) ? true : false;
        return a;
      });
    },

    /** 필터 */
    PR01PG00Init(){
      this.PR01PG00_checked = [];
      // const values = Object.values(this.PR01PG00);
      const keys = Object.keys(this.PR01PG00);

      keys.forEach( a => {
        this.PR01PG00[a].forEach((item)=>{
          if( item.checked == true ){
            this.PR01PG00_checked.push({ id:item.id, value:item.value });
          }
        });
      })
      // console.log(this.PR01PG00_checked);
    },
    filterDelete($event){
      const deleteId = $event.id;
      const keys = Object.keys(this.PR01PG00);
      keys.forEach( a => {
        this.PR01PG00[a].forEach((item)=>{
          if( item.id == deleteId ){ item.checked = false }
        });
      });
      this.PR01PG00Init();
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    setTimeout(()=>{
      window.scrollTo(0, 0);
      this.getFixedSize();
      this.scrollFixed();
    }, 100);

    // window.addEventListener("resize", this.getFixedSize);
    window.addEventListener("scroll", this.scrollFixed);
  },
  unmounted(){
    // window.removeEventListener("resize", this.getFixedSize);
    window.removeEventListener("scroll", this.scrollFixed);
  },
  components: {
    Card,
    Pagination,
    SwiperBnr,
    SwiperCard,
    Tag,
    Filter,
    Sort,
    Compare
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
    popupItem: Object,
  }
}
</script>
  
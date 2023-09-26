<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <!-- 검색 -->
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_item">
              <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />              
            </div>
          </div>
        </div>
      </div>
       <!-- //검색 -->
      <!-- 검색 결과 -->
      <div class="section">
        
        <Tag :data="frontData.tag.youtube" :option="{ type:'expanded', multi: true }" />
        <!-- //filter -->
        
        <div class="sort_wrap">
          <div>총 1,438개</div>
          <Sort :data="dataSort" @clickFormSelectItem="clickFormSelectItem('dataSort', $event)" />
        </div><!-- // sort_wrap -->

        <div class="item_list ty02">
          <ul>
            <li v-for="(d, i) in dataThumItem" :key="i">
              <div class="thum_item">
                <div class="thum_img" v-html="d.iframe"></div>
                <NuxtLink  :to="d.to" class="thum_con">
                  <strong>{{ d.title }}</strong>
                  <span>{{ d.date }}</span>
                </NuxtLink>
              </div>
            </li>
          </ul>
          <div class="btn_group">
            <button type="button" class="btn md c05">더볼래요</button>
          </div>
        </div>

        <NoData :option="{type:'sch', html:'<p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>'}" />
      </div>
      <!-- //검색 결과 -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Tag from '@/components/Tag'
import Sort from '@/components/Sort'
import InputBox from '@/components/InputBox';
import NoData from '@/components/NoData'


export default {
  name: 'ALFM-BE01-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '<sup>+</sup>알파 유튜브 컨텐츠' },

      dataThumItem: [
        { iframe: '<iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          to: 'javascript:void(0);',
          title: '편의점 알뜰폰 유심 사봄 feat.원칩 1', 
          date: '2023.02.02', 
        },
        { iframe: '<iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          to: 'javascript:void(0);',
          title: '편의점 알뜰폰 유심 사봄 feat.원칩 2', 
          date: '2023.02.03', 
        },
      ],

      dataSort: this.frontData.sort.board,
    }
  },
  methods:{
    clickFormSelectItem(targetData, $event){
      this[targetData].option.value = $event.title;
      this[targetData].option.selected = $event.value;
      
      this[targetData].data = this[targetData].data.map((a)=>{
        a.selected = ( a == $event ) ? true : false;
        return a;
      });
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Tag,
    Sort,
    NoData,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>

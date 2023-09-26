<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">

        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:false, controls:'tab_panel_01_01', title: '이벤트'},
              { selected:true, controls:'tab_panel_01_02', title: '당첨자 발표'},
            ]
          }
        ">
          <template v-slot:tab_panel_01_01>
            <h3 class="blind">이벤트</h3>
            <div class="panel_cnt">

            <!-- 검색 -->
            <div class="form_wrap">
              <div class="form_group">
                <div class="form_item">
                  <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">전체</button>
                </div>
                <div class="form_item">
                  <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />
                </div>
              </div>
              <div class="text_info">종료일 기준으로 최근 2개월간 지난 이벤트 조회가 가능합니다</div>
            </div>
            <PopupSelect ref="MVNO" :option="{ data:'MVNO', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />

            <!-- //검색 -->
            <div class="filter_wrap">
              <Tag :data="frontData.tag.categorySample6" :option="{ type:'default', multi: true }" />
              <div class="check_wrap">
                <div class="inner">
                  <div class="check_st">
                    <input type="checkbox" id="checkbox01_01" name="">
                    <label for="checkbox01_01">종료된 이벤트 제외하기</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- // filtering  -->

            <div class="sort_wrap">
              <div>총 1,438개</div>
              <div>
                <SortList />
              </div>
            </div>
            <!-- //sorting -->
            <div class="item_list ty02">
              <ul>
                <li>
                  <NuxtLink :to="{}" class="link_list">
                    <span class="blind">이벤트 상세페이지 이동</span>
                    <div class="thum_item">
                      <div class="thum_img">
                        <div class="thum_top">
                          <div class="bag_lft">
                            <div class="bag evt dday"><b>D-1</b></div>
                            <div class="bag evt ty01"><b>이번달 이벤트</b></div>
                          </div>
                          <div class="bag_rit">
                            <img src="/images/data/logo_s_partner21.png" alt="tplus">
                          </div>
                        </div>
                        <img src="/images/data/img_card_thum07.png" alt="혜택 이벤트 썸네일">
                      </div>
                      <div class="thum_con">
                        <strong>무제한이 9천원대! 오직 알파에서만</strong>
                        <span>2023.02.02 - 2023.03.28</span>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{}" class="link_list">
                    <span class="blind">이벤트 상세페이지 이동</span>
                    <div class="thum_item">
                      <div class="thum_img">
                        <div class="thum_top">
                          <div class="bag_lft">
                            <div class="bag evt dday"><b>D-5</b></div>
                            <div class="bag evt ty02"><b>친구초대</b></div>
                          </div>
                          <div class="bag_rit">
                            <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                          </div>
                        </div>
                        
                        <img src="/images/data/img_card_thum05.png" alt="혜택 이벤트 썸네일">
                      </div>
                      <div class="thum_con">
                        <strong>좋은 건 같이 써야죠~ 친구 추천 이벤트</strong>
                        <span>2023.02.02 - 2023.03.28</span>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{}" class="link_list">
                    <span class="blind">이벤트 상세페이지 이동</span>
                    <div class="thum_item">
                      <div class="thum_img">
                        <div class="thum_top">
                          <div class="bag_lft">
                            <div class="bag evt dday"><b>D-24</b></div>
                            <div class="bag evt ty03"><b>제휴 이벤트</b></div>
                          </div>
                          <div class="bag_rit">
                            <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                          </div>
                        </div>
                        
                        <img src="/images/data/img_card_thum06.png" alt="혜택 이벤트 썸네일">
                      </div>
                      <div class="thum_con">
                        <strong>알파 신규회원 대상 개통 시 Npay 5천원 선착순 증정 리뷰이벤트</strong>
                        <span>2023.02.02 - 2023.03.28</span>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{}" class="link_list">
                    <span class="blind">이벤트 상세페이지 이동</span>
                    <div class="thum_item">
                      <div class="thum_img">
                        <div class="thum_top">
                          <div class="bag_lft">
                            <div class="bag evt dday"><b>D-24</b></div>
                            <div class="bag evt ty04"><b>제휴카드</b></div>
                          </div>
                          <div class="bag_rit">
                            <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                          </div>
                        </div>
                          
                        <img src="/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                      </div>
                      <div class="thum_con">
                        <strong>무제한이 9천원대! 오직 알파에서만</strong>
                        <span>2023.02.02 - 2023.03.28</span>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{}" class="link_list end_thum">
                    <span class="blind">이벤트 상세페이지 이동</span>
                    <b class="end_txt">본 이벤트는 종료되었습니다</b>
                    <div class="thum_item">
                      <div class="thum_img">
                        <div class="thum_top">
                          <div class="bag_lft">
                            <div class="bag evt dday"><b>D-24</b></div>
                            <div class="bag evt ty04"><b>제휴카드</b></div>
                          </div>
                          <div class="bag_rit">
                            <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                          </div>
                        </div>
                        
                        <img src="/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                      </div>
                      <div class="thum_con">
                        <strong>무제한이 9천원대! 오직 알파에서만</strong>
                        <span>2023.02.02 - 2023.03.28</span>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
              <div class="btn_group">
                <button type="button" class="btn md c05">더볼래요</button>
              </div>
            </div>
            <!-- // 검색 리스트 -->

            <NoData :option="{type:'sch', html:'<p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>'}" />

            </div>
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">당첨자 발표</h3>
            <div class="panel_cnt">

            <!-- 검색 -->
            <div class="form_wrap">
              <div class="form_group">
                <div class="form_item">
                  <InputBox :option="{ placeholder:'휴대폰 뒷 4자리 검색', search:true }" @inputValue="console.log($event)" />
                </div>
              </div>
              <div class="text_info">최근 2개월 당첨내역만 확인하실 수 있습니다</div>
            </div>
            <!-- //검색 -->

            <div class="sort_wrap">
              <div>총 1,438개</div>
              <div>
                <SortList />
              </div>
            </div>
            <!-- //sorting -->

            <div class="line_list">
              <ul>
                <li v-for="(d, i) in dataList" :key="i">
                  <NuxtLink :to="d.to" class="list_con ty01">
                    <span class="date_rel">발표일 <span>{{ d.dDay }}</span></span>
                    <span class="tit">{{ d.title }}</span>
                    <span class="date">{{ d.dateFrom }} ~ {{ d.dateTo }}</span>
                  </NuxtLink>
                </li>
              </ul>
              <div class="btn_group">
                <button type="button" class="btn md c05">더볼래요</button>
              </div>
            </div>
            <!-- // 당첨자 목록 -->

            <NoData :option="{type:'sch', html:'<p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>'}" />

            </div>
          </template>
        </Tab>

      </div><!-- // section -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Tag from '@/components/Tag'
import PopupSelect from '@/components/PopupSelect';
import SortList from '@/components/SortList'
import NoData from '@/components/NoData'
import Tab from '@/components/Tab'
import InputBox from '@/components/InputBox';

export default {
  name: 'ALFM-BE03-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '혜택' },

      dataList: [
        {
          to: 'javascript:void(0);',
          dDay: '2023.10.10',
          title: '[안내] eSIM 안내',
          dateFrom: '2023.02.02',
          dateTo: '2023.03.28',
        },
        {
          to: 'javascript:void(0);',
          dDay: '2023.10.10',
          title: '[안내] eSIM 안내',
          dateFrom: '2023.02.02',
          dateTo: '2023.03.28',
        },
        {
          to: 'javascript:void(0);',
          dDay: '2023.10.10',
          title: '[안내] eSIM 안내',
          dateFrom: '2023.02.02',
          dateTo: '2023.03.28',
        },
        {
          to: 'javascript:void(0);',
          dDay: '2023.10.10',
          title: '[안내] eSIM 안내',
          dateFrom: '2023.02.02',
          dateTo: '2023.03.28',
        },
        {
          to: 'javascript:void(0);',
          dDay: '2023.10.10',
          title: '[안내] eSIM 안내',
          dateFrom: '2023.02.02',
          dateTo: '2023.03.28',
        },
      ],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Tag,
    SortList,
    NoData,
    Tab,
    InputBox,
    PopupSelect
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>

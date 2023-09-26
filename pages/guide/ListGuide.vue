<template>
  <div>
    <h2>Guide : v0.0</h2>

    <div class="cont">
      <table>
        <caption>list</caption>
        <colgroup>
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">1 Depth</th>
            <th scope="col">2 Depth</th>
            <th scope="col">3 Depth</th>
            <th scope="col">4 Depth</th>
            <th scope="col">URL</th>
            <th scope="col">상태</th>
            <th scope="col">Date</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr class="com">
            <td>list guide</td>
            <td>컨펌 진행중</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink :to="{}" target="_blank"></NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="com" : 컨펌 진행 및 수정
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>퍼블완료</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink :to="{}" target="_blank"></NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="end"
            </td>
          </tr>
          <tr class="mod">
            <td></td>
            <td>수정</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink :to="{}" target="_blank"></NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="mod" : 퍼블리싱 완료 후 수정
            </td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>제외</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink :to="{}" target="_blank"></NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="hid"
            </td>
          </tr>
          <tr class="end">
            <td>layout</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Layout" target="_blank">/guide/Layout</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/13]</b> aside menu 상단 버튼 고정</p>
              <p><b>[07/12]</b> Header Layout 정리</p>
              <p><b>[07/05]</b> loading (lottie player) 작업완료</p>
              <p><b>[07/04]</b> gnb, aside script, skip menu 작업완료</p>
              <p class="fc"><b>[07/03]</b> aside float 추가</p>
              layout, loading, skip menu, header, aside menu, container, footer, floating area <br>
              PC header
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/template" target="_blank">/guide/Template</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              sample file
            </td>
          </tr>
          <!-- <tr class="">
            <td></td>
            <td>loading</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink :to="{}" target="_blank"></NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr> -->
          <tr class="end">
            <td></td>
            <td>popup</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/PopupList" target="_blank">/guide/PopupList</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[08/23]</b> Alert component 추가, popup 호출방식 변경</p>
              <p><b>[07/13]</b> tooltip 위치 오류 수정</p>
              <p><b>[07/06]</b> tooltip contained 케이스 추가</p>
              <p><b>[07/04]</b> tooltip vuetify 작업완료</p>
              <p><b>[06/28]</b> popup script 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td>component</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Text" target="_blank">/guide/Text</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>Form</td>
            <td></td>
            <td></td>
            <td class="url">
              <NuxtLink to="/guide/Form" target="_blank">/guide/Form</NuxtLink>
            </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[06/21]</b> 디자인 적용된 form &gt; form etc 페이지 분리</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>Form</td>
            <td></td>
            <td></td>
            <td class="url">
              <NuxtLink to="/guide/FormVue" target="_blank">/guide/FormVue</NuxtLink>
            </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[08/16]</b> InputBox component</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>popup</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/FormPopupSelect" target="_blank">/guide/FormPopupSelect</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[08/17]</b> PopupSelect component 추가</p>
            </td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>form</td>
            <td></td>
            <td></td>
            <td class="url">
              <NuxtLink to="/guide/FormVuetify" target="_blank">/guide/FormVuetify</NuxtLink>
            </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>vuetify form</td>
          </tr>
          <tr class="end">
            <td></td>
            <td>form etc</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/FormEtc" target="_blank">/guide/FormEtc</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>tab</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Tab" target="_blank">/guide/Tab</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[06/28]</b> tab script 작업완료</p>
              <p><b>[06/29]</b> tab scroll script 작업완료</p>
            </td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>filter &amp; tag</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Tag" target="_blank">/guide/Tag</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[06/29]</b> tag script 작업완료</p>
              <p><b>[06/29]</b> tag variable(반응형)을 포함한 컴포넌트의 경우 mounted(){ tag.variable.resize() } 필요</p>
              <p><b>[06/29]</b> Tag list02 마크업 검토 필요</p>
              <p><b>[06/29]</b> range vuetify 마이그레이션</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>tag &amp; filter</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/TagVue" target="_blank">/guide/TagVue</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[08/04]</b> component로 변경</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>accordion</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Accordion" target="_blank">/guide/Accordion</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/24]</b> accordion ty04 케이스 추가 (약관동의)</p>
              <p><b>[07/06]</b> accordion ty03 케이스 추가</p>
              <p><b>[07/03]</b> accordion, toggle vuetify 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>button &amp; more</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Button" target="_blank">/guide/Button</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>table</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Table" target="_blank">/guide/Table</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 2단 table &gt; dl 태그로 수정, info list 페이지 분리</td>
          </tr>
          <tr class="end">
            <td></td>
            <td>info list</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/InfoList" target="_blank">/guide/InfoList</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>flag</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Flag" target="_blank">/guide/Flag</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/04]</b> flag 이벤트 처리 완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>list</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/ItemList" target="_blank">/guide/ItemList</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/07]</b> rating(vuetify) 추가</p>
              sort, item, list, pagination
            </td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>swiper</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Swiper" target="_blank">/guide/Swiper</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/04]</b> swiper 작업완료</p>
            </td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>swiper_sample</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/swiper_sample" target="_blank">/guide/swiper_sample</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/04]</b> swiper 샘플</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>SwiperVue</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/SwiperVue" target="_blank">/guide/SwiperVue</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[09/11]</b> SwiperCard 내, date 및 id 위치 변경 </p>
              <p><b>[08/03]</b> swiper Vue 샘플</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>logo</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Logo" target="_blank">/guide/Logo</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/06]</b> 페이지 추가</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>animation</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Animation" target="_blank">/guide/Animation</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/05]</b> loading (lottie player)</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>sticky</td>
            <td></td>
            <td></td>
            <td class="url"><NuxtLink to="/guide/Sticky" target="_blank">/guide/Sticky</NuxtLink></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/07]</b> 사용자 & 블로그 리뷰 팝업</p>
              <p><b>[07/05]</b> sticky script 작업완료</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table list -->
  </div>
</template>

<script>
export default {
  name: 'ListGuide',
}
</script>
<style scoped>
@import url(./guide.css);
</style>

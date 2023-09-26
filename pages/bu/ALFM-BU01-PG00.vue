<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section full pdt0">
        <div class="dlvr_banner">
          <img src="/images/content/img_banner_diect_delivery.png" alt="원칩 바로배송 국내 최초! 모두의 유심, 원칩 바로배송으로 2시간 만에 내손안에! 2시간이면 OK!">
          <div class="btn_group">
            <NuxtLink :to="{}" class="btn lg c01">바로배송 원칩 구매하기</NuxtLink>
          </div>
        </div>

        <div class="dlvr_con onechip">
          <strong class="dlvr_tit">모두의 유심, <span class="fc01">원칩</span></strong>
          <span class="dlvr_tit_sub">U+망을 사용하는 모든 알뜰폰 요금제를 <br>개통할 수 있는 <strong class="fc00">국내최초 통합 공용 유심</strong>이에요</span>
          <div class="dlvr_img">
            <img src="/images/content/img_char_one_chip.png" alt="">
          </div>
        </div>
        <div class="dlvr_con">
          <strong class="dlvr_tit baro">바로배송이란</strong>
          <span class="dlvr_tit_sub">사이트에서 결제하는 순간부터 2시간 이내로 <br>고객님께 배송해 드리는 서비스에요</span>
          <div class="dlvr_img">
            <img src="/images/content/img_char_delivery.png" alt="">
          </div>
          <!-- 바로배송 step -->
          <div class="dlvr_step">
            <ol>
              <li>
                <strong class="step">01</strong>
                <strong class="desc">모두의 유심<br> 원칩 주문</strong>
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery01.png" alt="">
                </div>
              </li>
              <li>
                <strong class="step">02</strong>
                <strong class="desc">바로 배송 <br>출발!</strong>
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery02.png" alt="">
                </div>
              </li>
              <li>
                <strong class="step">03</strong>
                <strong class="desc">2시간 이내 <br> 원칩 도착!</strong>
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery03.png" alt="">
                </div>
              </li>
            </ol>
          </div>
          <!-- //바로배송 step -->

          <div class="dlvr_step_info">
            <dl>
              <dt><strong>배송가능일</strong></dt>
              <dd>매일 (연중무휴)</dd>
            </dl>
            <dl>
              <dt><strong>주문가능시간</strong></dt>
              <dd>09:00 ~ 22:00 (무료배송)</dd>
            </dl>
            <dl>
              <dt><strong>서비스지역</strong></dt>
              <dd>서울, 수도권 및 광역시, 제주도</dd>
            </dl>
          </div>
          <ul class="text_list bull">
            <li>일부 지역은 서비스가 제외 되오니 바로배송이 가능한 지역을  꼭 확인하세요.</li>
            <li>배송 시간은 배송물량 급증, 도로/배송업체 사정 등으로 지연 될 수 있습니다.</li>
          </ul>

          <div class="btn_group">
            <NuxtLink :to="{}" class="btn lg c01">바로배송 원칩 구매하기</NuxtLink>
          </div>
        </div>

        <div class="dlvr_con">
          <strong class="dlvr_tit usim">유심으로 개통하기</strong>
          <span class="dlvr_tit_sub">바로배송으로 유심칩만 간편하게 구입하고 <br>원하는 시간에 가입할 수 있어요!</span>
          <!-- 개통하기 step -->
          <div class="usim_open">
            <ol>
              <li>
                <strong class="step">STEP 01</strong>
                <h3 class="tit02">유심칩을 구매하기</h3>
                <!-- <div class="img_area">
                  <img src="/images/content/img_one_chip.png" alt="">
                </div> -->
              </li>
              <li>
                <strong class="step">STEP 02</strong>
                <h3 class="tit02">배송 또는 편의점 바로픽업으로 <br>간편하게 유심칩 받기</h3>
                <!-- <div class="img_area">
                  <img src="/images/content/img_char_conv_store.png" alt="">
                </div> -->
                <p class="desc">
                  평일 13시 이전 구매 시 당일 무료배송(바로배송/택배)<br>
                  GS25, 이마트24, 세븐일레븐에서 픽업 가능
                </p>
              </li>
              <li>
                <strong class="step">STEP 03</strong>
                <h3 class="tit02">맘에 드는 요금제 가입하기</h3>
                <!-- <div class="img_area">
                  <img src="/images/content/img_plan_select.png" alt="">
                </div> -->
              </li>
            </ol>
          </div>
          <!-- //개통하기 step -->
        </div>
        <div class="dlvr_con ty02">
          <strong class="dlvr_tit esim">eSIM이 필요한 순간!</strong>
          <span class="dlvr_tit_sub">USIM이 없어도 개통할 수 있는 <br> 새로운 모바일 경험</span>

          <div class="speech_wrap">
            <!-- <div> -->
              <p class="speech bg01">
                <strong>한 개의 휴대폰, 두 개의 번호!</strong>
                <span>개인용/업무용 번호를 구분하고 싶을때</span>
              </p>
            <!-- </div>
            <div class="right"> -->
              <p class="speech bg02">
                <strong>안심할 수 없는, 개인정보 보호!</strong>
                <span>나만의 안심 번호를 사용하고 싶을때</span>
              </p>
            <!-- </div> -->
          </div>
          <div class="dlvr_btn_wrap">
            <button type="button" class="btn_dlvr">eSIM 가능 핸드폰 모델 확인하기</button>
            <button type="button" class="btn_dlvr">eSIM 활성화 방법</button>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="dlvr_con">
          <div class="tit_wrap">
            <h3 class="tit03">놓치면 후회하는 <br>오직 알파만의 요금제</h3>
            <NuxtLink  to="javascript:void(0);" class="more bottom">더보기</NuxtLink>
          </div>
        </div>
        <SwiperCard :data="frontData.swiper.rateplan3" :option="{ type: 'rateplan' }" />
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import SwiperCard from '@/components/SwiperCard'


export default {
  name: 'ALFM-BU01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '바로배송' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    SwiperCard,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>

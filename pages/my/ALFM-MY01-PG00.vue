<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
  

      

      <div class="section">
        <div class="box_yellow"><!-- 미로그인 시 -->
          <div class="my_login">
            <strong><NuxtLink :to="{}" class="fc01">로그인</NuxtLink>을 하시면</strong>
            <span>신청 내역을 더 빠르게 확인하실 수 있어요!</span>
          </div>
        </div>
        <br>
        <div class="box_yellow"><!-- 로그인 시 -->
          <div class="my_login">
            <strong>김알파님</strong>
            <span><sup>+</sup>알파에 오신 것을 환영합니다!</span>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <strong class="sub">신청중인 요금제가 없어요</strong>
        <button class="line_btn_arrw">
          <span>
            <strong>나에게 꼭 맞는 요금제</strong>를 찾아 <br>
            손쉽게 신청해보세요!
          </span>
        </button>
      </div> <!-- // section -->

      <div class="section">
        <div class="bnr_area"><!-- 미로그인 시 -->
          <NuxtLink :to="{}">
            <img src="/images/data/img_bnr03.png" alt="바로배송 2시간이면 OK!">
          </NuxtLink>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <strong class="sub">신청중인 요금제가 있어요</strong><!-- 로그인_신청중 있음 -->
        <div class="plan_item ty02">
          <div class="card_top">
            <div class="partner">
              <img src="/images/data/logo_s_partner06.png" alt="프리티">
              <span class="bag clr c01">신청중</span>
            </div>
          </div>
          <div class="card_mid">
            <span class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</span>
          </div>
          <div class="btn_group">
            <button type="button" class="btn sm c01"><span>계속 신청할까요?</span><strong>이어하기</strong></button>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <strong class="sub">내가 신청했어요</strong><!-- 로그인 시 -->
        <div class="item_list02">
          <ul>
            <li>
              <NuxtLink :to="{}" class="box_ico">
                <div class="box_ico_info">
                  <span>내가 신청한 요금제</span>
                  <strong>1건</strong>
                </div>
                <div class="box_ico_ico">
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="box_ico ty02">
                <div class="box_ico_info">
                  <span>내가 구매한 USIM</span>
                  <strong>3건</strong>
                </div>
                <div class="box_ico_ico">
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <strong class="sub">내가 관심있어요</strong><!-- 로그인 시 -->

        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my01.png" alt="">
                  </div>
                  <span class="tit">내가 찜한 요금제</span>
                </div>
                <span class="count">2건</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my02.png" alt="">
                  </div>
                  <span class="tit">최근 둘러본 요금제</span>
                </div>
                <span class="count">3건</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <strong class="sub">내가 작성했어요</strong><!-- 로그인 시 -->

        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my03.png" alt="">
                  </div>
                  <span class="tit">1:1 문의내역</span>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my04.png" alt="">
                  </div>
                  <span class="tit">사용자 평점/후기 관리</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <strong class="sub">내가 추천했어요</strong><!-- 로그인 시 -->

        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my05.png" alt="">
                  </div>
                  <span class="tit">추천 활동내역 확인하기</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-MY01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '마이페이지' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
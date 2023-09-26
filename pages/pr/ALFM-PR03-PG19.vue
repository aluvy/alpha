<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        축하합니다! <br><span class="fc01">가입신청</span>이 완료되었습니다
        <p class="sub">마이페이지에서 eSIM을 활성화 시켜 보세요!</p><!-- class="sub" :: eSIM 가입신청 완료 시 노출 -->
      </div>

      <div class="char_join">
        <Lottie name="complete" />
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group"><!-- 가입신청 완료 시 노출-->
              <button type="button" class="btn lg c01">신청내역 조회하기</button>
            </div>
            <div class="btn_group"><!-- eSIM 가입신청 완료 시 노출 -->
              <button type="button" class="btn lg c01">마이페이지 바로가기</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">홈으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Lottie from "@/components/Lottie";

export default {
  name: 'ALFM-PR03-PG19',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '가입신청 완료' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Lottie,
  }
}
</script>

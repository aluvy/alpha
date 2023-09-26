<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      

      
            
      <div class="section">
        <h3 class="tit02">구매 정보</h3>
        
        <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
        <!-- 편의점 픽업 시 -->
        <div class="list_info_ty01">
          <dl>
            <dt>유심칩 명</dt>
            <dd>모두의 유심 원칩</dd>
          </dl>
          <dl>
            <dt>진행현황</dt>
            <dd>결제완료</dd>
          </dl>
          <dl>
            <dt>결제 완료일</dt>
            <dd>2022.10.03 15:40</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>8,800원 (신용카드)</dd>
          </dl>
          <dl>
            <dt>휴대폰번호</dt>
            <dd>010-12**-56**</dd>
          </dl>
          <dl>
            <dt>배송방법</dt>
            <dd>편의점픽업 (GS25)</dd>
          </dl>
        </div>

        <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
        <!-- 바로배송/택배 시 -->
        <div class="list_info_ty01">
          <dl>
              <dt>유심칩 명</dt>
              <dd>모두의 유심 원칩</dd>
          </dl>
          <dl>
            <dt>진행현황</dt>
            <dd>수령대기</dd>
          </dl>
          <dl>
            <dt>결제 완료일</dt>
            <dd>2022.10.03 15:40</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>8,800원 (신용카드)</dd>
          </dl>
          <dl>
            <dt>휴대폰번호</dt>
            <dd>010-12**-56**</dd>
          </dl>
          <dl>
            <dt>배송방법</dt>
            <dd>택배배송</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>서울 마포구 월드컵북로 416 (상암동) (주)엘지유플러스</dd>
          </dl>
          <dl>
            <dt>배송시 요청사항</dt>
            <dd>부재 시 경비실에 맡겨주세요.</dd>
          </dl>
          <dl>
            <dt>운송장번호</dt>
            <dd>
              <div class="gap_box">
                012345678901(CJ대한통운)
                <button type="button" class="btn xsm c07">배송조회</button>
              </div>
            </dd>
          </dl>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="btn_group"> <!-- 온라인신청 후 취소 가능한 경우 -->
          <button type="button" class="btn md c04">결제 취소하기</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-MY03-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내가 구매한 USIM 상세' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
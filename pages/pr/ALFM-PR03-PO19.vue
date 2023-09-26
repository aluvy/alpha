<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">셀프개통 불가한 시간에, 신규가입으로 가입신청 완료 시</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO19" @click="this.$emit('openAlert', ['PR03PO19', 'btn_PR03PO19', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">USIM 없이, 가입신청 완료 시</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO19B" @click="this.$emit('openAlert', ['PR03PO19B', 'btn_PR03PO19B', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-PR03-PO19',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '가입신청 완료 팝업', floatMenu:'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>

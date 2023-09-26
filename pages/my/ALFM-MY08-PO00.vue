<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <h3 class="tit02">탈퇴 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY08PO00" @click="this.$emit('openPopup', ['MY08PO00', 'btn_MY08PO00', 101]);">Alert</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-MY08-PO00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '탈퇴 안내' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['MY08PO00', 'btn_MY08PO00', 101]);
  }
}
</script>

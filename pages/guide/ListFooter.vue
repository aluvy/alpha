<template>
  <h2>푸터 : v0.0</h2>

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
				<tr class="end">
					<td>footer</td>
					<td>이용약관</td>
					<td>서비스 이용약관(T)</td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT01-PG00" target="_blank">/ft/ALFM-FT01-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="hid">
					<td></td>
					<td></td>
					<td>서비스 이용약관(T)</td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT01-TA00" target="_blank">/ft/ALFM-FT01-TA00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td></td>
				</tr>
				<tr class="hid">
					<td></td>
					<td></td>
					<td>홈페이지 이용약관(T)</td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT01-TA01" target="_blank">/ft/ALFM-FT01-TA01</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td></td>
				</tr>
				<tr class="hid">
					<td></td>
					<td></td>
					<td>휴대폰 보험 보통약관(T)</td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT01-TA02" target="_blank">/ft/ALFM-FT01-TA02</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td></td>
				</tr>
				<tr class="hid">
					<td></td>
					<td></td>
					<td>구독 서비스 이용약관(T)</td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT01-TA03" target="_blank">/ft/ALFM-FT01-TA03</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td></td>
				</tr>
				<tr class="end">
					<td></td>
					<td>개인정보처리방침</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT02-PG00" target="_blank">/ft/ALFM-FT02-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="end">
					<td></td>
					<td>개인정보이용내역</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT03-PG00" target="_blank">/ft/ALFM-FT03-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="end">
					<td></td>
					<td>이메일무단수집거부</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT04-PG00" target="_blank">/ft/ALFM-FT04-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<!-- 선기획 후 퍼블 수정 예정 -->
				<!-- <tr class="end">
					<td></td>
					<td>이용자 피해예방</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ft/ALFM-FT05-PG00" target="_blank">/ft/ALFM-FT05-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr> -->
			</tbody>
    </table>
  </div>
  <!-- table list -->
</template>

<script>
export default {
  name: 'ListFooter',
}
</script>
<style scoped>
@import url(./guide.css);
</style>
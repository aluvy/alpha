<template>
  <h2>메인 : v0.0</h2>
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
					<td>메인</td>
					<td></td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA01-PG00" target="_blank">/ma/ALFM-MA01-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="hid">
					<td></td>
					<td>메인 팝업</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA01-PO00" target="_blank">/ma/ALFM-MA01-PO00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td>ALFM-MA01-PG00</td>
				</tr>
				<tr class="end">
					<td></td>
					<td>요금제 랭킹</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA01-PG01" target="_blank">/ma/ALFM-MA01-PG01</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td>[08.30] 상단 - 텍스트 영역 추가 작업(추가 요건)</td>
				</tr>
				<tr class="end">
					<td></td>
					<td>파트너사 소개</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA01-PG02" target="_blank">/ma/ALFM-MA01-PG02</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="end">
					<td></td>
					<td></td>
					<td>파트너사 상세</td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA01-PG03" target="_blank">/ma/ALFM-MA01-PG03</NuxtLink></td>
					<td class="marker"></td>
					<td class="date">07.28</td>
					<td></td>
				</tr>
				<tr class="hid">
					<td>GNB</td>
					<td>GNB(Mobile)</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFM-MA02-PG00" target="_blank">/ma/ALFM-MA02-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td>./guide/layout.html</td>
				</tr>
				<tr class="hid">
					<td></td>
					<td>GNB(PC)</td>
					<td></td>
					<td></td>
					<td class="url"><NuxtLink to="/ma/ALFP-MA02-PG00" target="_blank">/ma/ALFP-MA02-PG00</NuxtLink></td>
					<td class="marker"></td>
					<td class="date"></td>
					<td>./guide/layout.html</td>
				</tr>
			</tbody>
    </table>
  </div>
  <!-- table list -->
</template>

<script>
export default {
  name: 'ListMain',
}
</script>
<style scoped>
@import url(./guide.css);
</style>
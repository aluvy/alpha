<template>
  <div class="form_group">
    <strong class="form_label">인증방법</strong>
    <div class="cir_icon_radio">
      <ul>
        <!-- <li>
          <div class="icon_link naver">
            <input type="radio" id="auth_naver" name="authmethod" value="auth_naver" v-model="checkValues">
            <label for="auth_naver"><span>네이버</span></label>
          </div>
        </li> -->
        <!-- <li>
          <div class="icon_link pass">
            <input type="radio" id="auth_pass" name="authmethod" value="auth_pass" v-model="checkValues">
            <label for="auth_pass"><span>PASS</span></label>
          </div>
        </li> -->
        <li>
          <div class="icon_link simple">
            <input type="radio" id="auth_simple" name="authmethod" value="auth_simple" v-model="checkValues">
            <label for="auth_simple"><span>간편인증</span></label>
          </div>
        </li>
        <li>
          <div class="icon_link credit">
            <input type="radio" id="auth_credit" name="authmethod" value="auth_credit" v-model="checkValues">
            <label for="auth_credit"><span>신용카드 인증</span></label>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- <v-expansion-panels class="acd_wrap" v-model="acd_naver" v-if="checkValues == 'auth_naver'">
    <v-expansion-panel class="acd_item">
      <div class="acd_title">
        <v-expansion-panel-title>이용안내</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <ul class="text_list bull">
            <li>
              아이폰 사용 고객은 인증 전 ‘팝업 차단’ 기능을 해제해 주세요.<br>
              - 팝업차단 해제 방법 : [설정] → [Safari] → ‘팝업차단’ 옆의 스위치 버튼 눌러 끄기
            </li>
            <li>
              최신 버전의 네이버 앱을 설치하고 가입자 본인 아이디로 로그인 한 다음 인증해 주세요.
            </li>
            <li>
              네이버 앱 또는 휴대폰 설정 화면에서 앱 푸시 메시지를 받을 수 있도록 미리 설정해야 합니다.
            </li>
            <li>
              앱을 재설치하거나 휴대전화를 바꾼 경우 인증서를 재발급 받아야 합니다.
            </li>
            <li>
              인증이 정상적으로 진행되지 않는다면 인증서를 다시 발급 받은 후 이용해 주세요.<br>
              <NuxtLink :to="{}" role="button" class="btn xsm c07 mgt8">네이버 인증서 바로가기</NuxtLink>
            </li>
            <li>
              네이버 인증서에 대한 궁금한점은 공지사항에서 확인할 수 있습니다.<br>
              <NuxtLink :to="{}" role="button" class="btn xsm c07 mgt8">공지사항 확인하기</NuxtLink>
            </li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels> -->


  <!-- <v-expansion-panels class="acd_wrap" v-model="acd_pass" v-if="checkValues == 'auth_pass'">
    <v-expansion-panel class="acd_item">
      <div class="acd_title">
        <v-expansion-panel-title>이용안내</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <ul class="text_list bull">
            <li>
              휴대폰에 PASS앱을 설치하고 가입한 뒤 지문 또는 비밀번호를 등록하면 간편하게 본인인증 할 수 있습니다.
            </li>
            <li>
              PASS 앱 설정 또는 휴대폰 설정화면에서 앱 푸시 메시지를 받을 수 있도록 미리 설정해야합니다.
            </li>
            <li>
              앱을 재설치하거나 휴대폰을 바꾼 경우 인증서를 재발급 받아야 합니다.
            </li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels> -->


  <v-expansion-panels class="acd_wrap" v-model="acd_simple" v-if="checkValues == 'auth_simple'">
    <v-expansion-panel class="acd_item">
      <div class="acd_title">
        <v-expansion-panel-title>이용안내</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <ul class="text_list bull">
            <li>
              아이폰 사용 고객은 인증 전 ‘팝업 차단’ 기능을 해제해 주세요.<br>
              - 팝업차단 해제 방법 : [설정] → [Safari] → ‘팝업차단’ 옆의 스위치 버튼 눌러 끄기
            </li>
            <li>
              최신 버전의 네이버 앱을 설치하고 가입자 본인 아이디로 로그인 한 다음 인증해 주세요.
            </li>
            <li>
              네이버 앱 또는 휴대폰 설정 화면에서 앱 푸시 메시지를 받을 수 있도록 미리 설정해야 합니다.
            </li>
            <li>
              앱을 재설치하거나 휴대전화를 바꾼 경우 인증서를 재발급 받아야 합니다.
            </li>
            <li>
              인증이 정상적으로 진행되지 않는다면 인증서를 다시 발급 받은 후 이용해 주세요.<br>
              <NuxtLink :to="{}" role="button" class="btn xsm c07 mgt8">네이버 인증서 바로가기</NuxtLink>
            </li>
            <li>
              네이버 인증서에 대한 궁금한점은 공지사항에서 확인할 수 있습니다.<br>
              <NuxtLink :to="{}" role="button" class="btn xsm c07 mgt8">공지사항 확인하기</NuxtLink>
            </li>
            <li>
              휴대폰에 PASS앱을 설치하고 가입한 뒤 지문 또는 비밀번호를 등록하면 간편하게 본인인증 할 수 있습니다.
            </li>
            <li>
              PASS 앱 설정 또는 휴대폰 설정화면에서 앱 푸시 메시지를 받을 수 있도록 미리 설정해야합니다.
            </li>
            <li>
              앱을 재설치하거나 휴대폰을 바꾼 경우 인증서를 재발급 받아야 합니다.
            </li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>


  <v-expansion-panels class="acd_wrap" v-model="acd_credit" v-if="checkValues == 'auth_credit'">
    <v-expansion-panel class="acd_item">
      <div class="acd_title">
        <v-expansion-panel-title>이용안내</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <ul class="text_list bull">
            <li>
              아이폰 사용 고객은 인증 전 ‘팝업 차단’ 기능을 해제해 주세요.<br>
              - 팝업차단 해제 방법 : [설정] → [Safari] → ‘팝업차단’ 옆의 스위치 버튼 눌러 끄기
            </li>
            <li>
              본인인증 시 별도의 비용이 발생하지 않습니다.
            </li>
            <li>
              체크카드로는 본인인증을 할 수 없습니다.
            </li>
            <li>
              다른 사람의 개인정보를 도용하는 경우 3년 이하의 징역 또는 천만 원 이하의 벌금에 처합니다.
            </li>
            <li>
              개인정보는 안전하게 암호화됩니다.
            </li>
            <li>
              만 19세 미만은 신용카드로 인증할 수 없으니, 다른 인증방법을 선택해 주세요.
            </li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>

export default {
  name: "AuthMethod",
  data(){
    return {
      checkValues: 'auth_simple',
      acd_naver: [],
      acd_pass: [],
      acd_simple: [],
      acd_credit: [],
    }
  },
};
</script>

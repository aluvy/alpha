<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">

      <h2 class="title_nav" v-if="!isMobile">
        {{ layout.title }}
        <button type="button" class="btn_share_text" id="btn_share_text" @click="this.$emit('openAlert', ['CM12PG00', 'btn_CM12PG00', 101]);">공유하기</button>
      </h2>

      <div class="section">
        <div class="plan_topCon">
          <div class="plan_con">
            <div class="top">
              <button type="button" class="btn bag c01" :class="{ on : flag[0] }" @click="flag[0] = !flag[0]"><span class="blind">찜하기</span>480</button>
              <div class="beft">
                <img src="/images/component/img_flag01.png" alt="특가">
                <img src="/images/component/img_flag02.png" alt="+알파 only">
              </div>
            </div>
            <div class="tit">
              <em>데이터안심15G+</em>
              <strong>월 11GB + 매일 2GB <span>+ 3Mbps</span></strong>
              <i>데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</i>
            </div>
            <div class="info">
              <div>
                <dl class="phone" aria-label="통화">
                  <dt>기본제공</dt>
                  <dd>부가통화 300분</dd>
                </dl>
              </div>
              <div>
                <dl class="message" aria-label="문자">
                  <dt>100건</dt>
                  <dd></dd>
                </dl>
              </div>
              <div>
                <dl class="cellular" aria-label="통신기술">
                  <dt>5G</dt>
                  <dd></dd>
                </dl>
              </div>
            </div>
          </div>
          <button type="button" class="btn_share_text" id="btn_share_text" @click="this.$emit('openAlert', ['CM12PG00', 'btn_CM12PG00', 101]);" v-if="isMobile">공유하기</button>
        </div>

        <div class="partner_bnr mgt32">
          <NuxtLink :to="{}">
            <div class="partner">
              <img src="/images/data/logo_s_partner06.png" alt="프리티">
              <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
            </div>
            <strong>프리티 자세히보기</strong>
          </NuxtLink>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit03"><sup>+</sup>알파만의 혜택</h3>

        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>유플러스만의 혜택</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>
                
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>
                
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>

                <button type="button" class="crp_ben_more">더볼래요</button>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>프리티의 혜택</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>제휴카드 혜택</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit03">부가서비스</h3>
          
        <div class="con_bnr mgb32">
          <NuxtLink :to="{}">
            <div class="tex">
              <span>알뜰폰도 인터넷/TV와 결합할 수 있어요!</span>
              <strong>LG U+ 인터넷/TV 결합하기</strong>
            </div>
            <img src="/images/content/img_bnr01.png" alt="">
          </NuxtLink>
        </div>

        <div class="va_services">
          <div>
            <strong>지원</strong>
            <dl class="serv01">
              <dt>가족결합</dt>
              <dd>가입자당 월 440원 할인</dd>
            </dl>
            <dl class="serv02">
              <dt>모바일 핫스팟</dt>
              <dd>11GB 제공</dd>
            </dl>
            <dl class="serv03">
              <dt>소액결제</dt>
              <dd></dd>
            </dl>
            <dl class="serv04">
              <dt>해외로밍</dt>
              <dd>⁠신청은 통신사에 문의</dd>
            </dl>
            <dl class="serv05">
              <dt>데이터 쉐어링</dt>
              <dd></dd>
            </dl>
          </div>
          <div>
            <strong>미지원</strong>
            <dl class="serv01 off">
              <dt>가족결합</dt>
              <dd>가입자당 월 440원 할인</dd>
            </dl>
            <dl class="serv02 off">
              <dt>모바일 핫스팟</dt>
              <dd>11GB 제공</dd>
            </dl>
            <dl class="serv03 off">
              <dt>소액결제</dt>
              <dd></dd>
            </dl>
            <dl class="serv04 off">
              <dt>해외로밍</dt>
              <dd>⁠신청은 통신사에 문의</dd>
            </dl>
            <dl class="serv05 off">
              <dt>데이터 쉐어링</dt>
              <dd></dd>
            </dl>
          </div>
        </div>

      </div> <!-- // section -->

      <div class="section">


        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:true, controls:'tab_panel_01_01', title: '사용자 리뷰'},
              { selected:false, controls:'tab_panel_01_02', title: '블로그 리뷰'},
            ]
          }
        ">
          <template v-slot:tab_panel_01_01>
            <h3 class="blind">사용자 리뷰</h3>
            <div class="panel_cnt">
                
              <div class="review_point">
                <div class="rp_l">
                  <div class="all">
                    <strong>5.0</strong>
                    <span>(56개)</span>
                  </div>
                </div>
                <div class="rp_r">
                  <div class="detail">
                    <dl>
                      <dt>개통과정</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:100%;"></div>
                        </div>
                        <strong>5.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>고객상담</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>요금제 만족도</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:80%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div> <!-- // review_point -->

              <div class="line_list ty02">
                <ul>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_userReview" @click="this.$emit('openPopup', ['userReview', 'btn_userReview', 101]);">전체보기</button>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">블로그 리뷰</h3>
            <div class="panel_cnt">
              <div class="line_list ty02">
                <ul>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_blogReview" @click="this.$emit('openPopup', ['blogReview', 'btn_blogReview', 101]);">전체보기</button>
                </div>
              </div>
            </div>
          </template>
        </Tab>

      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">비슷한 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />

      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">많이 찾은 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />

      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit03">요금제 상세정보</h3>

        <v-expansion-panels class="acd_wrap" v-model="acd2" multiple>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>초과 이용 요금</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="ove_charge">
                  <dl class="div01">
                    <dt>음성(초)</dt>
                    <dd>1.98원</dd>
                  </dl>
                  <dl class="div02">
                    <dt>영상(초)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div03">
                    <dt>SMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div04">
                    <dt>LMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div05">
                    <dt>MMS(건)</dt>
                    <dd>220원</dd>
                  </dl>
                  <dl class="div06">
                    <dt>데이터(MB)</dt>
                    <dd>22.58원</dd>
                  </dl>
                </div>

                <ul class="text_list bull">
                  <li>SMS : 단문 Text형 문자 (한글 70자/영문 140자 이하)</li>
                  <li>LMS : 장문 Text형 문자 (한글 71자/영문 141자 이상)</li>
                  <li>MMS : 멀티미디어형 문자 (사진, 동영상)</li>
                  <li>VAT 포함</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>데이터(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>데이터(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>음성(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>음성(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>메시지(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>메시지(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>유의사항</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>청소년 요금제는 미성년자 전용 요금제이며, 만 20세가 되는 날까지 타 요금제로 변경하지 않는 경우 만 20세가 되는 날의 익월 1일에 다음과 같이 자동 전환됩니다.<br>(단, 요금 전환 시기에 해당 요금제가 가입 제한된 경우는 유사 요금제로 전환)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

      </div> <!-- // section -->

      <div class="section">
        <div class="con_bnr">
          <NuxtLink :to="{}">
            <div class="tex">
              <span>선불유심요금제로 가입할 매장을 찾고 계신가요?</span>
              <strong>내 주변 매장찾기</strong>
            </div>
            <img src="/images/content/img_bnr02.png" alt="">
          </NuxtLink>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="btn_group">
          <NuxtLink :to="{}" role="button" class="btn md c05">목록보기</NuxtLink>
        </div>
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="plan_join">
            <div>
              <div class="tex">
                <strong><span class="fc01">결합하면</span> 월 14,900원</strong>
                <p>8개월 이후 39,490원</p>
              </div>
              <NuxtLink :to="{}" class="btn lg c01">가입하기</NuxtLink>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import SwiperCard from '@/components/SwiperCard'
import Tab from '@/components/Tab'

export default {
  name: 'ALFM-PR01-PG01',
  emits: ['setLayout', 'openPopup', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '요금제 상세', floatMenu: 'none' },

      isMobile: false,

      flag: [false],
      acd: [0],
      acd2: [0, 4],
      // acd3:[0]
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.isMobile = front.isMobile();
  },
  components: {
    SwiperCard,
    Tab,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
  
var frontData = {

  // sort
  sort: {
    rateplan: {
      option: { type:'rateplan', value:'추천 순', selected: 0, },
      data: [
        { selected: true, value:0, title:'추천 순' },
        { selected: false, value:1, title:'낮은 가격 순' },
        { selected: false, value:2, title:'할인 적용 후 낮은 가격 순' },
        { selected: false, value:3, title:'선택 순' },
        { selected: false, value:4, title:'데이터 많은 순' },
      ]
    },
    board: {
      option: { value:'최신 순', selected: 0, },
      data: [
        { selected: true, value:0, title: '최신 순' },
        { selected: false, value:1, title: '오래된 순' },
      ]
    },
  },

  selectList: {
    payType: [
      { selected: true, value: 0, title: '은행계좌 자동이체' },
      { selected: false, value: 1, title: '신용카드 자동결제' },
      { selected: false, value: 2, title: '지로납부' },
    ],
  },

  // popupSelect
  select: {
    MVNO: [
      { selected:true, value:0, title:'전체', img:'', link:'javascript:void(0)', },
      { selected:false, value:1, title:'A모바일', img:'/images/data/logo_partner01.png', link:'javascript:void(0)' },
      { selected:false, value:2, title:'FLASH모바일', img:'/images/data/logo_partner02.png', link:'javascript:void(0)' },
      { selected:false, value:3, title:'KG모빌리언스', img:'/images/data/logo_partner03.png', link:'javascript:void(0)' },
      { selected:false, value:4, title:'U+유모바일', img:'/images/data/logo_partner04.png', link:'javascript:void(0)' },
      { selected:false, value:5, title:'WELL', img:'/images/data/logo_partner05.png', link:'javascript:void(0)' },
      { selected:false, value:6, title:'freeT', img:'/images/data/logo_partner06.png', link:'javascript:void(0)' },
      { selected:false, value:7, title:'mobing', img:'/images/data/logo_partner07.png', link:'javascript:void(0)' },
      { selected:false, value:8, title:'리브모바일', img:'/images/data/logo_partner08.png', link:'javascript:void(0)' },
      { selected:false, value:9, title:'마블프로듀스', img:'/images/data/logo_partner09.png', link:'javascript:void(0)' },
      { selected:false, value:10, title:'벨류컴', img:'/images/data/logo_partner10.png', link:'javascript:void(0)' },
      { selected:false, value:11, title:'슈가모바일', img:'/images/data/logo_partner11.png', link:'javascript:void(0)' },
      { selected:false, value:12, title:'스노우맨', img:'/images/data/logo_partner12.png', link:'javascript:void(0)' },
      { selected:false, value:13, title:'스마텔', img:'/images/data/logo_partner13.png', link:'javascript:void(0)' },
      { selected:false, value:14, title:'아이즈모바일', img:'/images/data/logo_partner14.png', link:'javascript:void(0)' },
      { selected:false, value:15, title:'앤텔레콤', img:'/images/data/logo_partner15.png', link:'javascript:void(0)' },
      { selected:false, value:16, title:'에스원안심모바일', img:'/images/data/logo_partner16.png', link:'javascript:void(0)' },
      { selected:false, value:17, title:'여유텔레콤', img:'/images/data/logo_partner17.png', link:'javascript:void(0)' },
      { selected:false, value:18, title:'이야기모바일', img:'/images/data/logo_partner18.png', link:'javascript:void(0)' },
      { selected:false, value:19, title:'이지모바일', img:'/images/data/logo_partner19.png', link:'javascript:void(0)' },
      { selected:false, value:20, title:'인스모바일', img:'/images/data/logo_partner20.png', link:'javascript:void(0)' },
      { selected:false, value:21, title:'티플러스', img:'/images/data/logo_partner21.png', link:'javascript:void(0)' },
      { selected:false, value:22, title:'헬로모바일', img:'/images/data/logo_partner22.png', link:'javascript:void(0)' },
    ],
    MVNO2: [
      { selected:false, value:1, title:'A모바일', img:'/images/data/logo_partner01.png', link:'javascript:void(0)' },
      { selected:false, value:2, title:'FLASH모바일', img:'/images/data/logo_partner02.png', link:'javascript:void(0)' },
      { selected:false, value:3, title:'KG모빌리언스', img:'/images/data/logo_partner03.png', link:'javascript:void(0)' },
      { selected:false, value:4, title:'U+유모바일', img:'/images/data/logo_partner04.png', link:'javascript:void(0)' },
      { selected:false, value:5, title:'WELL', img:'/images/data/logo_partner05.png', link:'javascript:void(0)' },
      { selected:false, value:6, title:'freeT', img:'/images/data/logo_partner06.png', link:'javascript:void(0)' },
      { selected:false, value:7, title:'mobing', img:'/images/data/logo_partner07.png', link:'javascript:void(0)' },
      { selected:false, value:8, title:'리브모바일', img:'/images/data/logo_partner08.png', link:'javascript:void(0)' },
      { selected:false, value:9, title:'마블프로듀스', img:'/images/data/logo_partner09.png', link:'javascript:void(0)' },
      { selected:false, value:10, title:'벨류컴', img:'/images/data/logo_partner10.png', link:'javascript:void(0)' },
      { selected:false, value:11, title:'슈가모바일', img:'/images/data/logo_partner11.png', link:'javascript:void(0)' },
      { selected:false, value:12, title:'스노우맨', img:'/images/data/logo_partner12.png', link:'javascript:void(0)' },
      { selected:false, value:13, title:'스마텔', img:'/images/data/logo_partner13.png', link:'javascript:void(0)' },
      { selected:false, value:14, title:'아이즈모바일', img:'/images/data/logo_partner14.png', link:'javascript:void(0)' },
      { selected:false, value:15, title:'앤텔레콤', img:'/images/data/logo_partner15.png', link:'javascript:void(0)' },
      { selected:false, value:16, title:'에스원안심모바일', img:'/images/data/logo_partner16.png', link:'javascript:void(0)' },
      { selected:false, value:17, title:'여유텔레콤', img:'/images/data/logo_partner17.png', link:'javascript:void(0)' },
      { selected:false, value:18, title:'이야기모바일', img:'/images/data/logo_partner18.png', link:'javascript:void(0)' },
      { selected:false, value:19, title:'이지모바일', img:'/images/data/logo_partner19.png', link:'javascript:void(0)' },
      { selected:false, value:20, title:'인스모바일', img:'/images/data/logo_partner20.png', link:'javascript:void(0)' },
      { selected:false, value:21, title:'티플러스', img:'/images/data/logo_partner21.png', link:'javascript:void(0)' },
      { selected:false, value:22, title:'헬로모바일', img:'/images/data/logo_partner22.png', link:'javascript:void(0)' },
    ],
    MVNOList: [
      { selected:false, value:1, title:'A모바일', img:'/images/data/logo_partner01.png', link:'javascript:void(0)' },
      { selected:false, value:2, title:'FLASH모바일', img:'/images/data/logo_partner02.png', link:'javascript:void(0)' },
      { selected:false, value:3, title:'KG모빌리언스', img:'/images/data/logo_partner03.png', link:'javascript:void(0)' },
      { selected:false, value:4, title:'U+유모바일', img:'/images/data/logo_partner04.png', link:'javascript:void(0)' },
      { selected:false, value:5, title:'WELL', img:'/images/data/logo_partner05.png', link:'javascript:void(0)' },
      { selected:false, value:6, title:'freeT', img:'/images/data/logo_partner06.png', link:'javascript:void(0)' },
      { selected:false, value:7, title:'mobing', img:'/images/data/logo_partner07.png', link:'javascript:void(0)' },
      { selected:false, value:8, title:'리브모바일', img:'/images/data/logo_partner08.png', link:'javascript:void(0)' },
      { selected:false, value:9, title:'마블프로듀스', img:'/images/data/logo_partner09.png', link:'javascript:void(0)' },
      { selected:false, value:10, title:'벨류컴', img:'/images/data/logo_partner10.png', link:'javascript:void(0)' },
      { selected:false, value:11, title:'슈가모바일', img:'/images/data/logo_partner11.png', link:'javascript:void(0)' },
      { selected:false, value:12, title:'스노우맨', img:'/images/data/logo_partner12.png', link:'javascript:void(0)' },
      { selected:false, value:13, title:'스마텔', img:'/images/data/logo_partner13.png', link:'javascript:void(0)' },
      { selected:false, value:14, title:'아이즈모바일', img:'/images/data/logo_partner14.png', link:'javascript:void(0)' },
      { selected:false, value:15, title:'앤텔레콤', img:'/images/data/logo_partner15.png', link:'javascript:void(0)' },
      { selected:false, value:16, title:'에스원안심모바일', img:'/images/data/logo_partner16.png', link:'javascript:void(0)' },
      { selected:false, value:17, title:'여유텔레콤', img:'/images/data/logo_partner17.png', link:'javascript:void(0)' },
      { selected:false, value:18, title:'이야기모바일', img:'/images/data/logo_partner18.png', link:'javascript:void(0)' },
      { selected:false, value:19, title:'이지모바일', img:'/images/data/logo_partner19.png', link:'javascript:void(0)' },
      { selected:false, value:20, title:'인스모바일', img:'/images/data/logo_partner20.png', link:'javascript:void(0)' },
      { selected:false, value:21, title:'티플러스', img:'/images/data/logo_partner21.png', link:'javascript:void(0)' },
      { selected:false, value:22, title:'헬로모바일', img:'/images/data/logo_partner22.png', link:'javascript:void(0)' },
    ],
    deliveryRequest: [
      { selected:false, value:0, title: '배송 전에 미리 연락 바랍니다.' },
      { selected:false, value:1, title: '부재시 경비실에 맡겨 주세요.' },
      { selected:false, value:2, title: '부재시 전화 주시거나 문자 남겨주세요.' },
      { selected:false, value:3, title: '직접 입력하기' },
    ],
    boardSort: [
      { selected:false, value:0, title: '전체' },
      { selected:false, value:1, title: '제목' },
      { selected:false, value:2, title: '내용' },
    ],
    inquiryType: [
      { selected:false, value:0, title: '가입/변경/해지' },
      { selected:false, value:1, title: '유심' },
      { selected:false, value:2, title: '요금제' },
      { selected:false, value:3, title: '혜택/이벤트' },
      { selected:false, value:4, title: '고객지원' },
    ],
    email: [
      { selected:true, value:0, title: '직접입력' },
      { selected:false, value:1, title: 'naver.com' },
      { selected:false, value:2, title: 'daum.net' },
      { selected:false, value:3, title: 'hanmail.net' },
      { selected:false, value:4, title: 'nate.com' },
      { selected:false, value:5, title: 'gmail.com' },
      { selected:false, value:6, title: 'dreamwiz.com' },
      { selected:false, value:7, title: 'lycos.co.kr' },
      { selected:false, value:8, title: 'chol.com' },
    ],
    privacyVer :[
      { selected:true, value:0, title: '버전 V.20230303' },
      { selected:false, value:1, title: '버전 V.20230304' },
      { selected:false, value:2, title: '버전 V.20230305' },
    ],
    bank: [
      { selected:false, value:0, title: '국민은행' },
      { selected:false, value:1, title: '신한은행' },
      { selected:false, value:2, title: '하나은행' },
    ],
    payType: [
      { selected:false, value:0, title: '은행계좌 자동이체' },
      { selected:false, value:1, title: '신용카드 자동결제' },
      { selected:false, value:2, title: '지로납부' },
    ],
    usimModel: [
      { selected:false, value:0, title: 'K3830' },
      { selected:false, value:1, title: 'K3840' },
      { selected:false, value:2, title: 'K3620' },
    ],
    iphone: [
      { selected:false, value:0, title: 'iPhone11' },
      { selected:false, value:1, title: 'iPhone11 Pro' },
      { selected:false, value:3, title: 'iPhone11 Pro Max' },
      { selected:false, value:4, title: 'iPhone12' },
      { selected:false, value:5, title: 'iPhone12 mini' },
      { selected:false, value:6, title: 'iPhone12 Pro' },
      { selected:false, value:7, title: 'iPhone12 Pro Max' },
      { selected:false, value:8, title: 'iPhone13' },
      { selected:false, value:9, title: 'iPhone13 mini' },
      { selected:false, value:10, title: 'iPhone13 Pro' },
      { selected:false, value:11, title: 'iPhone13 Pro Max' },
      { selected:false, value:12, title: 'iPhone14' },
    ],
    galaxy: [
      { selected:false, value:0, title: '갤럭시 Z Fold 4' },
      { selected:false, value:1, title: '갤럭시 Z Flip 4' },
      { selected:false, value:2, title: '갤럭시 S23' },
      { selected:false, value:3, title: '갤럭시 S23+' },
      { selected:false, value:4, title: '갤럭시 S23 Ultra' },
    ],
    subwayArea: [
      { selected:false, value:0, title: '수도권' },
      { selected:false, value:1, title: '부산' },
      { selected:false, value:2, title: '대전' },
      { selected:false, value:3, title: '대구' },
      { selected:false, value:4, title: '광주' },
    ],
    subwayLine: [
      { selected:false, value:0, title: '노선1' },
      { selected:false, value:1, title: '노선2' },
      { selected:false, value:2, title: '노선3' },
      { selected:false, value:3, title: '노선4' },
    ],
    subwayStation: [
      { selected:false, value:0, title: '역1' },
      { selected:false, value:1, title: '역2' },
      { selected:false, value:2, title: '역3' },
      { selected:false, value:3, title: '역4' },
    ],
  },

  // tag
  tag: {
    category: { // 요금제 카테고리
      select: [
        { title:'후불유심요금제', selected: true },
        { title:'선불유심요금제', selected: false }
      ],
      data: [
        { selected: true, disabled: false, title: '지금 HOT한' },
        { selected: false, disabled: false, title: '이달의 추천' },
        { selected: false, disabled: false, title: '데이터x통화 무제한' },
        { selected: false, disabled: false, title: '사은품 팡팡' },
        { selected: false, disabled: false, title: '인터넷 결합 요금제' },
        { selected: false, disabled: false, title: '카톡/인터넷용' },
        { selected: false, disabled: false, title: '5G 요금제' },
        { selected: false, disabled: false, title: '부모님 추천' },
        { selected: false, disabled: false, title: '초저가요금제' },
        { selected: false, disabled: false, title: '통화무제한' },
      ]
    },
    categorySample1: { // 가이드용 샘플
      select: [], data: [ { selected: true, disabled: false, title: '지금 HOT한' }, { selected: false, disabled: false, title: '이달의 추천' }, { selected: false, disabled: false, title: '데이터x통화 무제한' }, { selected: false, disabled: false, title: '사은품 팡팡' }, { selected: false, disabled: false, title: '인터넷 결합 요금제' }, { selected: false, disabled: false, title: '카톡/인터넷용' }, { selected: false, disabled: false, title: '5G 요금제' }, ]
    },
    categorySample2: { // 가이드용 샘플
      select: [],
      data: [ { selected: true, disabled: false, title: '지금 HOT한' }, { selected: false, disabled: false, title: '이달의 추천' }, { selected: false, disabled: false, title: '데이터x통화 무제한' }, { selected: false, disabled: false, title: '사은품 팡팡' }, { selected: false, disabled: false, title: '인터넷 결합 요금제' }, { selected: false, disabled: false, title: '카톡/인터넷용' }, { selected: false, disabled: false, title: '5G 요금제' }, { selected: false, disabled: false, title: '부모님 추천' }, { selected: false, disabled: false, title: '초저가요금제' }, { selected: false, disabled: false, title: '통화무제한' }, ]
    },
    categorySample3: {  // 가이드용 샘플
      select: [ { title:'후불유심요금제', selected: true }, { title:'선불유심요금제', selected: false } ],
      data: [ { selected: true, disabled: false, title: '지금 HOT한' }, { selected: false, disabled: false, title: '이달의 추천' }, { selected: false, disabled: false, title: '데이터x통화 무제한' }, { selected: false, disabled: false, title: '사은품 팡팡' }, { selected: false, disabled: false, title: '인터넷 결합 요금제' }, { selected: false, disabled: false, title: '카톡/인터넷용' }, { selected: false, disabled: false, title: '5G 요금제' }, { selected: false, disabled: false, title: '부모님 추천' }, { selected: false, disabled: false, title: '초저가요금제' }, { selected: false, disabled: false, title: '통화무제한' }, ]
    },
    categorySample4: {  // 가이드용 샘플
      select: [ { title:'후불유심요금제', selected: true }, { title:'선불유심요금제', selected: false } ],
      data: [ { selected: true, disabled: false, title: '지금 HOT한' }, { selected: false, disabled: false, title: '이달의 추천' }, { selected: false, disabled: false, title: '데이터x통화 무제한' }, { selected: false, disabled: false, title: '사은품 팡팡' }, { selected: false, disabled: false, title: '인터넷 결합 요금제' }, { selected: false, disabled: false, title: '카톡/인터넷용' }, { selected: false, disabled: false, title: '5G 요금제' }, { selected: false, disabled: false, title: '부모님 추천' }, { selected: false, disabled: false, title: '초저가요금제' }, { selected: false, disabled: false, title: '통화무제한' }, ]
    },
    categorySample5:{   // 가이드용 샘플
      select: [],
      data: [ { selected: true, disabled: false, title: '지금 HOT한' }, { selected: false, disabled: false, title: '이달의 추천' }, { selected: false, disabled: false, title: '데이터x통화 무제한' }, { selected: false, disabled: false, title: '사은품 팡팡' }, { selected: false, disabled: false, title: '인터넷 결합 요금제' }, ]
    },
    categorySample6:{   // 가이드용 샘플 (이벤트)
      select: [],
      data: [ { selected: true, disabled: false, title: '이번달 이벤트' }, { selected: false, disabled: false, title: '제휴 이벤트' }, { selected: false, disabled: false, title: '친구초대' }, { selected: false, disabled: false, title: '제휴카드' }, { selected: false, disabled: false, title: '사용후기' }, ]
    },
    recom: {  // [ALFM-MA01-PG00] 추천요금제 태그
      select: [],
      data: [
        { selected: true, disabled: false, title: '# 기분좋은 봄맞이 특가' },
        { selected: false, disabled: false, title: '# 새학기 특별 할인' },
        { selected: false, disabled: false, title: '# 알파에만 있어요' },
        { selected: false, disabled: false, title: '# 인기 요금제' },
      ]
    },
    review: { // [ALFM-MY07-LT00] 사용자 평점·후기 관리
      select: [],
      data: [
        { selected: true, disabled: false, title: '전체' },
        { selected: false, disabled: false, title: '후기등록' },
        { selected: false, disabled: false, title: '등록완료' },
      ]
    },
    guide: {  // [ALFM-FT05-PG00, ALFM-FT01-PG00] 이용약관
      select: [],
      data: [
        { selected: true, disabled: false, title: '서비스 이용약관' },
        { selected: false, disabled: false, title: '홈페이지 이용약관' },
        { selected: false, disabled: false, title: '휴대폰 보험 보통약관' },
        { selected: false, disabled: false, title: '구독서비스 이용약관' },
      ]
    },
    FAQ: {  // [ALFM-CS04-PG00] 자주하는 질문
      select: [],
      data: [
        { selected: true, disabled: false, title: '전체보기' },
        { selected: false, disabled: false, title: '가입 및 변경' },
        { selected: false, disabled: false, title: '요금 및 납부' },
        { selected: false, disabled: false, title: '혜택/이벤트' },
        { selected: false, disabled: false, title: '결합할인' },
        { selected: false, disabled: false, title: '회원가입' },
      ]
    },
    youtube: {  // [ALFM-BE01-LT00] 유튜브 태그
      select: [],
      data: [
        { selected: true, disabled: false, title: '전체' },
        { selected: false, disabled: false, title: '#우체국' },
        { selected: false, disabled: false, title: '#원칩' },
        { selected: false, disabled: false, title: '#셀프 개통' },
        { selected: false, disabled: false, title: '#유심' },
        { selected: false, disabled: false, title: '#알뜰폰' },
        { selected: false, disabled: false, title: '#알뜰폰 플러스' },
        { selected: false, disabled: false, title: '#이마트24' },
        { selected: false, disabled: false, title: '#유무선결합' },
      ]
    },
    usim: {  // 팝업 편의점 검색
      select: [],
      data: [
        { selected: true, disabled: false, title: '전체' },
        { selected: false, disabled: false, title: '유심판매' },
        { selected: false, disabled: false, title: '바로픽업' },
      ]
    },
    
  },

  // swiper
  swiper: {
    rateplan: [
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner02.png', alt:'FLASH mobile', score:'5.0' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner03.png', alt:'KG 모바일+', score:'4.0' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner04.png', alt:'U+ U mobile', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner05.png', alt:'WinnerStel', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner06.png', alt:'프리티', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner07.png', alt:'Mobing', score:'4.5' },
    ],
    rateplan2: [
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
    ],
    rateplan3: [
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
      { title:'데이터안심15G+', desc:'월 11GB + 매일 2GB + 3Mbps', price:'월 10,890원', priceOption:'6개월 이후 38,900원', img:'/images/data/logo_s_partner01.png', alt:'A mobile', score:'4.5' },
    ],
    notice: [
      { to: 'javascript:void(0)', img: '/images/data/img_notice.jpg', alt: '개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.01.02 - 2023.01.31' },
      { to: 'javascript:void(0)', img: '/images/data/img_notice.jpg', alt: '개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.01 - 2023.02.28' },
      { to: 'javascript:void(0)', img: '/images/data/img_notice.jpg', alt: '개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.03.01 - 2023.03.31' },
      { to: 'javascript:void(0)', img: '/images/data/img_notice.jpg', alt: '개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.04.01 - 2023.04.30' },
      { to: 'javascript:void(0)', img: '/images/data/img_notice.jpg', alt: '개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.05.01 - 2023.05.31' },
    ],
    youtube: [
      { title:'편의점 알뜰폰 유심 사봄 feat.원칩', date:'2023.02.02', url: 'https://www.youtube.com/embed/xt9WafOY8d0', videoTitle: 'YouTube video player' },
      { title:'편의점 알뜰폰 유심 사봄 feat.원칩', date:'2023.02.02', url: 'https://www.youtube.com/embed/xt9WafOY8d0', videoTitle: 'YouTube video player' },
      { title:'편의점 알뜰폰 유심 사봄 feat.원칩', date:'2023.02.02', url: 'https://www.youtube.com/embed/xt9WafOY8d0', videoTitle: 'YouTube video player' },
      { title:'편의점 알뜰폰 유심 사봄 feat.원칩', date:'2023.02.02', url: 'https://www.youtube.com/embed/xt9WafOY8d0', videoTitle: 'YouTube video player' },
    ],
    naver: [
      { title: '알뜰폰 가입 개통 방법! 갤럭시S23', date: '2023.02.02', story: '모이모이의 IT 이야기', img: '/images/data/img_card_thum02.png', alt: '네이버 블로그 썸네일' },
      { title: '알뜰폰 가입 개통 방법! 갤럭시S23', date: '2023.02.02', story: '모이모이의 IT 이야기', img: '/images/data/img_card_thum02.png', alt: '네이버 블로그 썸네일' },
      { title: '알뜰폰 가입 개통 방법! 갤럭시S23', date: '2023.02.02', story: '모이모이의 IT 이야기', img: '/images/data/img_card_thum02.png', alt: '네이버 블로그 썸네일' },
      { title: '알뜰폰 가입 개통 방법! 갤럭시S23', date: '2023.02.02', story: '모이모이의 IT 이야기', img: '/images/data/img_card_thum02.png', alt: '네이버 블로그 썸네일' },
    ],
    instagram: [
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
      { id: '@aiden_group', date: '2023.02.02', img: '/images/data/img_card_thum10.png', alt: '인스타그램 썸네일' },
    ],
    event: [
      { title: '무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만', img: '/images/data/img_card_thum07.png', alt: '혜택 이벤트 썸네일' },
      { title: '무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만', img: '/images/data/img_card_thum07.png', alt: '혜택 이벤트 썸네일' },
      { title: '무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만', img: '/images/data/img_card_thum07.png', alt: '혜택 이벤트 썸네일' },
      { title: '무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만', img: '/images/data/img_card_thum07.png', alt: '혜택 이벤트 썸네일' },
    ],
    banner: [
      { to:"javascript:void(0)", img:"/images/data/img_bnr01.jpg", pc_img:"/images/data/img_bnr01_pc.jpg", alt:"혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" },
      { to:"javascript:void(0)", img:"/images/data/img_bnr01.jpg", pc_img:"/images/data/img_bnr01_pc.jpg", alt:"혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" },
      { to:"javascript:void(0)", img:"/images/data/img_bnr01.jpg", pc_img:"/images/data/img_bnr01_pc.jpg", alt:"혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" },
    ],
    mainBanner: [
      { to: 'javascript:void(0)', img: '/images/data/img_main_bnr.png', alt: '갤럭시 S23 출시 이벤트 갤럭시 S23 X   알파 역대급 꿀조합' },
      { to: 'javascript:void(0)', img: '/images/data/img_main_bnr.png', alt: '갤럭시 S23 출시 이벤트 갤럭시 S23 X   알파 역대급 꿀조합' },
      { to: 'javascript:void(0)', img: '/images/data/img_main_bnr.png', alt: '갤럭시 S23 출시 이벤트 갤럭시 S23 X   알파 역대급 꿀조합' },
    ],
    shop: [
      { img: '/images/data/img_shop.jpg', alt: '', },
      { img: '/images/data/img_shop.jpg', alt: '', },
      { img: '/images/data/img_shop.jpg', alt: '', }
    ],
    flow: [
      { img:'/images/data/logo_partner01.png', alt:'A모바일'},
      { img:'/images/data/logo_partner02.png', alt:'FLASH모바일'},
      { img:'/images/data/logo_partner03.png', alt:'KG모빌리언스'},
      { img:'/images/data/logo_partner04.png', alt:'U+유모바일'},
      { img:'/images/data/logo_partner05.png', alt:'WELL'},
      { img:'/images/data/logo_partner06.png', alt:'freeT'},
      { img:'/images/data/logo_partner07.png', alt:'mobing'},
      { img:'/images/data/logo_partner08.png', alt:'리브모바일'},
      { img:'/images/data/logo_partner09.png', alt:'마블프로듀스'},
      { img:'/images/data/logo_partner10.png', alt:'벨류컴'},
      { img:'/images/data/logo_partner11.png', alt:'슈가모바일'},
      { img:'/images/data/logo_partner12.png', alt:'스노우맨'},
      { img:'/images/data/logo_partner13.png', alt:'스마텔'},
      { img:'/images/data/logo_partner14.png', alt:'아이즈모바일'},
      { img:'/images/data/logo_partner15.png', alt:'앤텔레콤'},
      { img:'/images/data/logo_partner16.png', alt:'에스원안심모바일'},
      { img:'/images/data/logo_partner17.png', alt:'여유텔레콤'},
      { img:'/images/data/logo_partner18.png', alt:'이야기모바일'},
      { img:'/images/data/logo_partner19.png', alt:'이지모바일'},
      { img:'/images/data/logo_partner20.png', alt:'인스모바일'},
      { img:'/images/data/logo_partner21.png', alt:'티플러스'},
      { img:'/images/data/logo_partner22.png', alt:'헬로모바일'},
    ],
    esimios: [
      { step: 'step 01', title: 'eSIM을 개통한 아이폰에 오는 <br>Push 메시지를 눌러주세요', img: '/images/content/img_ios_set01.png', alt: '' },
      { step: 'step 02', title: 'eSIM 활성화를 해주세요', img: '/images/content/img_ios_set02.png', alt: '' },
      { step: 'step 03', title: '새로 개통할 eSIM 요금제 <br>레이블을 선택해주세요', img: '/images/content/img_ios_set03.png', alt: '' },
      { step: 'step 04', title: '기본회선을 선택하고 <br>계속을 눌러주세요', img: '/images/content/img_ios_set04.png', alt: '' },
      { step: 'step 05', title: '애플 ID를 연동할 회선을 <br>선택하고 계속을 눌러주세요!', img: '/images/content/img_ios_set05.png', alt: '' },
      { step: 'step 06', title: '셀룰러 데이터에 사용할 회선을 <br>선택 후 계속을 누르면 끝!', img: '/images/content/img_ios_set06.png', alt: '' }
    ],
    esimaos: [
      { step: 'step 01', title: '휴대폰 [설정] 메뉴의 <br>[연결]을 눌러주세요', img: '/images/content/img_and_set01.png', alt: '' },
      { step: 'step 02', title: '[SIM 카드 관리자] 메뉴를 <br>눌러주세요', img: '/images/content/img_and_set02.png', alt: '' },
      { step: 'step 03', title: '[모바일 요금제 추가] 메뉴를 <br>눌러주세요', img: '/images/content/img_and_set03.png', alt: '' },
      { step: 'step 04', title: '요금제 추가 되는 동안 <br>잠시만 기다려주세요!', img: '/images/content/img_and_set04.png', alt: '' },
      { step: 'step 05', title: '[확인]버튼을 눌러주세요!', img: '/images/content/img_and_set05.png', alt: '' }
    ],
  },

  // [ALFM-PR01-PG00] 꼼꼼하게 찾기
  filter: {
    data: [
      { checked:true, id:'filter_radio01_01', title:'전체', value:'데이터 전체' },
      { checked:false, id:'filter_radio01_02', title:'데이터 무제한', value:'데이터 무제한', },
      { checked:false, id:'filter_radio01_03', title:'1GB 미만', value:'1GB 미만', },
      { checked:false, id:'filter_radio01_04', title:'1~5GB', value:'1~5GB', },
      { checked:false, id:'filter_radio01_05', title:'5~15GB', value:'5~15GB', },
      { checked:false, id:'filter_radio01_06', title:'15~50GB', value:'15~50GB', },
      { checked:false, id:'filter_radio01_07', title:'50~100GB', value:'50~100GB', },
    ],
    speed: [
      { checked:false, id:'filter_checkbox01_01', title:'1Mbps 미만', info:'웹서핑이 느릴 수 있어요', value:'1Mbps 미만'},
      { checked:false, id:'filter_checkbox01_02', title:'1Mbps', info:'카톡 텍스트는 되지만 사진은 느려요', value:'1Mbps'},
      { checked:false, id:'filter_checkbox01_03', title:'3Mbps', info:'유튜브 p720화질을 무난히 볼 수 있어요', value:'3Mbps'},
      { checked:false, id:'filter_checkbox01_04', title:'5Mbps', info:'유튜브 p1080화질을 무난히 볼 수 있어요', value:'5Mbps'},
      { checked:false, id:'filter_checkbox01_05', title:'10Mbps', info:'유튜브 p1080화질을 아주 원활히 볼 수 있어요', value:'10Mbps'},
    ],
    price: [
      { checked: true, id:'filter_radio02_01', title:'전체', min:'0', max:'60000', value:'가격 전체' },
      { checked: false, id:'filter_radio02_02', title:'1만원 이하', min:'0', max:'10000', value:'1만원 이하' },
      { checked: false, id:'filter_radio02_03', title:'1만원 대', min:'10000', max:'20000', value:'1만원 대' },
      { checked: false, id:'filter_radio02_04', title:'2만원 대', min:'20000', max:'30000', value:'2만원 대' },
      { checked: false, id:'filter_radio02_05', title:'3만원 대', min:'30000', max:'40000', value:'3만원 대' },
      { checked: false, id:'filter_radio02_06', title:'4만원 대', min:'40000', max:'50000', value:'4만원 대' },
      { checked: false, id:'filter_radio02_07', title:'5만원 이상', min:'50000', max:'100000', value:'5만원 이상' },
    ],
    call:[
      { checked: false, id:'filter_checkbox02_01', title:'통화 무제한', value:'통화 무제한' },
      { checked: false, id:'filter_checkbox02_02', title:'60분 미만', value:'60분 미만' },
      { checked: false, id:'filter_checkbox02_03', title:'60-180분', value:'60-180분' },
      { checked: false, id:'filter_checkbox02_04', title:'180-300분', value:'180-300분' },
    ],
    sms: [
      { checked: false, id:'filter_checkbox03_01', title:'문자 무제한', value:'문자 무제한', },
      { checked: false, id:'filter_checkbox03_02', title:'50건 미만', value:'50건 미만', },
      { checked: false, id:'filter_checkbox03_03', title:'50-100건', value:'50-100건', },
      { checked: false, id:'filter_checkbox03_04', title:'100-300건', value:'100-300건', },
      { checked: false, id:'filter_checkbox03_05', title:'300-500건', value:'300-500건', },
    ],
    partner: [
      { checked:false, id:'filter_checkbox04_01', title:'A모바일', value:'A모바일', },
      { checked:false, id:'filter_checkbox04_02', title:'FLASH모바일', value:'FLASH모바일' },
      { checked:false, id:'filter_checkbox04_03', title:'KG모빌리언스', value:'KG모빌리언스' },
      { checked:false, id:'filter_checkbox04_04', title:'U+유모바일', value:'U+유모바일' },
      { checked:false, id:'filter_checkbox04_05', title:'WELL', value:'WELL' },
      { checked:false, id:'filter_checkbox04_06', title:'freeT', value:'freeT' },
      { checked:false, id:'filter_checkbox04_07', title:'mobing', value:'mobing' },
      { checked:false, id:'filter_checkbox04_08', title:'리브모바일', value:'리브모바일' },
      { checked:false, id:'filter_checkbox04_09', title:'마블프로듀스', value:'마블프로듀스' },
      { checked:false, id:'filter_checkbox04_10', title:'밸류컴', value:'밸류컴' },
      { checked:false, id:'filter_checkbox04_11', title:'서경모바일', value:'서경모바일' },
      { checked:false, id:'filter_checkbox04_12', title:'슈가모바일', value:'슈가모바일' },
      { checked:false, id:'filter_checkbox04_13', title:'스노우맨', value:'스노우맨' },
      { checked:false, id:'filter_checkbox04_14', title:'스마텔', value:'스마텔' },
      { checked:false, id:'filter_checkbox04_15', title:'아이즈모바일', value:'아이즈모바일' },
      { checked:false, id:'filter_checkbox04_16', title:'앤텔레콤', value:'앤텔레콤' },
      { checked:false, id:'filter_checkbox04_17', title:'에스원안심모바일', value:'에스원안심모바일' },
      { checked:false, id:'filter_checkbox04_18', title:'여유텔레콤', value:'여유텔레콤' },
      { checked:false, id:'filter_checkbox04_19', title:'이야기모바일', value:'이야기모바일' },
      { checked:false, id:'filter_checkbox04_20', title:'이지모바일', value:'이지모바일' },
      { checked:false, id:'filter_checkbox04_21', title:'인스모바일', value:'인스모바일' },
      { checked:false, id:'filter_checkbox04_22', title:'티플러스', value:'티플러스' },
      { checked:false, id:'filter_checkbox04_23', title:'헬로모바일', value:'헬로모바일' },
    ],
    tech: [
      { checked:true, id:'filter_radio03_01', title:'전체', value:'통신기술 전체' },
      { checked:false, id:'filter_radio03_02', title:'4G(LTE)', value:'4G(LTE)' },
      { checked:false, id:'filter_radio03_03', title:'5G', value:'5G' },
    ],
    discount: [
      { checked:true, id:'filter_radio04_01', title:'전체', value:'할인 전체' },
      { checked:false, id:'filter_radio04_02', title:'6개월 미만', value:'6개월 미만' },
      { checked:false, id:'filter_radio04_03', title:'6~12개월', value:'6~12개월' },
      { checked:false, id:'filter_radio04_04', title:'12개월 이상', value:'12개월 이상' },
    ],
    service: [
      { checked:false, id:'filter_checkbox05_01', title:'NFC 지원', value:'NFC 지원' },
      { checked:false, id:'filter_checkbox05_02', title:'소액결제', value:'소액결제' },
      { checked:false, id:'filter_checkbox05_03', title:'유심무료', value:'유심무료' },
      { checked:false, id:'filter_checkbox05_04', title:'모바일 핫스팟', value:'모바일 핫스팟' },
      { checked:false, id:'filter_checkbox05_05', title:'데이터 쉐어링', value:'데이터 쉐어링' },
      { checked:false, id:'filter_checkbox05_06', title:'eSIM 지원', value:'eSIM 지원' },
      { checked:false, id:'filter_checkbox05_07', title:'해외 로밍', value:'해외 로밍' },
      { checked:false, id:'filter_checkbox05_08', title:'가족 결합', value:'가족 결합' },
    ],
    target: [
      { checked: false, id:'filter_checkbox06_01', title:'시니어 요금제', value:'시니어 요금제' },
      { checked: false, id:'filter_checkbox06_02', title:'청소년 요금제', value:'청소년 요금제' },
      { checked: false, id:'filter_checkbox06_03', title:'복지 요금제', value:'복지 요금제' },
    ]
  },


  

  alert: {

    // [공통][PR02Alert] [페이지][ALFM-PR02-PO00 ~ 08] 꼭 맞는 요금제 찾기 중단
    PR02Alert: {
      title: '안내',
      content: `
        <div class="info_con">
          지금 팝업을 닫으시면,<br>꼭 맞는 요금제 찾기가 중단되요.<br>정말 닫으시겠어요?
        </div>
      `,
      button: [
        { text: '계속할래요', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '닫을래요', class:'btn sm c02', click:"this.closeAlert(); this.closePopup('PR02PO00', 'btn_PR02PO00'); this.closePopup('PR02PO01', 'btn_PR02PO01'); this.closePopup('PR02PO02', 'btn_PR02PO02'); this.closePopup('PR02PO03', 'btn_PR02PO03'); this.closePopup('PR02PO04', 'btn_PR02PO04'); this.closePopup('PR02PO05', 'btn_PR02PO05'); this.closePopup('PR02PO06', 'btn_PR02PO06'); this.closePopup('PR02PO07', 'btn_PR02PO07'); this.closePopup('PR02PO08', 'btn_PR02PO08');", },
      ],
    },

    // [공통][ALFM-CS02-PG00] [페이지][ALFM-CS02-PG00] 위치정보 활용 동의 안내 (동의 체크 X 시 노출)
    CS02Alert: {
      title: '위치정보 활용 동의 안내',
      content: `
        <div class="info_con">
          [내 주변 매장 찾기] 메뉴를 <br>이용하기 위해서는 <br>위치정보 활용 동의가 꼭 필요해요!
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [공통][ALFM-CM09-PO00] 가입신청 프로세스 이탈 안내 팝업
    CM09PO00: {
      title: '안내',
      content: `
        <div class="info_con">
          ⁠신청을 종료하시겠어요?<br>
          ⁠진행중인 내용은 저장됩니다.
        </div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '종료하기', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [공통][ALFM-CM10-PO00] 가입신청 이어하기 안내 팝업
    CM10PO00: {
      title: '안내',
      content: `
        <div class="info_con">
          ⁠작성중인 신청서가 있습니다.<br>
          ⁠이어서 신청할까요?
        </div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '이어하기', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [공통][ALFM-CM12-PG00] 공유하기
    CM12PG00: {
      title: '공유하기',
      content: `
        <div class="cir_icon_link">
          <ul>
            <li><a href="javascript:void(0);" class="icon_link facebook"><span>페이스북</span></a></li>
            <li><a href="javascript:void(0);" class="icon_link kakao"><span>카카오톡</span></a></li>
            <li><a href="javascript:void(0);" class="icon_link url"><span>URL 복사</span></a></li>
          </ul>
        </div>
      `,
      button: [
        { text: '닫기', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // 유심구매 > 바로배송 [ALFM-BU01-PO02] alert : 바로배송 안내
    BU01PO02: {
      title: '바로배송 안내',
      content: `
        <div class="info_con">
          지금은 바로배송이 불가한 시간이에요<br>택배배송으로 전달 드릴게요
        </div>
        <div class="info_baro">
          <span class="bag clr c06">바로배송 가능시간</span>
          <strong class="time">09:00~22:00</strong>
        </div>
        <div class="box_gray">
          <ul class="text_list bull">
            <li>택배배송은 보통 2~3일(영업일 기준)정도 소요됩니다.</li>
            <li>택배사의 사정에 따라 배송이 지연될 수 있어요.</li>
            <li>문의하실 사항이 있으실 경우 1:1문의하기를 이용해주세요.<br>
              <NuxtLink :to="{}" class="btn xsm c07 mgt8">1:1문의하기</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="tip_baro">
          <span class="bag clr c06">구매팁</span>
          <span class="desc">바로배송이 가능한 시간에 주문하시면 <br> <strong>2시간 이내</strong>로 받을 수 있어요!</span>
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // 유심구매 > 바로배송 [ALFM-BU01-PO01] alert : 바로배송 불가 택배배송 안내
    BU01PO01: {
      title: '택배배송 안내',
      content: `
        <div class="info_con">
          입력하신 주소는 현재 바로배송이 불가하여<br>
          택배배송으로 전달 드릴게요
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>택배배송은 보통 2~3일(영업일 기준) <br>정도 소요됩니다.</li>
            <li>택배사의 사정에 따라 배송이 지연될 수 <br>있어요.</li>
            <li>문의하실 사항이 있으실 경우 <br>1:1문의하기를 이용해주세요.<br>
              <NuxtLink  to="javascript:void(0);" class="btn xsm c07 mgt8">1:1문의하기</NuxtLink>
            </li>
          </ul>
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-PR03-PO03] 검색된 번호가 없습니다.
    PR03PO03B: {
      title: '확인',
      content: `
        <div class="info_con">검색된 번호가 없습니다.</div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },


    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : 셀프개통 불가한 시간에, 신규가입으로 가입신청 완료 시
    PR03PO19: {
      title: '안내',
      content: `
        <div class="info_con">
          지금은 셀프개통 가능한 시간이 아닙니다.<br>
          ⁠셀프개통 가능한 시간에,<br>
          ⁠마이페이지>내가 신청한 요금제<br>
          상세 화면에서 <span class="fc01">⁠희망번호</span>를 선택 후<br>
          개통을 완료해주세요!
        </div>
        <div class="box_gray mgt20">
          <strong>셀프개통 업무시간 안내</strong>
          <ul class="text_list bull">
            <li>
              신규가입 <br>
              : 오전 8시 ~ 오후 8시 (평일/토요일)
            </li>
            <li>
              번호이동 <br>
              : 오전 10시 ~ 오후 8시 (평일/토요일)
            </li>
          </ul>
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : USIM 없이, 가입신청 완료 시
    PR03PO19B: {
      title: '안내',
      content: `
        <div class="info_con">
          택배로 USIM을 받게 되시면,<br>
          마이페이지>내가 신청한 요금제<br>
          상세 화면에서 <span class="fc01">USIM 정보를 입력</span> 후<br>
          개통을 완료해주세요!
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-PR03-PO05] 조회된 일련번호가 없을 경우 Alert
    PR03PO05: {
      title: '안내',
      content: `
        <div class="info_con">
          조회된 일련번호가 없습니다.<br>
          모델명으로 조회해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-PR03-PO04] eSIM 미지원 단말기인 경우
    PR03PO04: {
      title: '안내',
      content: `
        <div class="info_con">
          해당 단말기는 eSIM을 지원하지 않습니다.<br>
          계속해서 가입신청 후<br>
          상담사를 통해 개통하시겠어요?
        </div>
      `,
      button: [
        { text: '상담받고<br>개통할래요', class:'btn sm c07', click:"this.closeAlert()", },
        { text: 'USIM으로<br>개통할래요', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-PR03-PO00] 셀프개통 불가 경우
    PR03PO00: {
      title: '안내',
      content: `
        <div class="info_con">
          지금은 온라인 신청만 가능한 시간이에요. <br>
          신청서 접수 후, <br>
          ⁠개통이 가능할 때 알려드릴게요!
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-BE02-PG00] 댓글을 삭제하시겠어요?
    BE02PG00: {
      title: '안내',
      content: `
        <div class="info_con">댓글을 삭제하시겠어요?</div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-BE02-PG00] 댓글이 삭제되었습니다.
    BE02PG00B: {
      title: '안내',
      content: `
        <div class="info_con">댓글이 삭제되었습니다.</div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO02] 1:1 문의하기 > 등록 > 완료 :: 등록 완료 - 미로그인 Case
    CS05PO02: {
      title: '안내',
      content: `
        <div class="info_con">
          1:1문의하기가 접수되었습니다.<br>입력하신 이메일 주소로<br>문의에 대한 답변을 보내드릴게요!<br>
          <span class="info_sub">문의가 많은 경우 답변이 지연될 수 있습니다.</span>
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO02] 1:1 문의하기 > 등록 > 완료 :: 등록 완료 - 등록 완료 - 로그인 Case
    CS05PO02B: {
      title: '안내',
      content: `
        <div class="info_con">
          1:1문의하기가 접수되었습니다.<br>
          문의에 대한 답변은<br>
          [마이페이지 > 1:1문의내역]에서<br>
          확인하실 수 있어요!<br>
          <span class="info_sub">문의가 많은 경우 답변이 지연될 수 있습니다.</span>
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO01] 1:1 문의하기 > 등록 > 등록확인 :: 이메일 주소 확인
    CS05PO01: {
      title: '안내',
      content: `
        <div class="info_con">
          답변 받으실 이메일 주소가 맞나요?<br>
          <strong class="fc01">abcdef@hotmail.com</strong>
        </div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO01] 1:1 문의하기 > 등록 > 등록확인 :: 문의 등록 확인
    CS05PO01B: {
      title: '안내',
      content: `
        <div class="info_con">
          입력하신 내용으로 문의하시겠어요?
        </div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },


    // [ALFM-CS05-PO00] 알럿 : 인증번호 발송 안내
    CS05PO00: {
      title: '안내',
      content: `
        <div class="info_con">
          해당 번호로 인증번호를 <br>발송하였습니다.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO00] 알럿 : 고객명 입력 안내
    CS05PO00B: {
      title: '안내',
      content: `
        <div class="info_con">
          고객명을 입력해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO00] 알럿 : 휴대폰 번호 입력 안내
    CS05PO00C: {
      title: '안내',
      content: `
        <div class="info_con">
          휴대폰 번호를 정확하게 <br>입력해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO00] 알럿 : 인증 번호 불일치 안내
    CS05PO00E: {
      title: '안내',
      content: `
        <div class="info_con">
          인증번호가 틀렸습니다.<br>
          다시 확인해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG01-PO00] 로그인 > 회원가입 안내 alert
    LG01PO00: {
      title: '회원가입 안내',
      content: `
        <div class="info_con">
          아직 <sup>+</sup>알파의 회원이 아니신가요? <br>지금 바로 가입하시고 <br> 회원만의 혜택을 놓치지 마세요!
        </div>
      `,
      button: [
        { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
        { text: '회원가입', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG01-PO00] 로그인 > 사이트 이용 제한 안내 alert
    LG01PO00B: {
      title: '사이트 이용 제한 안내',
      content: `
        <div class="info_con">
          관리자 요청에 의해 <br> 사이트 이용이 제한된 계정입니다. <br>문의사항이 있으실 경우,<br> 1:1 문의하기를 이용해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG01-PO00] 로그인 > 소셜회원 안내 팝업 alert
    LG01PO00S: {
      title: '안내',
      content: `
        <div class="info_con">
          <span>$카카오톡 or 네이버$</span>으로 가입한 회원이시네요.<br> 지금 바로 간편하게 로그인 해보세요!
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG04-PO00] 중복된 이메일이 없을 경우 alert
    LG04PO00: {
      title: '안내',
      content: `
        <div class="info_con">
          이용 가능한 메일 주소입니다!<br>가입을 계속 진행해주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG04-PO00] 기존 계정 또는 탈퇴한 경우 alert
    LG04PO00B: {
      title: '안내',
      content: `
        <div class="info_con">
          입력하신 이메일 주소는 <br> 이미 사용중이거나 탈퇴한 계정입니다. <br> 다른 이메일 주소를 입력해 주세요.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // login [ALFM-LG04-PO00] 가입된 회원정보가 있는 경우 alert
    LG04PO00C: {
      title: '로그인 안내',
      content: `
        <div class="info_con">
          이미 <sup>+</sup>알파의 회원이시네요.<br>간편하게 로그인 후<br>회원 서비스를 계속 이용해 보세요!
        </div>
      `,
      button: [
        { text: '로그인 하기', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-CS05-PO00] 알럿 : 인증 완료 안내
    CS05PO00D: {
      title: '안내',
      content: `
        <div class="info_con">
          인증이 완료되었습니다.
        </div>
      `,
      button: [
        { text: '확인', class:'btn sm c02', click:"this.closeAlert()", },
      ],
    },

    // [ALFM-MY08-PO01] 마이페이지 > 내 정보 수정 > 회원탈퇴 완료
    MY08PO01: {
      title: '회원탈퇴 완료',
      content: `
        <div class="info_con">
          회원탈퇴가 완료되었습니다.<br>그동안 <sup>+</sup>알파를 이용해 주셔서 감사합니다.
        </div>
      `,
      button: [
        { text: '<sup>+</sup>알파 홈 바로가기', class:'btn sm c02 w_ty02', click:"this.closeAlert()", },
      ],
    },

  }

};

export default frontData;
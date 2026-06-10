// ────────────────────────────────────────────────────────────────
//  로고 추가 방법
//  1) public/assets/logos/ 에 PNG 파일 복사
//  2) 해당 항목의 logo 경로를 '/assets/logos/파일명.png' 로 수정
// ────────────────────────────────────────────────────────────────

/** 화주사 — 로한물류에 운송·물류대행을 맡기는 고객사 (농산/수산/축산/식품) */
export const shippers = [
  // 농산
  { id: 'sinseokryeong', name: '농업회사법인 신석영' },
  { id: 'prebe',         name: '농업회사법인 프레베' },
  { id: 'miraewon',      name: '농업회사법인 미래원' },
  { id: 'yeolmae',       name: '열매영농조합법인' },
  { id: 'cheongwoon',    name: '청운영농조합법인' },
  { id: 'mungyeong',     name: '문경농협유통산지' },
  { id: 'chungbuk',      name: '충북원예농협' },
  { id: 'bigeum',        name: '비금농협' },
  { id: 'chaegwawon',    name: '채과원(PSK)' },
  // 수산
  { id: 'jamsukgi',      name: '잠수기중매인' },
  { id: '3s-seafood',    name: '3S씨푸드' },
  { id: 'yushin',        name: '유신수산' },
  { id: 'dongbang',      name: '동방유통' },
  { id: 'yulim',         name: '유림수산' },
  { id: 'jinyang',       name: '진양수산' },
  { id: 'ebada',         name: '에바다수산' },
  { id: 'geumyang',      name: '금양유통' },
  // 축산
  { id: 'dodram',        name: '도드람푸드' },
  { id: 'hannuri',       name: '한누리푸드' },
  { id: 'smilefarm',     name: '스마일팜' },
  { id: 'pojeong',       name: '포정유통' },
  { id: 'greenhouse',    name: '더그린하우스' },
  { id: 'manikerfng',    name: '마니커애프엔지' },
  { id: 'jeongdawoon',   name: '정다운오리' },
  { id: 'farmduck',      name: '팜덕' },
  // 식품
  { id: 'ourhome',       name: '아워홈' },
  { id: 'lottefood',     name: '롯데푸드' },
  { id: 'bhc',           name: 'BHC' },
  { id: 'namboo',        name: '남부식품' },
  { id: 'haemaro',       name: '해마로푸드시스템' },
  { id: 'malkeun',       name: '맑은유통' },
  { id: 'jubi',          name: '주비식품' },
  { id: 'deulbit',       name: '들빛식품' },
];

/** 납품처 — 로한물류가 배송하는 유통·소매 거점 */
export const retailers = [
  { id: 'homeplus',       name: '홈플러스',          logo: '/assets/logos/homeplus.png' },
  { id: 'homeplus-ex',    name: '홈플러스 익스프레스', logo: '/assets/logos/homeplus-ex.png' },
  { id: 'emart',          name: '이마트',             logo: '/assets/logos/emart.png' },
  { id: 'emart-everyday', name: '이마트 에브리데이',  logo: '/assets/logos/emart-everyday.png' },
  { id: 'lotte',          name: '롯데마트',           logo: '/assets/logos/lotte.png' },
  { id: 'lotte-super',    name: '롯데슈퍼',           logo: '/assets/logos/lotte-super.png' },
  { id: 'megamart',       name: '메가마트',           logo: '/assets/logos/megamart.png' },
  { id: 'gs',             name: 'GS리테일',           logo: '/assets/logos/gs.png' },
  { id: 'nonghyup',       name: '농협',               logo: '/assets/logos/nonghyup.png' },
  { id: 'coupang',        name: '쿠팡',               logo: '/assets/logos/coupang.png' },
  { id: 'welstory',       name: '웰스토리',           logo: '/assets/logos/welstory.png' },
  { id: 'kurly',          name: '마켓컬리',           logo: '/assets/logos/kurly.png' },
];

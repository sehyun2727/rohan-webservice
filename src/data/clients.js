// ────────────────────────────────────────────────────────────────
//  로고 추가 방법
//  1) public/assets/logos/ 에 PNG 파일 복사
//  2) 아래 배열에 항목 한 줄 추가:
//     { id: 'unique-id', name: '회사명', logo: '/assets/logos/파일명.png' }
//  → 사이트 자동 반영 (빌드 불필요, 개발 서버 재시작도 불필요)
// ────────────────────────────────────────────────────────────────

/** 화주사 — 로한물류에 운송을 맡기는 고객사 */
export const shippers = [
  { id: 'bhc',           name: 'BHC',          logo: '/assets/logos/bhc.png' },
  { id: 'hyundai-smart', name: '현대스마트푸드', logo: '/assets/logos/hyundai-smart.png' },
  { id: 'green-sea',     name: '늘푸른바다',    logo: '/assets/logos/green-sea.png' },
  { id: 'farm8',         name: '팜에이트',      logo: '/assets/logos/farm8.png' },
  // 여기에 화주사 추가 ↑
];

/** 납품처 — 로한물류가 배송하는 유통·소매 거점 */
export const retailers = [
  { id: 'homeplus', name: '홈플러스',  logo: '/assets/logos/homeplus.png' },
  { id: 'lotte',    name: '롯데마트',  logo: '/assets/logos/lotte.png' },
  { id: 'coupang',  name: '쿠팡',      logo: '/assets/logos/coupang.png' },
  { id: 'welstory', name: '웰스토리',  logo: '/assets/logos/welstory.png' },
  { id: 'kurly',    name: '마켓컬리',  logo: '/assets/logos/kurly.png' },
  // 여기에 납품처 추가 ↑
];

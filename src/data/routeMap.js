// 좌표 형식: [위도(lat), 경도(lng)]
// 실제 주소 마커는 지오코딩 근사값 — Phase 5에서 정밀 확인

// ── 특수 마커 (본사·허브·창고) ──────────────────────────────
export const markers = [
  {
    id:      'hq',
    type:    'hq',
    label:   '대구 본사',
    address: '대구광역시 북구 한강로8길 13-13',
    coords:  [35.8974, 128.5843],
  },
  {
    id:      'chilgok-hub',
    type:    'hub',
    label:   '칠곡물류IC',
    address: '환적 거점',
    coords:  [35.9938, 128.4520],
  },
  {
    id:      'anseong-wh',
    type:    'warehouse',
    label:   '안성센터',
    address: '경기 안성시 원곡면 원당로 233',
    coords:  [37.0043, 127.2797],
  },
  {
    id:      'jinju-wh',
    type:    'warehouse',
    label:   '진주센터',
    address: '경남 진주시 진성면 동부로 1233',
    coords:  [35.1795, 128.1367],
  },
];

// ── 노선 노드 (도시 중심) ────────────────────────────────────
export const nodes = [
  { id: 'seongnam', label: '성남',    coords: [37.4200, 127.1266] },
  { id: 'gwangju',  label: '경기광주', coords: [37.4295, 127.2557] },
  { id: 'anseong',  label: '안성',    coords: [37.0080, 127.2698] },
  { id: 'chilgok',  label: '칠곡',    coords: [35.9947, 128.4019] },
  { id: 'haman',    label: '함안',    coords: [35.2732, 128.4066] },
  { id: 'gimhae',   label: '김해',    coords: [35.2285, 128.8891] },
  { id: 'gijang',   label: '기장',    coords: [35.2448, 129.2225] },
  { id: 'jinju',    label: '진주',    coords: [35.1800, 128.1072] },
  { id: 'sacheon',  label: '사천',    coords: [35.0039, 128.0641] },
  { id: 'damyang',  label: '담양',    coords: [35.3215, 126.9878] },
];

// ── 노선 연결 (폴리라인) ─────────────────────────────────────
// type: 'yeongnam' = 영남 라인 (파란색)
// type: 'jeolla'   = 전라 라인 (다른 색 — Phase 5에서 결정)
export const routes = [
  // 수도권 집결 → 안성
  { id: 'seongnam-anseong', coords: [[37.4200, 127.1266], [37.0080, 127.2698]], type: 'yeongnam' },
  { id: 'gwangju-anseong',  coords: [[37.4295, 127.2557], [37.0080, 127.2698]], type: 'yeongnam' },

  // 안성 → 칠곡 (경부선)
  { id: 'anseong-chilgok-gyeongbu', coords: [[37.0080, 127.2698], [35.9947, 128.4019]], type: 'yeongnam', label: '경부선' },
  // 안성 → 칠곡 (중부내륙) — 경부선과 미세 오프셋으로 시각 구분
  { id: 'anseong-chilgok-jungbu',   coords: [[37.0080, 127.2918], [35.9947, 128.4239]], type: 'yeongnam', label: '중부내륙' },

  // 칠곡 허브 → 문어발 납품
  { id: 'chilgok-haman',  coords: [[35.9947, 128.4019], [35.2732, 128.4066]], type: 'yeongnam' },
  { id: 'chilgok-gimhae', coords: [[35.9947, 128.4019], [35.2285, 128.8891]], type: 'yeongnam' },
  { id: 'chilgok-gijang', coords: [[35.9947, 128.4019], [35.2448, 129.2225]], type: 'yeongnam' },
  { id: 'chilgok-jinju',  coords: [[35.9947, 128.4019], [35.1800, 128.1072]], type: 'yeongnam' },

  // 전라 라인
  { id: 'sacheon-damyang', coords: [[35.0039, 128.0641], [35.3215, 126.9878]], type: 'jeolla' },
  { id: 'jinju-damyang',   coords: [[35.1800, 128.1072], [35.3215, 126.9878]], type: 'jeolla' },
  { id: 'damyang-anseong', coords: [[35.3215, 126.9878], [37.0080, 127.2698]], type: 'jeolla' },
  // ⚠️ 담양 ↔ 칠곡 연결 없음 (브리핑 명시)
];

// ── 지도 초기 설정 ───────────────────────────────────────────
export const mapConfig = {
  center:  [36.3, 127.9],   // 한국 중남부 중심
  zoom:    7,
  minZoom: 6,
  maxZoom: 12,
};

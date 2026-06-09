export const vehicleStats = {
  count:    20,
  types:    '5t · 8t · 11t',
  capacity: '16파렛트',
  coverage: '전국',
};

export const vehicleFeatures = [
  {
    id: 'tonnage',
    title: '5~11톤 전 차종 보유',
    detail: '전 차량 16파렛트 상차 가능',
  },
  {
    id: 'temp',
    title: '냉장 / 냉동 / 상온 겸용',
    detail: '화물 종류에 따른 유연한 온도 운용',
  },
  {
    id: 'dual-cooler',
    title: '차량당 냉동기 2대',
    detail: '한 대 고장 시에도 냉기 유지',
  },
  {
    id: 'heater',
    title: '혹한기 히터 장착',
    detail: '동절기 화물 안전 보장',
  },
  {
    id: 'stainless',
    title: '실내 스테인리스 마감',
    detail: '위생 인증 수준의 내부 관리',
  },
  {
    id: 'door',
    title: '롤업도어 · 조르다',
    detail: '상하차 편의성 극대화',
  },
];

// 사진은 추후 교체 — 지금은 플레이스홀더
export const vehicleGallery = Array.from({ length: 8 }, (_, i) => ({
  id:      i + 1,
  src:     `/assets/images/vehicles/vehicle-${i + 1}.jpg`,
  alt:     `로한물류 냉동탑차 ${i + 1}`,
  caption: '사진 교체 예정',
}));

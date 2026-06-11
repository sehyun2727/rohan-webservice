export const warehouses = [
  {
    id:        'anseong',
    name:      '로한물류 안성 거점센터',
    region:    '수도권 거점',
    address:   '경기도 안성시 원곡면 반제리 181-1',
    area:      '냉장 330평·냉동 140평·상온 100평',
    capacity:  '동시 접안 11톤(16P) 16대',
    tempRange: '냉동·냉장·상온',
    images: [
      '/assets/images/warehouses/anseong-1.jpg',
      '/assets/images/warehouses/anseong-2.jpg',
      '/assets/images/warehouses/anseong-3.jpg',
    ],
    features: [
      '2019년 신축 저온센터 560평 — 직영 최대 규모 거점',
      '냉장 330평·냉동 140평·상온 100평 독립 3온도대 구획',
      '11톤(16P) 동시 접안 16대 — 대규모 입출고 동시 처리',
      '서안성 물류IC 5분 · 수도권·전라 당일 직배송 연결',
    ],
  },
  {
    id:        'chilgok',
    name:      '로한물류 칠곡 환적센터',
    region:    '영남권 거점',
    address:   '경상북도 칠곡군 지천면 금호리 481-16',
    area:      '냉장 250평·냉동 40평·상온 100평',
    capacity:  '동시 접안 11톤(16P) 8대',
    tempRange: '냉동·냉장·상온',
    images: [
      '/assets/images/warehouses/chilgok-1.jpg',
      '/assets/images/warehouses/chilgok-2.jpg',
      '/assets/images/warehouses/chilgok-3.jpg',
    ],
    features: [
      '칠곡IC 5분 — 경부고속도로 직결 수도권↔영남 간선 환적 허브',
      '냉장 250평·냉동 40평·상온 100평 혼재 화물 복합 대응',
      'BHC 영남권 물류대행 장기 운영 — 프랜차이즈 납품 전문 경험',
      '안성센터와 2개 평행 간선 노선 · 영남 전역 공동배송 분기',
    ],
  },
  {
    id:        'jinju',
    name:      '로한물류 진주 DEPOT',
    region:    '경남권 거점',
    address:   '경상남도 진주시 진성면 동부로 1233',
    area:      '냉장 20Pallet·냉동 6Pallet',
    capacity:  '동시 접안 11톤(16P) 6대',
    tempRange: '냉동·냉장',
    images: [
      '/assets/images/warehouses/jinju-1.jpg',
      '/assets/images/warehouses/jinju-2.jpg',
      '/assets/images/warehouses/jinju-3.jpg',
    ],
    features: [
      '진성IC 5분 인접 — 서부 경남 냉동 배송 전담 소형 거점',
      '홈플러스 입고대행 전담 운영 · 대형마트 납품 10년 노하우',
      '냉장 20P·냉동 6P 소형 기동형 DEPOT — 소량 다빈도 출고 특화',
      '칠곡·함안 연계 영남 루프 노선 · 호남(담양) 연결 수송 접점',
    ],
  },
];

export const warehouseCommonFeatures = [
  {
    icon: 'temp',
    title: '온도별 구획 관리',
    desc: '냉동·냉장·상온 구역을 독립 구획으로 운영해 다품종 소량 보관도 혼재 없이 처리합니다.',
  },
  {
    icon: 'monitor',
    title: '납품대행·Cross Docking',
    desc: '입고 → 보관 → 출고 → 배송을 일괄 대행. 센터 Cross Docking으로 공동배송 효율을 높입니다.',
  },
  {
    icon: 'hygiene',
    title: '정기 방역·위생 관리',
    desc: '세스코 방제 계약, 월 1회 Dock 청소·방역, 연 1회 식품위생교육으로 청결한 보관 환경을 유지합니다.',
  },
  {
    icon: 'forklift',
    title: '직영 수송 연계',
    desc: '전국 냉동탑차 직영 노선과 연계해 보관부터 납품까지 단일 파트너로 처리합니다.',
  },
];

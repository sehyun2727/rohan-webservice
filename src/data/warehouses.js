export const warehouses = [
  {
    id:       'anseong',
    name:     '안성센터',
    region:   '수도권 거점',
    address:  '경기 안성시 원곡면 원당로 233',
    area:     null,       // 추후 입력 (단위: m²)
    capacity: null,       // 추후 입력 (단위: 파렛트)
    tempRange: null,      // 추후 입력 (예: '-25°C ~ +15°C')
    images: [
      '/assets/images/warehouses/anseong-1.jpg',
      '/assets/images/warehouses/anseong-2.jpg',
      '/assets/images/warehouses/anseong-3.jpg',
    ],
    features: [
      '냉동·냉장 전용 보관동',
      '24시간 온도 모니터링',
      '지게차 상하차 지원',
      '방역·위생 정기 관리',
    ],
  },
  {
    id:       'jinju',
    name:     '진주센터',
    region:   '영남 거점',
    address:  '경남 진주시 진성면 동부로 1233',
    area:     null,
    capacity: null,
    tempRange: null,
    images: [
      '/assets/images/warehouses/jinju-1.jpg',
      '/assets/images/warehouses/jinju-2.jpg',
      '/assets/images/warehouses/jinju-3.jpg',
    ],
    features: [
      '냉동·냉장 전용 보관동',
      '24시간 온도 모니터링',
      '지게차 상하차 지원',
      '방역·위생 정기 관리',
    ],
  },
];

export const warehouseCommonFeatures = [
  {
    icon: 'temp',
    title: '냉동·냉장 전 온도대',
    desc: '냉동(-25℃)부터 냉장·상온까지 원하는 온도대에 맞춰 보관 구역을 지정합니다.',
  },
  {
    icon: 'monitor',
    title: '24시간 온도 모니터링',
    desc: '온도 센서와 경보 시스템을 통해 보관 온도를 24시간 실시간으로 감시합니다.',
  },
  {
    icon: 'forklift',
    title: '지게차 상하차 지원',
    desc: '자체 지게차를 운영해 파렛트 단위 입·출고를 신속하게 처리합니다.',
  },
  {
    icon: 'hygiene',
    title: '정기 방역·위생 관리',
    desc: '식품 위생 기준에 맞춘 정기 소독·방역으로 청결한 보관 환경을 유지합니다.',
  },
];

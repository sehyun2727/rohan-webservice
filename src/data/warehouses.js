// 면적·보관용량·온도대·시설은 추후 실제 값으로 교체
export const warehouses = [
  {
    id:       'anseong',
    name:     '안성센터',
    region:   '수도권 거점',
    address:  '경기 안성시 원곡면 원당로 233',
    area:     null,       // 추후 입력 (단위: m²)
    capacity: null,       // 추후 입력 (단위: 파렛트)
    tempRange: null,      // 추후 입력 (예: '-25°C ~ +15°C')
    facilities: [],       // 추후 입력 (예: ['지게차', '냉동창고', '상온창고'])
    images: ['/assets/images/warehouses/anseong-1.jpg'],
  },
  {
    id:       'jinju',
    name:     '진주센터',
    region:   '영남 거점',
    address:  '경남 진주시 진성면 동부로 1233',
    area:     null,
    capacity: null,
    tempRange: null,
    facilities: [],
    images: ['/assets/images/warehouses/jinju-1.jpg'],
  },
];

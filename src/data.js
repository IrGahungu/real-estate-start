// import house images
import House1 from './assets/img/houses/house1lg.png';
import House2 from './assets/img/houses/house2lg.png';
import House3 from './assets/img/houses/house3lg.png';
import House4 from './assets/img/houses/house4lg.png';
import House5 from './assets/img/houses/house5lg.png';
import House6 from './assets/img/houses/house6lg.png';
import House7 from './assets/img/houses/car1.png';
import House8 from './assets/img/houses/design1.jpg';
import House9 from './assets/img/houses/design2.jpg';
import House10 from './assets/img/houses/design3.jpg';
import House11 from './assets/img/houses/design4.jpg';
import House12 from './assets/img/houses/salle1.jpg';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/car1.png';
import Apartment2 from './assets/img/apartments/car2.png';
import Apartment3 from './assets/img/apartments/car3.png';
import Apartment4 from './assets/img/apartments/salle2.jpg';
import Apartment5 from './assets/img/apartments/salle3.jpg';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent13 from './assets/img/agents/agent13.png';

export const housesData = [
  {
    id: 1,
    type: 'For Buying',
    name: 'House 1',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House1,
    imageLg: House1Lg,
    imageUrls:[
      House1Lg,
      House10Lg,
      House11Lg,
      House12Lg,
    ],
    country: 'House',
    number:'5 People are already asking for it,No one paid yet.',
    address: 'KIGOBE',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '11 MILLIONS FBU',
    agent: {
      image: Agent13,
      name:'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'For Buying',
    name: 'House 2',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House2,
    imageLg: House2Lg,
    imageUrls:[
      House11Lg,
      House10Lg,
      House11Lg,
      House12Lg,
    ],
    country: 'House',
    number:'10 People are already asking for it,No one paid yet.',
    address: 'MIROIR',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '55 MILLIONS FBU',
    agent: {
      image: Agent13,
      name: 'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'For Buying',
    name: 'House 3',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House3,
    imageLg: House3Lg,
    country: 'House',
    number:'Already taken,Thank You!',
    address: 'KIRIRI 2',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '30 MILLIONS FBU',
    agent: {
      image: Agent13,
      name: 'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'For Renting',
    name: 'House 4',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House4,
    imageLg: House4Lg,
    country: 'House',
    number:'5 People are already asking for it,No one paid yet.',
    address: 'KIGOBE',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '3 MILLIONS/MONTH',
    agent: {
      image: Agent13,
      name: 'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'For Renting',
    name: 'House 5',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House5,
    imageLg: House5Lg,
    country: 'House',
    number:'5 People are already asking for it,No one paid yet.',
    address: 'GASEKEBUYE',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '4 MILLIONS FBU/MONTH',
    agent: {
      image: Agent13,
      name:'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'For Renting',
    name: 'House 6',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House6,
    imageLg: House6Lg,
    country: 'House',
    number:'5 People are already asking for it,No one paid yet.',
    address: 'GITEGA',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '4 MILLIONS FBU/MONTH',
    agent: {
      image: Agent13,
      name: 'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'For Buying',
    name: 'Car',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Cars',
    number:'10 People interested,Still available.',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '200 MILLIONS FBU',
    agent: {
      image: Agent13,
      name:'Ir. Gahungu Jean Kevin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'For Buying',
    name: 'Car',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Cars',
    number:'10 People interested,Still available.',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30 MILLIONS FBU',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'For Renting',
    name: 'Car',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Cars',
    number:'10 People interested,Still available.',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '4 MILLIONS FBU/DAY',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'For Renting',
    name: 'Car',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House7,
    imageLg: House7Lg,
    country: 'Cars',
    number:'10 People interested,Still available.',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '4 MILLIONS FBU/DAY',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'For Buying',
    name: 'Design',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House8,
    imageLg: House8Lg,
    country: 'Designs',
    number:'Available and waiting for you.',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'For Buying',
    name: 'Design',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House9,
    imageLg: House9Lg,
    country: 'Designs',
    number:'Available and waiting for you.',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name:'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'For Buying',
    name: 'Design',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House10,
    imageLg: House10Lg,
    country: 'Designs',
    number:'Available and waiting for you.',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'For Buying',
    name: 'Design',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House11,
    imageLg: House11Lg,
    country: 'Designs',
    number:'Available and waiting for you.',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name:'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type:'For Renting',
    name: 'Salle de Reception',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: House12,
    imageLg: House12Lg,
    country: 'Salles de Reception',
    number:'Ready for you,Still available.',
    address: 'MUTANGA',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '2 MILLIONS FBU(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'For Renting',
    name: 'Salle de Reception',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Salles de Reception',
    number:'Ready for you,Still available.',
    address: 'ROHERO',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '2 MILLIONS FBU(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name: 'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'For Renting',
    name: 'Salle de Reception',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Salles de Reception',
    number:'Ready for you,Still available.',
    address: '(DECOR)',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '2 MILLIONS FBU(NEGOCIABLE)',
    agent: {
      image: Agent13,
      name:'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'For Renting',
    name: 'Salle de Reception',
    description:
      'Discover a charming and spacious house featuring six rooms and three beautifully designed bathrooms. This elegant dwelling provides the perfect balance of comfort and style. With an open floor plan, the living spaces seamlessly flow together, creating an inviting atmosphere for both relaxation and entertaining. The thoughtfully crafted rooms boast a blend of modern sophistication and timeless charm, accentuated by ample natural light. The bathrooms serve as private retreats, exuding luxury with their exquisite fixtures and finishes. Step outside to find a meticulously landscaped garden, offering a serene backdrop for outdoor gatherings or quiet contemplation. This house is a true sanctuary, combining functionality with graceful living. Enjoy the harmonious fusion of elegance and comfort in this remarkable home, where lasting memories can be made.',
    image: Apartment6Lg,
    imageLg: Apartment6Lg,
    country: 'Maison de Passage',
    number:'12 People interested,Still available.',
    address: 'NGOZI',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '10000 FBU/NUIT',
    agent: {
      image: Agent13,
      name:'Mr. Etienne',
      phone: '0123 456 78910',
    },
  },
];

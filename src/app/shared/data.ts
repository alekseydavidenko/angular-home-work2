import { Iitem } from './Iitem';
import { Observable, of } from 'rxjs';

const _data: Iitem[] = [
  {
    img: '../../assets/res.jpg',
    address: 'Ukraine',
    phone: '+1285 968 685',
    type: 'Hotel',

    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/cloudy.png',
      water: 14,
      temperature: 20,
    },

    social_info: {
      title: 'Nam libero voluptatem',
      img: '../../assets/res.jpg',
      followers: 2580,
      following: 675
    },
  },
  {
    img: '../../assets/r1.jpg',
    address: 'Belarus',
    phone: '+1285 968 777',
    type: 'Fishing',

    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/cloudy.png',
      water: 18,
      temperature: 24,
    },

    social_info: {
      title: 'Nam libero voluptatem',
      img: '../../assets/r1.jpg',
      followers: 200,
      following: 10
    },
  },
  {
    img: '../../assets/r1.jpg',
    address: 'Poland',
    phone: '+2285 337-77',
    type: 'Tours',

    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/cloudy.png',
      water: 15,
      temperature: 17,
    },

    social_info: {
      title: 'Nam libero voluptatem',
      img: '../../assets/r1.jpg',
      followers: 10000,
      following: 505
    },
  },
  {
    img: '../../assets/res.jpg',
    address: 'Turkey',
    phone: '+7285 337-99',
    type: 'Weather',

    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/cloudy.png',
      water: 30,
      temperature: 24,
    },

    social_info: {
      title: 'Nam libero voluptatem',
      img: '../../assets/r1.jpg',
      followers: 8700,
      following: 300
    },
  },
];

export const data: Observable<Iitem[]> = of(_data);

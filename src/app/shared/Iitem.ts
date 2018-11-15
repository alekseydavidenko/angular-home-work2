export interface Iitem {
  img: string;
  address: string;
  phone: string;
  type: string;

  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number,
  };

  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  };
}

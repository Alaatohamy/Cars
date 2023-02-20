export interface User {
  id: number | null;
  name: string;
  email: string;
  img: string;
  points: number;
  badges: number;
  loved: number[];
}

export interface Car {
  id: number;
  name: string;
  img: string;
  capacity: number;
  type: string;
  state: string;
  price: number;
  recommendedPercentage: number;
  walkingKilos: number;
}

export interface AppState {
  user: User;
  cars: Car[];
}

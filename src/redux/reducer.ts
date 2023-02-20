import { AppAction, GET_CAR, GET_USER, UPDATE_CAR, UPDATE_USER } from "./actions";
import { AppState } from "./initStateTypes";

const initialState: AppState = {
  user: {
    id: null,
    name: "",
    email: "",
    img: "",
    points: 0,
    badges: 0,
    loved: []
  },
  cars: []
};

export const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    case GET_CAR:
      return { ...state, cars: [...state.cars, action.payload] };
    case UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        )
      };
    default:
      return state;
  }
};

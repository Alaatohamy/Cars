import { Car, User } from "./initStateTypes";

// User actions
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";

// Car actions
export const GET_CAR = "GET_CAR";
export const UPDATE_CAR = "UPDATE_CAR";

interface GetUserAction {
  type: typeof GET_USER;
  payload: User;
}

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: Partial<User>;
}

interface GetCarAction {
  type: typeof GET_CAR;
  payload: Car;
}

interface UpdateCarAction {
  type: typeof UPDATE_CAR;
  payload: Car;
}

export type AppAction =
  | GetUserAction
  | UpdateUserAction
  | GetCarAction
  | UpdateCarAction;


// User action creators
export const getUser = (user: User): GetUserAction => ({ type: GET_USER, payload: user });
export const updateUser = (user: Partial<User>): UpdateUserAction => ({ type: UPDATE_USER, payload: user });

// Car action creators
export const getCar = (car: Car): GetCarAction => ({ type: GET_CAR, payload: car });
export const updateCar = (car: Car): UpdateCarAction => ({ type: UPDATE_CAR, payload: car });

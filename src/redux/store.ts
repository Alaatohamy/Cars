import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
// ...

/* store = {
  user: { id, name, email, img, points, badges, loved: [id] },
  cars: [{
    id,
    name,
    img,
    capacity,
    type,
    state,
    price,
    recommendedPercentage,
    walkingKilos
  }],

*/
     
export const store = configureStore({reducer})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
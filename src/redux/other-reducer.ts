import { createReducer, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';

function isPending(action: AnyAction) {
  return action.type.endsWith('pending');
}
function isFulfilled(action: AnyAction) {
  return action.type.endsWith('fulfilled');
}
function isRejected(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const otherReducer = createReducer(initialState.other, builder => {
  builder
    .addMatcher(isPending, state => {
      state.loading = true;
      state.error = null;
    })
    .addMatcher(isFulfilled, state => {
      state.loading = false;
    })
    .addMatcher(isRejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
});

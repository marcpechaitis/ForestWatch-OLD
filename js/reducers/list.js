import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';
import params from '../config/params';

export type State = {
  list: string,
};

const initialState = {
  list: [
    'React Native Starter Kit',
    'Navigation Experimental',
    'NativeBase Easy Grid',
    'NativeBase',
    'CodePush',
    'Redux',
    params.ABOUT_US,
  ],
  selectedIndex: undefined,
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}

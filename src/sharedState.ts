import { Action, Reducer } from 'redux';
import { SET_INITIAL_STATE_ACTION_NAME, State, ISetInitialStateAction } from './constants';

let sharedState: State;

export function shareState<S extends State, A extends Action>(reducer: Reducer<S, A>): typeof reducer {
  return (state: S | undefined, action: A) => {
    if (action.type === SET_INITIAL_STATE_ACTION_NAME) {
      return (action as ISetInitialStateAction).initialState;
    }
    sharedState = reducer(state, action);
    return sharedState;
  };
};

export const getSharedState: () => State = () => {
  return sharedState;
};

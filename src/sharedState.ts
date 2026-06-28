import { Action, Reducer } from 'redux';
import { SET_INITIAL_STATE_ACTION_NAME, ISetInitialStateAction } from './constants';

export function shareState<S, A extends Action>(
  reducer: Reducer<S, A>
): Reducer<S, A | ISetInitialStateAction> {
  return (state: S | undefined, action: A | ISetInitialStateAction): S => {
    if (action.type === SET_INITIAL_STATE_ACTION_NAME) {
      return (action as ISetInitialStateAction).initialState as S;
    }

    return reducer(state, action as A);
  };
}

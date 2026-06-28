import { Action, Reducer } from 'redux';
import { SET_INITIAL_STATE_ACTION_NAME, State, ISetInitialStateAction } from './constants';

let sharedState: State;

export function shareState<S extends State, A extends Action>(
    reducer: Reducer<S, A>
): Reducer<S, A | ISetInitialStateAction> {
    return (state, action) => {
        if (isSetInitialStateAction(action)) {
            return action.initialState as S;
        }

        const nextState = reducer(state, action);
        sharedState = nextState;
        return nextState;
    };
};

function isSetInitialStateAction(
    action: Action
): action is ISetInitialStateAction {
    return action.type === SET_INITIAL_STATE_ACTION_NAME;
}

export const getSharedState: () => State = () => {
  return sharedState;
};

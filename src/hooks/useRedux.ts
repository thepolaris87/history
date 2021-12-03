import { CaseReducerActions, SliceCaseReducers } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../slices';

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export const useRootState = <T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) => {
    return useSelector(selector, equalityFn);
};

export const useActions = <U, V extends CaseReducerActions<SliceCaseReducers<U>>>(actionCreator: V) => {
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(actionCreator, dispatch), [dispatch, actionCreator]);
    return actions;
};
const useRedux = <T, U, V extends CaseReducerActions<SliceCaseReducers<U>>>(selector: (state: RootState) => T, actionCreator: V) => {
    const state = useRootState(selector);
    const actions = useActions(actionCreator);
    return [state, actions] as const;
};

export default useRedux;

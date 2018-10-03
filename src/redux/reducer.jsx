import Immutable from 'immutable';
/*=================
 reducer.jsx
 接收Action 并作出处理
 ==================*/
export const GetInitData = (state = Immutable.fromJS({data:{}}), action = {}) => {
    switch (action.type) {
        case 'DispatchInitData':
            return state.set('initData',action.data);
        case 'DispatchInitData2':
            return state.set('initData2',action.data);
        default:
            return state;
    }
};
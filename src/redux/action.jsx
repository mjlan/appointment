import fetch from 'isomorphic-fetch'
import {Tool} from '../Config/Tool.jsx'

/*=================
 action.jsx
 派发 action
 ==================*/

/**
 * 派发初始化数据
 * @param path
 * @param json
 * @returns {{type: string, path: *, data: *}}
 */
const dispatchInitData = (path, json) => {
    return {
        type: 'DispatchInitData',
        path: path,
        data: json
    }
};
const dispatchInitData2 = (path, json) => {
    return {
        type: 'DispatchInitData2',
        path: path,
        data: json
    }
};
/**
 * 初始化数据
 * @param path
 * @param data
 * @returns {Function}
 */
/* export const fetchInitData = (path, data) => {
    return dispatch => {
        Tool.fetchData_P(path, data, (responseData)=> {

            return dispatch(dispatchInitData(path, responseData));
        })
    };
}; */
export const fetchInitData = (path, data) => {
    return dispatch => dispatch(dispatchInitData(path, {
        info:{
            title:"appointment",
            name:"appointment",
            author:"辛鵬",
            license:"MIT",
        }
    }))
}
export const fetchInitData2 = (path, data) => {
    return dispatch => dispatch(dispatchInitData2(path, {
        info2:{
            title:"appointment",
            name:"appointment",
            author:"辛鵬",
            license:"MIT",
        }
    }))
}

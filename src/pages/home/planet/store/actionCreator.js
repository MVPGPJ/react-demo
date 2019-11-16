import { Planet_USER_Msg } from './actionType'

import http from 'utils/http'

// 同步星球用户数据更新
const getPlanetDataSync = (data) => {
    return {
        type: Planet_USER_Msg,
        data
    }
}

// 异步星球用户数据更新
const getPlanetDataAsync = (value) => {
    const url = http._OriginURL('/allusers')
    const data = value ? value : {
        sex: null,
        age_1: null,
        age_2: null,
        constellation: null,
        size: 50
    }

    return async (dispatch)=>{
        let result = await http.post(url, data)
        dispatch(getPlanetDataSync(result.userlist))
    }
}

export {
    getPlanetDataSync,
    getPlanetDataAsync
}
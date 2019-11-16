
import http from 'utils/http.js'
const asyncGetMyFocusListData = () => {
    return async (dispatch) => {
        const myFocus = await http.get('/getfocus', {});
        if(myFocus&&myFocus.focus){
            dispatch({
                type: 'getMyFocus',
                payload: myFocus.focus
            })
        }
        // setTimeout(() => {
        //     dispatch({
        //         type: "getMyFocus",
        //         payload: [{
        //             "id": 1001,
        //             "userName": "honey",
        //             "head": "/head/0/1.jpg"
        //         },
        //         {
        //             "id": 1002,
        //             "userName": "lily",
        //             "head": "/head/0/1.jpg"
        //         }]
        //     })
        // }, 1000);
    }
}
const asyncGetFocusMeList = () => {
    return async (dispatch) => {
        const focusMe = await http.get('/focusme', {});
        if(focusMe&&focusMe.focus){
            dispatch({
                type: 'getFocusMe',
                payload: focusMe.focus
            })
        }
        // fetch("https://api.zhaoyx0907.com/focusme").then((response) => {
        //     return response.json
        // }).then((ret) => {
        //     dispatch({
        //         type: "getFocusMe",
        //         payload: ret
        //     })
        // })
        // setTimeout(() => {
        //     dispatch({
        //         type: "getFocusMe",
        //         payload: [{
        //             "id": 1001,
        //             "userName": "关注我的",
        //             "head": "/head/0/1.jpg"
        //         },
        //         {
        //             "id": 1002,
        //             "userName": "关注我的",
        //             "head": "/head/0/1.jpg"
        //         }]
        //     })
        // }, 1000);
    }
}
const asyncGetAll = () => {
    return async (dispatch) => {
        try {
            const myFocus = await http.get('/getfocus', {});
            const focusMe = await http.get('/focusme', {});
            // http.all([myFocus, FocusMe])
            //     .then(axios.spread(function (acct, perms) {
            //         dispatch({
            //             type: "getAll",
            //             payload: {myFocusList:  acct, focusMeList:perms }
            //         })
            //     }));
            console.log(myFocus, 1111)
            console.log(focusMe, 33333333)
            if (myFocus && focusMe && myFocus.focus && focusMe.focus)
                dispatch({
                    type: "getAll",
                    payload: { myFocusList: myFocus.focus, focusMeList: focusMe.focus }
                })
        } catch (error) {
            console.error(error);
        }

    }
}
const loadTestData = () => {
    return (dispatch) => {
        setTimeout(() => {
            console.log(0)
            dispatch(
                {
                    type: "getAll",
                    payload: {
                        myFocusList: [{
                            "id": 1001,
                            "userName": "张三 1",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1002,
                            "userName": "张三 2",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1003,
                            "userName": "张三 3",
                            "head": "/head/0/1.jpg"
                        }],
                        focusMeList: []
                        // focusMeList: [{
                        //     "id": 1001,
                        //     "userName": "TOM 1",
                        //     "head": "/head/0/1.jpg"
                        // },
                        // {
                        //     "id": 1002,
                        //     "userName": "LILY 2",
                        //     "head": "/head/0/1.jpg"
                        // },
                        // {
                        //     "id": 1003,
                        //     "userName": "HanMeimei 3",
                        //     "head": "/head/0/1.jpg"
                        // },
                        // {
                        //     "id": 1004,
                        //     "userName": "Lilei 4",
                        //     "head": "/head/0/1.jpg"
                        // }],
                    }
                }
            )

        }, 1000)
    }
}
export {
    asyncGetMyFocusListData,
    asyncGetFocusMeList,
    asyncGetAll,
    loadTestData
}
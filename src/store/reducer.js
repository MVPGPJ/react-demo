import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'
import { reducer as publish } from 'pages/publish/reducer'
import { reducer as chat}  from 'pages/chat/ChatList/'
import {reducer as focus} from 'pages/chat/focusList/'
import {reducer as square} from 'pages/square/'
import { reducer as mine } from 'pages/mine/'
import {reducer as socket} from 'components/socket/'
import {reducer as planet} from 'pages/home/planet/store/index'

// 添加 reducer combin
const reducer = combineReducers({
  publish,
  chat,
  focus,
  square,
  mine,
  socket,
  account,
  planet,
})
// 添加 reducer combin 

export default reducer
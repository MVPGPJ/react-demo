import React, { Component } from 'react';

import { AddFriend } from './seach/'
import { Friend as FriendMsg} from './friendMsg/'
import {
    Route,
} from 'react-router-dom'

class Friend extends Component {
    render() {
        return (
            <>
                {/* <Route path="/mine/friend" component={ AddFriend }></Route>
                <Route path="/mine/friend/:userId" component={ FriendMsg }></Route> */}
            </>
        );
    }
}

export default Friend;

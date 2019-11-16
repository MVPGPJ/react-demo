import React from 'react'
import PageGuard from './PageGuard'
 
const CheckLogin = (Comp) => (props)=>{
    return (
        <PageGuard>
            <Comp {...props}></Comp>
        </PageGuard>
    )
}

export default CheckLogin
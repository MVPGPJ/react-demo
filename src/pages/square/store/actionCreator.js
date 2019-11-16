export const changeTheme = (payload)=> {
    if(payload === "dark"){
        return {type:'dark'}
    }else{
        return {type:'light'}
    }
}
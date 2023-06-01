export default ()=>{
    let itemName = 'token_info';
    let token_info_str = localStorage.getItem(itemName)
    if(!token_info_str){
        return false
    }
    try{
        let token_info = JSON.parse(token_info_str)
        let now = new Date().getTime()
    }
    catch(err){
        console.log(err)
        return false
    }
}
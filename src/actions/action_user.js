export const add_user =(name,email,phone,city)=>({type:'ADD_USER', payload:{name,email,phone,city}});
export const delete_user =(id)=>({type:'DELETE_USER', payload:id});
export const edit_user =({user})=>({type:'EDIT_USER', payload:{user}});
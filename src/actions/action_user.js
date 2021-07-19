export const add_user =(name,email)=>({type:'ADD_USER', payload:{name,email}});
export const delete_user =(id)=>({type:'DELETE_USER', payload:id});
export const edit_user =(user)=>({type:'EDIT_USER', payload:user});
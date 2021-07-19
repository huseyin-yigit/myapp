export const add_customer =(name,email)=>({type:'ADD_CUSTOMER', payload:{name,email}});
export const delete_customer =(id)=>({type:'DELETE_CUSTOMER', payload:id});
export const edit_customer =(customer)=>({type:'EDIT_CUSTOMER', payload:customer});
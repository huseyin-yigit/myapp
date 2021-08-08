export const add_challenge =()=>({type:'ADD_CHALLENGE'});
export const delete_challenge =(index)=>({type:'DELETE_CHALLENGE', payload:index});
export const update_challenge =(index,name,value)=>({type:'UPDATE_CHALLENGE', payload:{index,name,value}});
export const add_activitie =(name,email)=>({type:'ADD_ACTIVITIE', payload:{name,email}});
export const delete_activitie =(id)=>({type:'DELETE_ACTIVITIE', payload:id});
export const increase_counter =()=>({type:'INCREASE_COUNTER'});
export const decrease_counter =()=>({type:'DECREASE_COUNTER'});
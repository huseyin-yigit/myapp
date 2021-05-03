export const add_todo =(title,text)=>({type:'ADD_TODO', payload:{title,text}});
export const delete_todo =(id)=>({type:'DELETE_TODO', payload:id});
export const edit_todo =(todo)=>({type:'EDIT_TODO', payload:todo});

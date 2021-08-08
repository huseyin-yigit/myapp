
const initialState = {
        challenges:[{name:'Adam', email:'Bay'},{name:'Cemil', email:'Selcuk'}],
        activities:[],
        counter:0

  };

  const narrtative=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CHALLENGE':
            console.log('ADD_CHALLENGE')
            return{...state,
                challenges:[...state.challenges,
                        {name:'',
                        email:''
                         }
                ]
            }
        case 'UPDATE_CHALLENGE':
           // console.log('UPDATE_CHALLENGE')
                 const newEdit = {
                     [action.payload.name] : action.payload.value
                } 
                  let newchallenges = state.challenges.map((challenge,index)=>(index ===action.payload.index ?
                     {...challenge,[action.payload.name] : action.payload.value} : challenge))
                 // console.log('newchallenges',newchallenges)
                  return{
                    ...state,challenges:newchallenges // replacing state
        }        
        case 'DELETE_CHALLENGE':
            //console.log('DELETE_CHALLENGE action',action.payload)
           let newchallenge = state.challenges.filter((challenge,index)=> (index !==action.payload))  
            //console.log('newchallenges',newchallenges)
            return{
                ...state,challenges:newchallenge
            }
        case 'ADD_ACTIVITIE':
            return{
                
            }
        case 'DELETE_ACTIVITIE':
            return{
                
            }
        case 'INCREASE_COUNTER':
            //console.log('INCREASE_COUNTER')
            return{...state,
                counter:state.counter+1
            }
        case 'DECREASE_COUNTER':
            //console.log('DECREASE_COUNTER')
            return{...state,
                counter:state.counter-1
            }
        default:  
        return state;
    }
}

export default narrtative

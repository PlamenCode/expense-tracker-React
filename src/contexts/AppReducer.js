export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION': 
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)
            };
        case 'ADD_TRNSACTION': 
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ]
            };
        case 'UPDATE_AUTH':
            return {
                ...state,
                authenticate: action.payload
            };
        case 'RESET-STATE':
            return {
                ...state,
                transactions: []
            };

        default: return state ;
    }
}
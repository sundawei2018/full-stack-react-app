const ADD_A_GUN = 'add';
const SUB_A_GUN = 'substract';

export function counter(state=0, action) {
    switch(action.type) {
        case ADD_A_GUN:
            return state + 1
        case SUB_A_GUN:
            return state - 1
        default:
            return 10 
    }
}

export function addGun() {
    return {type: ADD_A_GUN}
}

export function removeGun() {
    return {type: SUB_A_GUN}
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}
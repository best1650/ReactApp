// Javascript library import
const redux = require('redux');
const BUY_CAKE = 'BUY_CAKE';

// Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

// (previousState, action) => newState.
const initialState = {
    numOfCakes: 10
}

// Store creation.
const store = redux.createStore(
    // Reducer function inside the store creation.
    (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                numOfCakes: state.numOfCakes - 1
            }

            default: return state
        }
    }
);

// Access to the current state.
console.log('Initial state', store.getState());

// Reigster listener.
const unsubscribe = store.subscribe(
    () => {
        console.log('Updated state:', store.getState())
    }
);

// Whenever a new action is dispatched by the store, the subscription event will be triggered.
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// Task complete.
unsubscribe();

function todos (state = [], action) {
    if (action.type === 'ADD_TODO') {
      return state.concat([action.todo])
    }
  
    return state
}

function createStore () {

    let state
    let listener = []

    const getState = () => state

    const subscribe = (listener) => {
        listener.push(listener)
        return () => {
            listeners = listener.filter((l) => l !== listener)
        }
    } 

    return {
        getState,
        subscribe
    }
}
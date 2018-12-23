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
const reducer = (state, action) => {
    if (state === undefined) {
        return {
            count: 0
        }
    }

    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + 1
        };
        case 'DECREMENT': return {
            count: state.count - 1
        };
        case 'RESET': return {
            count: 0
        }
        default: return state;
    }
}

export default reducer;
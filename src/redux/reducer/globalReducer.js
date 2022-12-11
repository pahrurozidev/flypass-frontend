import { actionType } from "./globalActionType";

const globalState = {
    counter: 10,
    showSidebar: false,
}

const rootReducer = (state = globalState, action) => {
    if (action.type === actionType.PLUS_COUNTER) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === actionType.MIN_COUNTER) {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === actionType.SHOW_SIDEBAR) {
        return {
            ...state,
            showSidebar: true
        }
    } else if (action.type === actionType.HIDE_SIDEBAR) {
        return {
            ...state,
            showSidebar: false
        }
    } else {
        return state;
    }
}

export default rootReducer;
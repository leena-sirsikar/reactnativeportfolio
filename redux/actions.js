export const ADD_USER = 'ADD_USER'
export const USER_FAILED = 'USER_FAILED'

export const ADD_HISTORY = 'ADD_HISTORY'
export const HISTORY_FAILED = 'HISTORY_FAILED'
export const SHOW_HISTORY = 'SHOW_HISTORY'

export const addHistory = history => ({
    type: ADD_HISTORY,
    payload: history
});



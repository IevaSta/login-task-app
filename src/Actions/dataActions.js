import { login_const, logout_const } from "../Constants/dataConstants";

export function login_action(newData) {
    return {
        type: login_const,
        payload: newData
    }
}

export function logout_action(loggedIn) {
    return {
        type: logout_const,
        payload: loggedIn
    }
}
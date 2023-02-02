import { loggedIn_const, login_const, logout_const } from "../Constants/dataConstants";

export function login_action(newData) {
    return {
        type: login_const,
        payload: newData
    }
}

export function logout_action() {
    return {
        type: logout_const,
    }
}

export function loggedIn_action() {
    return {
        type: loggedIn_const,
    }
}
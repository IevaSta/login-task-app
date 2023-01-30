import { login_const } from "../Constants/dataConstants";

export function login_action(newData) {
    return {
        type: login_const,
        payload: newData
    }
}
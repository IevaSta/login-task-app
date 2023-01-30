import { login_const, logout_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(_, action) {

    let newState = [{}, []];

    let data = JSON.parse(localStorage.getItem('seemsneatData')) || [];

    switch (action.type) {
        case login_const:
            if (data) {
                if (!data.some(u => u.email === action.payload.email)) {
                    newState[0] = { ...action.payload, pass: '***', loggedIn: true };
                    data = [...data, newState[0]];
                    updateDataInLocalStorage(data);
                }
            }
            break;

        case logout_const:
            if (data.some(u => u.loggedIn === action.payload)) {
                localStorage.removeItem('seemsneatData')
            }
            break;

        default:
    }
    return newState;
}

export default data_reducer;
import users from "../Accounts/accounts";
import { loggedIn_const, login_const, logout_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(_, action) {

    let newState = [{}, []];

    let data = JSON.parse(localStorage.getItem('seemsneatData')) || {};

    switch (action.type) {
        case login_const:
            const user = users.filter(u => u.email === 'frontend@isawesome.com')[0];

            if (user && user.email === action.payload.email && user.pass === action.payload.pass) {
                newState[0] = { ...action.payload };
                delete newState[0].pass;
                data = { ...data, ...newState[0] };
                updateDataInLocalStorage(data);
            } else {
                newState[1] = ['Email or pass is not valid. Try again.'];
            }
            break;

        case logout_const:
            localStorage.removeItem('seemsneatData');
            newState[0] = {};
            break;

        case loggedIn_const:
            newState[0] = data;
            break;

        default:
    }
    return newState;
}

export default data_reducer;
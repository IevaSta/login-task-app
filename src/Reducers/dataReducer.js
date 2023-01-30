import { login_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(_, action) {

    let newState = [{}, []];

    let accInfo = {
        email: 'frontend@isawesome.com',
        pass: 'cool'
    };

    let data = JSON.parse(localStorage.getItem('seemsneatData')) || [];
    switch (action.type) {
        case login_const:
            if (data) {
                if (accInfo.email === action.payload.email || accInfo.pass === action.payload.email) {
                    newState[0] = { ...action.payload };
                    data = [...data, newState[0]];
                    updateDataInLocalStorage(data);
                } else {
                    newState[1] = ['Toks vartotojas neegzistuoja.'];
                }
            }
            break;
        default:
    }
    return newState;
}

export default data_reducer;
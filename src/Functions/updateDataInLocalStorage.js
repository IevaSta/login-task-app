function updateDataInLocalStorage(data) {
    localStorage.setItem('seemsneatData', JSON.stringify(data));
}

export default updateDataInLocalStorage;
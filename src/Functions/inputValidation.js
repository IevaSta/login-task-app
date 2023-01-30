function inputValidation(type, input) {

    input = input.trim();

    let payload = {
        value: input,
        error: false,
        notification: ''
    };

    switch (type) {
        case 'email':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Email input is empty.' };
                break;
            }

            payload = { ...payload, value: input };
            break;

        case 'pass':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Pass input is empty.' };
                break;
            }

            payload = { ...payload, value: input };
            break;
        default:
    }
    return payload;
}

export default inputValidation;
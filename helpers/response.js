const Response = {};

const responseObject = (code, message, payload)=>{
    return {
        responseCode: code,
        responseText: message || 'Error',
        payload,
    };
};

Response.errorResponse = (res, message, payload) => {
    if (typeof(message) === 'object') message = message.message;
    return res ?
        res.status(400).json(responseObject(0, message, payload)) :
        responseObject(0, message, payload);
};

Response.successResponse = (res, payload, message = 'ok') => {
    return res ?
        res.status(200).json(responseObject(1, 'ok', payload)):
        responseObject(1, message, payload);
};

Response.unauthenticatedResponse = (res, payload, message = 'Unauthenticated') => {
    return res ?
        res.status(401).json(responseObject(0, 'Unauthenticated', payload)):
        responseObject(0, message, payload);
};

Response.forbiddenResponse = (res, payload) => {
    return res ?
        res.status(403).json(responseObject(0, 'Error', payload)):
        responseObject(0, message, payload);
};

Response.validationErrorResponse = (res, errors) => {
    let messages = '';

    if (!Array.isArray(errors)) {
        return responseObject(0, 'Validation Error', messages);
    }

    errors.forEach(function(item) {
        messages += (item.msg || '') + '|';
    });

    return res.status(400).json(
        responseObject(0, 'Validation Error', messages),
    );
};


module.exports = Response;

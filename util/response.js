class Response {
    static success(data){
        return {code: 0, data};
    }

    static failed(message){
        return {code: -1, message};
    }
}

module.exports = Response;
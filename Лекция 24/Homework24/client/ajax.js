function ajax({ url, method, data, success, error = () => { } }) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = () => {
        const response =
            typeof xhttp.response === "string"
                ? JSON.parse(xhttp.response)
                : xhttp.response;
        console.log(response);
        success(response, xhttp.status);
    };

    xhttp.onerror = error.bind(xhttp);

    xhttp.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
        }
    };

    xhttp.open(method, url);

    method.toLowerCase() === "post"
        ? xhttp.send(JSON.stringify(data))
        : xhttp.send();
}
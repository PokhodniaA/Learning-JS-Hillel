// ---------URL---------------

// new URL(url, [base]):
//      url – полный URL-адрес или только путь, если указан второй параметр,
//      base – необязательный «базовый» URL: если указан и аргумент url содержит только путь, то адрес будет создан относительно него (пример ниже).

let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

// Шпаргалка по компонентам URL(url1.href):
//      href это полный URL-адрес, то же самое, что url.toString()
//      protocol – протокол, заканчивается символом двоеточия :
//      search строка параметров, начинается с вопросительного знака ?
//      hash начинается с символа #
//      также есть свойства user и password, если используется HTTP-аутентификация: http://login:password@site.com (не нарисованы сверху, так как редко используются).

url.searchParams // -- мы хотим создать URL-адрес с заданными параметрами, например, https://google.com/search?query=JavaScript.Но параметры должны быть правильно закодированы. Так что для этого и используем

// Он предоставляет удобные методы для работы с параметрами:

//      append(name, value) – добавить параметр по имени,
//      delete(name) – удалить параметр по имени,
//      get(name) – получить параметр по имени,
//      getAll(name) – получить все параметры с одинаковым именем name (такое возможно, например: ?user=John&user=Pete),
//      has(name) – проверить наличие параметра по имени,
//      set(name, value) – задать/заменить параметр,
//      sort() – отсортировать параметры по имени, используется редко,
//      …и является перебираемым, аналогично Map.


// --------------formData---------------


// Объекты FormData помогут для отправки HTML-форм: с файлами и без, с дополнительными полями и так далее. Объекты FormData

let formData = new FormData([form]); // --Если передать в конструктор элемент HTML-формы form, то создаваемый объект автоматически прочитает из неё поля.

// С помощью указанных ниже методов мы можем изменять поля в объекте FormData:
formData.append(name, value) //– добавляет к объекту поле с именем name и значением value,
formData.append(name, blob, fileName) //– добавляет поле, как будто в форме имеется элемент <input type="file">, третий аргумент fileName устанавливает имя файла (не имя поля формы), как будто это имя из файловой системы пользователя,
formData.delete(name) //– удаляет поле с заданным именем name,
formData.get(name) //– получает значение поля с именем name,
formData.has(name) //– если существует поле с именем name, то возвращает true, иначе false
formData.set(name, value),
    formData.set(name, blob, fileName) // -- тоже что и append, но не дублирует параметры 


//Поля объекта formData можно перебирать, используя цикл for..of

// ----------------XMLHttpRequest(устаревший, лучше использовать Fetch)------------
// 1.Создать XMLHttpRequest.
let xhr = new XMLHttpRequest(); // у конструктора нет аргументов

// 2.Инициализировать его.
xhr.open(method, URL, [async, user, password]) //-- инициализация

// Этот метод обычно вызывается сразу после new XMLHttpRequest. В него передаются основные параметры запроса:

// method – HTTP-метод. Обычно это "GET" или "POST".
// URL – URL, куда отправляется запрос: строка, может быть и объект URL.
// async – если указать false, тогда запрос будет выполнен синхронно, это мы рассмотрим чуть позже.
// user, password – логин и пароль для базовой HTTP-авторизации (если требуется).

// 3.Послать запрос.
xhr.send([body]) // послать запрос

// 4.Слушать события на xhr, чтобы получить ответ.(xhr.onload)

// Три наиболее используемых события:
// load – происходит, когда получен какой-либо ответ, включая ответы с HTTP-ошибкой, например 404.
// error – когда запрос не может быть выполнен, например, нет соединения или невалидный URL.
// progress – происходит периодически во время загрузки ответа, сообщает о прогрессе.
// =======
// После ответа сервера мы можем получить результат запроса в следующих свойствах xhr:

status // -Код состояния HTTP (число): 200, 404, 403 и так далее, может быть 0 в случае, если ошибка не связана с HTTP.

statusText // -Сообщение о состоянии ответа HTTP (строка): обычно OK для 200, Not Found для 404, Forbidden для 403, и так далее.

response //(в старом коде может встречаться как responseText) Тело ответа сервера.

xhr.responseType // - тип ответа

// "" (по умолчанию) – строка,
// "text" – строка,
// "arraybuffer" – ArrayBuffer (для бинарных данных, смотрите в ArrayBuffer, бинарные массивы),
// "blob" – Blob (для бинарных данных, смотрите в Blob),
// "document" – XML-документ (может использовать XPath и другие XML-методы),
// "json" – JSON (парсится автоматически).

xhr.abort(); // завершить запрос

setRequestHeader(name, value) //Устанавливает заголовок запроса с именем name и значением value.  (xhr.setRequestHeader('Content-Type', 'application/json');)

getResponseHeader(name) //Возвращает значение заголовка ответа name (кроме Set-Cookie и Set-Cookie2).  (xhr.getResponseHeader('Content-Type'))

getAllResponseHeaders() // Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2


// -------------------Server Sent Events-----------------

let eventSource = new EventSource(url); // --Браузер установит соединение с url и будет поддерживать его открытым, ожидая события.

let source = new EventSource("https://another-site.com/events", {
    withCredentials: true
});  //Чтобы послать авторизационные данные, следует установить дополнительную опцию withCredentials:

// Методы:
eventSource.close() // перкратить соединение

// Свойства объекта EventSource:
readyState //Текущее состояние подключения: EventSource.CONNECTING (=0), EventSource.OPEN (=1) или EventSource.CLOSED (=2).

lastEventId //id последнего полученного сообщения. При переподключении браузер посылает его в заголовке Last-Event-ID.

// События:
message //Сообщение получено, переданные данные записаны в event.data.

open //Соединение установлено.

error //В случае ошибки, включая как потерю соединения, так и другие ошибки в нём. Мы можем обратиться к свойству readyState, чтобы проверить, происходит ли переподключение.



// -----------------try..catch----------------

try {

    // код...

} catch (err) {

    // обработка ошибки

}

// Сначала выполняется код внутри блока try {...}.
// Если в нём нет ошибок, то блок catch(err) игнорируется: выполнение доходит до конца try и потом далее, полностью пропуская catch.
// Если же в нём возникает ошибка, то выполнение try прерывается, и поток управления переходит в начало catch(err). Переменная err (можно использовать любое имя) содержит объект ошибки с подробной информацией о произошедшем

// Конструкция try..catch может содержать ещё одну секцию: finally.

try {
    // ... пробуем выполнить код...
} catch (e) {
    // ... обрабатываем ошибки .. .
} finally {
    // ... выполняем всегда ...
}

// Объекты ошибок содержат следующие свойства:

// message – понятное человеку сообщение.
// name – строка с именем ошибки (имя конструктора ошибки).
// stack (нестандартное, но хорошо поддерживается) – стек на момент ошибки.

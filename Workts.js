var name = self.name;
self.onmessage = function (event) {
    var book = event.data;
    book.id = 3;
    self.postMessage(book);
}


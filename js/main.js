const baseURL = "https://db.ygoprodeck.com/api/v5/cardinfo.php?";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
         cb(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", baseURL + type);
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.set_name + "</p>";
        });
    });
}
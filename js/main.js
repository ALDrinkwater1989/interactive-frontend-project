const baseURL = "https://db.ygoprodeck.com/api/v5/";

function getData(type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", baseURL + type);
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      cb(JSON.parse(this.responseText));
    }
  });
}


var enterPress = document.getElementById(cardName);
enterPress.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getName();

  }
});

function getName(){
  var name = document.getElementById("cardName");
  var type = document.getElementById("typeSelected");
  var race = document.getElementById("race");
  var attribute = document.getElementById("attribute");

  if (type == "" && race == "" && attribute == ""){
    writeToDocument(`cardinfo.php?name=${name}`);
  }
  else if (type == "" && attribute == ""){
    writeToDocument(`cardinfo.php?name=${name}&race=${race}`);
  }
  else if(race == "" && attribute == ""){
    writeToDocument(`cardinfo.php?name=${name}&type=${type}`);
  }
  else if(race == "" && race == ""){
    writeToDocument(`cardinfo.php?name=${name}&attribute=${attribute}`);
  }
  else if (type == ""){
    writeToDocument(`cardinfo.php?name=${name}&race=${race}&attribute=${attribute}`);
  }
  else if(race == ""){
    writeToDocument(`cardinfo.php?name=${name}&type=${type}&attribute=${attribute}`);
  }
  else if(attribute == ""){
    writeToDocument(`cardinfo.php?name=${name}&race=${race}&type=${type}`);
  }
  else{
    writeToDocument(`cardinfo.php?name=${name}&race=${race}&attribute=${attribute}&type=${type}`);
  }
}

function writeToDocument(type) {

  getData(type, function (data) {
    console.dir(data);
  
  });
}
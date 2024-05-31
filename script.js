function sendData(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var ghibli = document.querySelector("input[name=ghibli]:checked").value;
    var pesan = document.getElementById("pesan").value;
    var deskripsi = document.getElementById("deskripsi").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
  
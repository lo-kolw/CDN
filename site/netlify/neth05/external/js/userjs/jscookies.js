var inputdname = document.getElementById("namein").value;
var inputdsubname = document.getElementById("subnamein").value;
var inputdmail = document.getElementById("mailin").value;
var inputdphone = document.getElementById("phonein").value;

var cookielocalstorage = function() {
localStorage.setItem("inputnameiis",inputdname)
localStorage.setItem("inputsubnameiis",inputdsubname)
localStorage.setItem("inputmailiis",inputdmail)
localStorage.setItem("inputiis",inputdphone)
}
cookielocalstorage();

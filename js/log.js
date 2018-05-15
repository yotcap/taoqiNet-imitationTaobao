var logId = document.getElementById("log");
var regId = document.getElementById("reg");
function logReg(){
	logId.style.display = "none";
	regId.style.display = "block";
}
function regLog(){
	regId.style.display = "none";
	logId.style.display = "block";
}
function forgetAccount(){
	alert("新注册一个吧，没有好办法");
}
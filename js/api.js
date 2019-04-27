function teleprofilepic(pic, num){
	let api = 'https://cors.io/?http://142.93.233.141:33507/api/getprofile?profile='+pic;
	let request = new XMLHttpRequest();
	request.open('GET', api);
	request.onload = function(){
		let file = JSON.parse(request.responseText);
		var imgReplace = document.getElementsByClassName("card-img-top")[parseInt(num)];
    	imgReplace.src = file.pic;
	}
	request.send();
};

function gitprofilepic(pic, num){
	let api = 'https://cors.io/?http://142.93.233.141:33507/api/gitprofile?profile='+pic;
	let request = new XMLHttpRequest();
	request.open('GET', api);
	request.onload = function(){
		let file = JSON.parse(request.responseText);
		var imgReplace = document.getElementsByClassName("card-img-top")[parseInt(num)];
    	imgReplace.src = file.pic;
	}
	request.send();
};

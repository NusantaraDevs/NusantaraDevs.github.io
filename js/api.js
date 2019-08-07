function teleprofilepic(pic, num){
	let api = 'https://api.allorigins.win/raw?url=http://107.172.29.149:33507/api/getprofile?profile='+pic;
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
	let api = 'https://api.allorigins.win/raw?url=http://107.172.29.149:33507/api/gitprofile?profile='+pic;
	let request = new XMLHttpRequest();
	request.open('GET', api);
	request.onload = function(){
		let file = JSON.parse(request.responseText);
		var imgReplace = document.getElementsByClassName("card-img-top")[parseInt(num)];
    	imgReplace.src = file.pic;
	}
	request.send();
};

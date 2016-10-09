document.getElementById('close').onclick = function(){
	console.log("ok");
	document.getElementsByClassName('shopping-cart')[0].style.opacity = '0';
	document.getElementsByClassName('shopping-cart')[0].style.visibility = 'hidden';
	document.getElementsByClassName('shopping-cart-result')[0].style.opacity = '0';
	document.getElementsByClassName('shopping-cart-result')[0].style.visibility = 'hidden';
	document.getElementById('first-page').style.background = 'none';
	document.getElementById('first-page').style.opacity = '1';
};
function final(){
	document.getElementsByClassName('shopping-cart')[0].style.opacity = '0';
	document.getElementsByClassName('shopping-cart')[0].style.visibility = 'hidden';
	document.getElementsByClassName('shopping-cart-result')[0].style.opacity = '1';
	document.getElementsByClassName('shopping-cart-result')[0].style.visibility = 'visible';
	document.getElementById('first-page').style.background = 'black';
	document.getElementById('first-page').style.opacity = '0.45';
};

document.getElementById('big-close').onclick = function(){
	document.getElementsByClassName('shopping-cart-result')[0].style.opacity = '0';
	document.getElementsByClassName('shopping-cart-result')[0].style.visibility = 'hidden';
	document.getElementById('first-page').style.background = 'none';
	document.getElementById('first-page').style.opacity = '1';
};

document.getElementsByClassName('card-logo')[0].onclick = function(){
	document.getElementsByClassName('shopping-cart')[0].style.opacity = '1';
	document.getElementsByClassName('shopping-cart')[0].style.visibility = 'visible';
	document.getElementById('first-page').style.background = 'black';
	document.getElementById('first-page').style.opacity = '0.45';
};
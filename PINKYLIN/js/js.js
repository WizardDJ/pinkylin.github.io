// alert("Hola Mundo");

var section = new Array(6);
section[0]="home0";
section[1]="home1";
section[2]="home2";
section[3]="home3";
section[4]="home4";
section[5]="home5";
section[5]="home6";

var search;
var bkgrBody;
var bkgrMenu;
var show;

// navegacion desde los botones next y prev
function displaySection(nav){

	for (var i=0; i<6; i++){
		search = document.getElementById(section[i]);
		show = search.style.display;

	if(show == "block"){
		search.style.display = "none";

		if (nav== "next"){
			i++;
			if(i>4) i=0;
		}

		if (nav == "prev"){
		i--;
		if (i<0) i=4;
		}

		search = document.getElementById(section[i]);
		search.style.display = "block";
		break;
		}
	}
	setColor(i);
}
// Cambiar color del background del body y del menu
function setColor(i){
	if (section[i] == "home"){
		// bkgrBody = "#233d58";
		// bkgrMenu = "#233d58";
	}else{
		// bkgrBody = "#f1f1f1";
		// bkgrMenu = "#29abe2";
	}

		search = document.getElementById(section[i]);
		search.style.background = bkgrBody;
		var menu = document.getElementsByTagName("header")[0];
		menu.style.background = bkgrMenu;
}
// navegacion desde el menu nav
function navSection(nav){
	for (var i=0; i<6; i++){
		search = document.getElementById(section[i]);
		search.style.display = "none";
		
		if(section[i] == nav){
			search.style.display = "block";
			setColor(i);
		}
	}
}
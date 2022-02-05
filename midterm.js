var formValidity;

function formValidate(evt){
	evt.preventDefault();
	formValidity=true
	if(formValidity===true) {
		document.getElementById("errorText").innerHTML="";
		document.getElementById("errorText").style.display="none";
		document.getElementByTagName("form")[0].submit();
	}else{
		document.getElementById("errorText").innerHTML="Please fix problem.";
		document.getElementById("errorText"),stryle.display="block";
		scroll(0,0);
		}
		
	}
}

function copyEntryLevel1() {
    var level1InputElements = document.querySelectorAll("#level1 input");
    var level2InputElements = document.querySelectorAll("#level2 input");
    if (document.getElementById("sameEntry").checked) {
        for (var i = 0; i < level1InputElements.length; i++) {
            level2InputElements[i + 1].value = level1InputElements[i].value;
        }
        document.querySelector("#level2 select").value = document.querySelector("#level1 select").value;
        }else {
            for (var i = 0; i < level1InputElements.length; i++) {
                level2InputElements[i + i].value = "";
            }
        document.querySelector("#level2 select").selectedIndex = -1;
        }
    }
	
function createEventListeners() {
    var same = document.getElementById("sameEntry");
    if (same.addEventListener) {
        same.addEventListener("click", copyEntryLevel1, false);
    } else if (same.attachEvent) {
        same.attachEvent("onclick", copyEntryLevel1);
    }
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}
function createEventListeners(){
	var form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", validateForm, false);
	var same= document.getElementById("sameEntry");
	same.addEventListener("click", copyEntryLevel1, false);
}
function SelectDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}
function setUpPage() {
    SelectDefault();
    createEventListeners();
    copyEntryLevel1();
   
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
  
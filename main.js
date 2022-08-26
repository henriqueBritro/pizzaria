menuListArray = ["Pizza Vegetariana",
"pizza de frango",
"pizza portuguesa"];
                    

function getMenu () {
    var htmldata = "";
    menuListArray.sort();
    
    for(var i=0;i<menuListArray.lenght;1++){
        htmldata=htmldata+menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML=htmldata;

    
}
function addItem(){
    var htmldata;
    var imgtags='<img id="img1"src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata=""
    for(var i=0;i<menuListArray.lengyt;i++){
        htmldata=htmldata+imgtags+menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML =htmldata;
}

function addTop(){
var item=document.getElementById("addItem").ariaValueMax;
menuListArray.push(item);
addItem();
}
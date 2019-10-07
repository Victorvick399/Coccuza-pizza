 var pizzTopp = parseInt(document.getElementById("#ptoppings").value);
 var pizzCrust = parseInt(document.getElementById("#pcrust").value);
 var pizzSiz = parseInt(document.getElementById("#psize").value)
 var pizzNumb = parseInt(document.getElementById("#pnumber").value);


 function getTotal(){
    return ((pizzSiz+ pizzCrust + pizzTopp)*pizzNumb);
 }

$(document).ready(function(){    
    $("#checkout").click(function(){         
        alert("getTotal");      
    });
});
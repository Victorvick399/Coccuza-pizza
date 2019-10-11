$(document).ready(function(){
$("#checkout").click(function (event) {
    event.preventDefault();
    var onePizza = function add(pizzSize , pizzCrust , pizzTopp) {
      var pizzSize = $("#psize option:selected").val();
    //   console.log(pizzSize);
      var pizzCrust = $("#pcrust option:selected").val();
      var pizzTopp =  $("#ptoppings option:selected").val();
      

      var pricesPizza = 0;
      var toppingPrice=0;
      var crustPrice=0;
      switch (pizzSize) {
        case "small":
          pricesPizza = 500;
        //   console.log(pricesPizza);
          break;
        case "medium":
          pricesPizza = 800;
          break;
        case "large":
          pricesPizza = 1200;
          break;
        default: pricesPizza;
          break;
      }
      switch (pizzCrust) {
        case "garlic":
          crustPrice = 250;
          break;
        case "stuffed":
          crustPrice = 300;
          break;
        case "bread":
          crustPrice = 200;
          break;
        default: invalid;
          break;
      }
      switch(pizzTopp){
        case "pepperoni":
            toppingPrice = 100;
            break;
        case "mushroom":
            toppingPrice = 150;
            // console.log(pricesPizza);
            break;
        case "bacon":
            toppingPrice = 50;
            break;
        case "mozzarella":
            toppingPrice = 200;
            break; 
        default: invalid;
        break;         
      }
      return parseInt(pricesPizza + toppingPrice + crustPrice);
    }


    function multiply() {
      var pizzNumber = parseInt($("input#pnumber").val());
    //   console.log(pizzNumber);
      return onePizza() * parseInt(pizzNumber);
    }
    alert("Current price is " + multiply());

    prompt("Ente")
    });
  });
});
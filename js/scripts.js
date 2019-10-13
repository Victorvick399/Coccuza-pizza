$(document).ready(function(){
$("#checkout").click(function (event) {
    event.preventDefault();
    var onePizza = function add(pizzSize , pizzCrust , pizzTopp) {
      var pizzSize = $("#psize option:selected").val();
      var pizzCrust = $("#pcrust option:selected").val();
      var pizzTopp =  $("#ptoppings option:selected").val();
      

      var pricesPizza = 0;
      var toppingPrice=0;
      var crustPrice=0;
      switch (pizzSize) {
        case "small":
          pricesPizza = 500;
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
      return onePizza() * parseInt(pizzNumber);
    }
    alert("Current price is " + multiply());

    function total(){
      var pizzDeliv =  $("#pdelivery option:selected").val();
      var pizzDeliv=0;
      switch (pizzDeliv){
        case "delivered":
          pizzDeliv = 300;
        break;
        case "not delivered":
          pizzDeliv = 0 ;
        break;
      }
      return (multiply()+pizzDeliv)
    }
    
    function delivery(){
      var txt=0;
      var text=0;
      var name= 0;
      var place= 0;

      if ($('#delivered').is(':selected')){
        var size = $("#psize option:selected").text();
        var crust= $("#pcrust option:selected").text();
        var topping = $("#ptoppings option:selected").text();
        var number = parseInt($("input#pnumber").val());
        var txt;
        var name = prompt("Please enter your name:");
        var place = prompt("Please enter your location:")
        if (name == null || name == "" || place == null || place == "") {
        txt = "You have cancelled you're delivery option.";
        } else {
        txt = "Thank you " + name + " for ordering." + "You have ordered "+ number + " pizza.<br>" +
        "Each of which is a " + size + "pizza with a " + crust + "crust and with " + topping + " toppings." + "You're food will be delivered to " + place  + " and your price is Ksh " + total() + "." ;
        }
        document.getElementById("results").innerHTML = txt; 
      }else{
        var size = $("#psize option:selected").text();
        var crust= $("#pcrust option:selected").text();
        var topping = $("#ptoppings option:selected").text();
        var number = parseInt($("input#pnumber").val());
        var text;
        text = "You have ordered " + number + " pizza.<br>" + "Each with a " + crust + "crust with " + topping + " toppings." + "Please appear at our nearest restaurant for your order which is Ksh " + multiply() +".";
        document.getElementById("results").innerHTML = text;
      }
    };

      $("#Total").on('click' , function(){
        return delivery();
      });
    
    });
    });
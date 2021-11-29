function pizzaSizes(small,medium,large){
    this.small = small;
    this. medium = medium;
    this.large = large;
}
function pizzaCrusts(stuffed,crispy,gluten){
    this.stuffed = stuffed;
    this.crispy = crispy;
    this.gluten = gluten;
}

function pizzaToppings(pepperoni,mushroom,sausage){
    this.pepperoni = pepperoni;
    this.mushroom = mushroom;
    this.sausage = sausage;
}
function pizzaSizesTwo(smallTwo,mediumTwo,largeTwo){
    this.smallTwo = smallTwo;
    this. mediumTwo = mediumTwo;
    this.largeTwo = largeTwo;
}
function pizzaCrustsTwo(stuffedTwo,crispyTwo,glutenTwo){
    this.stuffedTwo = stuffedTwo;
    this.crispyTwo = crispyTwo;
    this.glutenTwo = glutenTwo;
}

function pizzaToppingsTwo(pepperoniTwo,mushroomTwo,sausageTwo){
    this.pepperoniTwo = pepperoniTwo;
    this.mushroomTwo = mushroomTwo;
    this.sausageTwo = sausageTwo;
}


// User Interface
$(document).ready(function(){
    // Pizza Peperoni
    $("form#pizza-peperoni").submit(function(event){
        event.preventDefault();

        var smallRadio = $("input#small[name='pizzaSizes']:checked").val();
        var mediumRadio = $("input#mediumRadio[name='pizzaSizes']:checked").val();
        var largeRadio = $("input#largeRadio[name='pizzaSizes']:checked").val();
        // new Size
        var size = new pizzaSizes(smallRadio,mediumRadio,largeRadio);

        var stuffedRadio = $("input#stuffed[name='pizzaCrusts']:checked").val();
        var crispyradio = $("input#crispy[name='pizzaCrusts']:checked").val();
        var glutenRadio = $("input#gluten[name='pizzaCrusts']:checked").val();
        // new Crusts
        var crusts  = new pizzaCrusts(stuffedRadio,crispyradio,glutenRadio)

        var pepperoniRadio = $("input#pepperoni[name='pizzaToppings']:checked").val();
        var mushroomRadio = $("input#mushroom[name='pizzaToppings']:checked").val();
        var sausageradio = $("input#sausage[name='pizzaToppings']:checked").val();
        // new Toppings
        var toppings  = new pizzaToppings(pepperoniRadio,mushroomRadio,sausageradio)
        // Switch

        var inputOne = $("input#inputOneValue").val();
        // Switch Toggle
        var deliveryRadio = $("input#delivery:checked").val();

        // Small section radio.

        if(deliveryRadio){
            var location = prompt("Enter Delivery location: ");
            if(location == ""){
                alert("You have not entered a delivery location")
            }else{
                alert ("Your order will be delivered in " + location + " at an fee of 500Ksh");
                if(smallRadio && stuffedRadio && pepperoniRadio && inputOne && deliveryRadio){
            
                    var  value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && crispyradio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && glutenRadio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && stuffedRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && crispyradio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && stuffedRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && crispyradio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadio && glutenRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Medium Pizza delivery section
                else if(mediumRadio && stuffedRadio && pepperoniRadio && inputOne && deliveryRadio){
            
                    var  value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && crispyradio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && glutenRadio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && stuffedRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && crispyradio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && stuffedRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && crispyradio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadio && glutenRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Medium " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Large Radio delivery
                else if(largeRadio && stuffedRadio && pepperoniRadio && inputOne && deliveryRadio){
                    var  value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && crispyradio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && glutenRadio && pepperoniRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && stuffedRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && crispyradio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && glutenRadio && mushroomRadio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && stuffedRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && crispyradio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadio && glutenRadio && sausageradio && inputOne && deliveryRadio){
                    var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(sausageradio)
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadio);
                    var checkout = "Size of pizza: Large " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
            }
        }
        else if(smallRadio){
            if(smallRadio == undefined && stuffedRadio == undefined && pepperoniRadio == undefined){
                alert("Make sure you select all fields")
            }else if(smallRadio){
                if(smallRadio && stuffedRadio && pepperoniRadio && inputOne){
                    var  value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && crispyradio && pepperoniRadio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && glutenRadio && pepperoniRadio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && stuffedRadio && mushroomRadio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && crispyradio && mushroomRadio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && glutenRadio && mushroomRadio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && stuffedRadio && sausageradio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && crispyradio && sausageradio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadio && glutenRadio && sausageradio && inputOne){
                    var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
                    var multiplier = parseInt(inputOne);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }
            }
        }
        // Medium section
        else if(mediumRadio){
            if(mediumRadio && stuffedRadio && pepperoniRadio && inputOne){
                var  value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && crispyradio && pepperoniRadio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && glutenRadio && pepperoniRadio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && stuffedRadio && mushroomRadio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && crispyradio && mushroomRadio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && glutenRadio && mushroomRadio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && stuffedRadio && sausageradio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && crispyradio && sausageradio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadio && glutenRadio && sausageradio && inputOne){
                var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
        else if(largeRadio){
            if(largeRadio && stuffedRadio && pepperoniRadio && inputOne){
                var  value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && crispyradio && pepperoniRadio && inputOne){
                var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && glutenRadio && pepperoniRadio && inputOne){
                var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && stuffedRadio && mushroomRadio && inputOne){
                var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Mushroom= " + mushroomRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && crispyradio && mushroomRadio && inputOne){
                var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && glutenRadio && mushroomRadio && inputOne){
                var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && stuffedRadio && sausageradio && inputOne){
                var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Stuffed = " + stuffedRadio + '\n' + "Toppings: Sausage= " + sausageradio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && crispyradio && sausageradio && inputOne){
                var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Crispy = " + crispyradio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadio && glutenRadio && sausageradio && inputOne){
                var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
                var multiplier = parseInt(inputOne);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadio + '\n' + "Crusts: Gluten = " + glutenRadio + '\n' + "Toppings: Pepperoni= " + pepperoniRadio + '\n' + "Amount: " + inputOne + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
    })

    // pizza NeaPolitan pizza
    $("form#neapolitanPizza").submit(function(event){
        event.preventDefault();

        var smallRadioTwo = $("input#smallTwo[name='pizzaSizesTwo']:checked").val();
        var mediumRadioTwo = $("input#mediumTwo[name='pizzaSizesTwo']:checked").val();
        var largeRadioTwo = $("input#largeTwo[name='pizzaSizesTwo']:checked").val();

        // new Size
        // var size = new pizzaSizesTwo(smallRadioTwo,mediumRadioTwo,largeRadioTwo);

        var stuffedRadioTwo = $("input#stuffedTwo[name='pizzaCrustsTwo']:checked").val();
        var crispyradioTwo = $("input#crispyTwo[name='pizzaCrustsTwo']:checked").val();
        var glutenRadioTwo = $("input#glutenTwo[name='pizzaCrustsTwo']:checked").val();

        var pepperoniRadioTwo = $("input#pepperoniTwo:checked").val();
        var mushroomRadioTwo = $("input#mushroomTwo:checked").val();
        var sausageradioTwo = $("input#sausagetwo:checked").val();


        // alert(pepperoniRadioTwo)
        // alert(mushroomRadioTwo)
        // alert(sausageradioTwo)

        var inputTwo = $("input#inputTwoValue").val();
        // Switch Toggle
        var deliveryRadioTwo = $("input#deliveryTwo:checked").val();

        // Small section radio.
        
        if(deliveryRadioTwo){
            var locationTwo = prompt("Enter Delivery locationTwo: ");
            if(locationTwo == ""){
                alert("You have not entered a delivery locationTwo")
            }else{
                alert ("Your order will be delivered in " + locationTwo + " at an fee of 500Ksh");
                if(smallRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var  value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Medium Pizza delivery section
                else if(mediumRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
            
                    var  value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Medium " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Large Radio delivery
                else if(largeRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var  value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadioTwo +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo && deliveryRadioTwo){
                    var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo)
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioTwo);
                    var checkout = "Size of pizza: Large " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
            }
        }
        else if(smallRadioTwo){
            if(smallRadioTwo == undefined && stuffedRadioTwo == undefined && pepperoniRadioTwo == undefined){
                alert("Make sure you select all fields")
            }else if(smallRadioTwo){
                if(smallRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo){
                    var  value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo){
                    var value = parseInt(smallRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo) 
                    var multiplier = parseInt(inputTwo);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }
            }
        }
        // Medium section
        else if(mediumRadioTwo){
            if(mediumRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo){
                var  value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(mediumRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
        else if(largeRadioTwo){
            if(largeRadioTwo && stuffedRadioTwo && pepperoniRadioTwo && inputTwo){
                var  value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && crispyradioTwo && pepperoniRadioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && glutenRadioTwo && pepperoniRadioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(pepperoniRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Pepperoni= " + pepperoniRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && stuffedRadioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && crispyradioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && glutenRadioTwo && mushroomRadioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(mushroomRadioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Mushroom= " + mushroomRadioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && stuffedRadioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Stuffed = " + stuffedRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && crispyradioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(crispyradioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Crispy = " + crispyradioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioTwo && glutenRadioTwo && sausageradioTwo && inputTwo){
                var value = parseInt(largeRadioTwo) + parseInt(glutenRadioTwo) + parseInt(sausageradioTwo) 
                var multiplier = parseInt(inputTwo);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioTwo + '\n' + "Crusts: Gluten = " + glutenRadioTwo + '\n' + "Toppings: Sausage= " + sausageradioTwo + '\n' + "Amount: " + inputTwo + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
    })

    //Sicilian
    $("form#sicilian").submit(function(event){
        event.preventDefault();

        var smallRadioThree = $("input#smallThree[name='pizzaSizesThree']:checked").val();
        var mediumRadioThree = $("input#mediumThree[name='pizzaSizesThree']:checked").val();
        var largeRadioThree = $("input#largeThree[name='pizzaSizesThree']:checked").val();

        // new Size
        // var size = new pizzaSizesThree(smallRadioThree,mediumRadioThree,largeRadioThree);

        var stuffedRadioThree = $("input#stuffedThree[name='pizzaCrustsThree']:checked").val();
        var crispyradioThree = $("input#crispyThree[name='pizzaCrustsThree']:checked").val();
        var glutenRadioThree = $("input#glutenThree[name='pizzaCrustsThree']:checked").val();

        var pepperoniRadioThree = $("input#pepperoniThree:checked").val();
        var mushroomRadioThree = $("input#mushroomThree:checked").val();
        var sausageradioThree = $("input#sausageThree:checked").val();


        // alert(pepperoniRadioThree)
        // alert(mushroomRadioThree)
        // alert(sausageradioThree)

        var inputThree = $("input#inputThreeValue").val();
        // Switch Toggle
        var deliveryRadioThree = $("input#deliveryThree:checked").val();

        // Small section radio.
        
        if(deliveryRadioThree){
            var locationThree = prompt("Enter Delivery locationThree: ");
            if(locationThree == ""){
                alert("You have not entered a delivery locationThree")
            }else{
                alert ("Your order will be delivered in " + locationThree + " at an fee of 500Ksh");
                if(smallRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var  value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && crispyradioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && crispyradioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && stuffedRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && crispyradioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(smallRadioThree && glutenRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Medium Pizza delivery section
                else if(mediumRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
            
                    var  value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && crispyradioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && crispyradioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && stuffedRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && crispyradioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(mediumRadioThree && glutenRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Medium " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
                // Large Radio delivery
                else if(largeRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var  value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && crispyradioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && crispyradioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && glutenRadioThree && mushroomRadioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && stuffedRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && crispyradioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadioThree +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }else if(largeRadioThree && glutenRadioThree && sausageradioThree && inputThree && deliveryRadioThree){
                    var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree)
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;
                    var summation = total + parseInt(deliveryRadioThree);
                    var checkout = "Size of pizza: Large " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery: " + deliveryRadio +  '\n' + '\n' + "Summation: " +  summation ;
                    alert( checkout)
                    alert("The total amounts to: " + summation);
                }
            }
        }
        else if(smallRadioThree){
            if(smallRadioThree == undefined && stuffedRadioThree == undefined && pepperoniRadioThree == undefined){
                alert("Make sure you select all fields")
            }else if(smallRadioThree){
                if(smallRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree){
                    var  value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && crispyradioThree && pepperoniRadioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && crispyradioThree && mushroomRadioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && glutenRadioThree && mushroomRadioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && stuffedRadioThree && sausageradioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && crispyradioThree && sausageradioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }else if(smallRadioThree && glutenRadioThree && sausageradioThree && inputThree){
                    var value = parseInt(smallRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree) 
                    var multiplier = parseInt(inputThree);
                    var total = value * multiplier;;
                    var checkout = "Size of pizza: Small " + smallRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                    alert( checkout)
                    alert("The total amounts to: " + total);
                }
            }
        }
        // Medium section
        else if(mediumRadioThree){
            if(mediumRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree){
                var  value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && crispyradioThree && pepperoniRadioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && crispyradioThree && mushroomRadioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && glutenRadioThree && mushroomRadioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && stuffedRadioThree && sausageradioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && crispyradioThree && sausageradioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(mediumRadioThree && glutenRadioThree && sausageradioThree && inputThree){
                var value = parseInt(mediumRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + mediumRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
        else if(largeRadioThree){
            if(largeRadioThree && stuffedRadioThree && pepperoniRadioThree && inputThree){
                var  value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && crispyradioThree && pepperoniRadioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && glutenRadioThree && pepperoniRadioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(pepperoniRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Pepperoni= " + pepperoniRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && stuffedRadioThree && mushroomRadioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && crispyradioThree && mushroomRadioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && glutenRadioThree && mushroomRadioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(mushroomRadioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Mushroom= " + mushroomRadioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && stuffedRadioThree && sausageradioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Stuffed = " + stuffedRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && crispyradioThree && sausageradioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(crispyradioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Crispy = " + crispyradioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }else if(largeRadioThree && glutenRadioThree && sausageradioThree && inputThree){
                var value = parseInt(largeRadioThree) + parseInt(glutenRadioThree) + parseInt(sausageradioThree) 
                var multiplier = parseInt(inputThree);
                var total = value * multiplier;;
                var checkout = "Size of pizza: Small " + largeRadioThree + '\n' + "Crusts: Gluten = " + glutenRadioThree + '\n' + "Toppings: Sausage= " + sausageradioThree + '\n' + "Amount: " + inputThree + '\n' + "Delivery:  none " +  '\n' + '\n' + "Summation: " +  total ;
                alert( checkout)
                alert("The total amounts to: " + total);
            }
        }
    })


    //veggiePizza
    $("form#veggiePizza").submit(function(event){
        event.preventDefault();

        var smallRadioSeven = $("input#smallSeven[name='pizzaSizesSeven']:checked").val();
        var mediumRadioSeven = $("input#mediumSeven[name='pizzaSizesSeven']:checked").val();
        var largeRadioSeven = $("input#largeSeven[name='pizzaSizesSeven']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioSeven,mediumRadioSeven,largeRadioSeven);

        var stuffedRadioSeven = $("input#stuffedSeven[name='pizzaCrustsSeven']:checked").val();
        var crispyRadioSeven = $("input#crispySeven[name='pizzaCrustsSeven']:checked").val();
        var gluttenradioSeven = $("input#glutenSeven[name='pizzaCrustsSeven']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioSeven,crispyRadioSeven,gluttenRadioSeven)

        var pepperoniRadioSeven = $("input#pepperoniSeven[name='pizzaToppingsSeven']:checked").val();
        var mushroomRadioSeven = $("input#mushroomSeven[name='pizzaToppingsSeven']:checked").val();
        var sausageradioSeven = $("input#sausageSeven[name='pizzaToppingsSeven']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioSeven,mushroomRadioSeven,sausageRadioSeven)

        // Small section radio.
        if(smallRadioSeven == undefined && stuffedRadioSeven == undefined && pepperoniRadioSeven == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
    })


    //margherita
    $("form#cheese").submit(function(event){
        event.preventDefault();

        var smallRadioEight = $("input#smallEight[name='pizzaSizesEight']:checked").val();
        var mediumRadioEight = $("input#mediumEight[name='pizzaSizesEight']:checked").val();
        var largeRadioEight  = $("input#largeEight[name='pizzaSizesEight']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioEight,mediumRadioEight,largeRadioEight);

        var stuffedRadioEight = $("input#stuffedEight[name='pizzaCrustsEight']:checked").val();
        var crispyRadioEight = $("input#crispyEight[name='pizzaCrustsEight']:checked").val();
        var gluttenradioEight = $("input#glutenEight[name='pizzaCrustsEight']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioEight,crispyRadioEight,gluttenRadioEight)

        var pepperoniRadioEight = $("input#pepperoniEight[name='pizzaToppingsEight']:checked").val();
        var mushroomRadioEight = $("input#mushroomEight[name='pizzaToppingsEight']:checked").val();
        var sausageradioEight = $("input#sausageEight[name='pizzaToppingsEight']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioEight,mushroomRadioEight,sausageRadioEight)
        

        // Small section radio.
        if(smallRadioEight == undefined && stuffedRadioEight == undefined && pepperoniRadioEight == undefined){
            
            alert("Make sure you select all fields");
        }
        else if(smallRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
    })
})
















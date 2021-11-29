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

        // Small section radio.
        if(smallRadio == undefined && stuffedRadio == undefined && pepperoniRadio == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadio && stuffedRadio && pepperoniRadio){
            var  value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
             alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && pepperoniRadio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && stuffedRadio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadio && stuffedRadio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && stuffedRadio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadio && stuffedRadio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && stuffedRadio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
    })

})
















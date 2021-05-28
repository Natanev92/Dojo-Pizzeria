function PizzaOven(CrustType, SauceType, Cheeses, Toppings) {
var Pizza = {
    "CrustType": "deep dish",
    "SauceType": "traditional",
    "Cheeses": "mozzarella",
    "toppings": ["pepperoni","sausage"],
    "pizzainfo": function() {
        console.log("deep dish:" + this.CrustType);
        console.log("traditional:" + this.SauceType);
        console.log("mozarella:" + this.Cheeses);
        console.log("sausage:" + this.toppings);
    }
    }
}   
function PizzaOven2(CrustType, SauceType, Cheeses, Toppings) {
    var Pizza = {
        "CrustType": "hand tossed",
        "SauceType": "marinara",
        "Cheeses": ["mozzarella", "feta"],
        "toppings": ["mushrooms","olives", "onions"],
        "pizzainfo": function() {
            console.log("hand tossed" + this.CrustType);
            console.log("marinara" + this.SauceType);   
            console.log("mozarella" + this.Cheeses);
            console.log("onions" + this.toppings);
        }
        }
    }   
    function PizzaOven3(CrustType, SauceType, Cheeses, Toppings) {
        var Pizza = {
            "CrustType": "hand tossed",
            "SauceType": "BBQ",
            "Cheeses": ["mozzarella", "parmesan"],
            "toppings": ["mushrooms","peppers", "onions"],
            "pizzainfo": function() {
                console.log("hand tossed" + this.CrustType);
                console.log("BBQ" + this.SauceType);   
                console.log("mozarella" + this.Cheeses);
                console.log("onions" + this.toppings);
            }
            }
        }   
        function PizzaOven4(CrustType, SauceType, Cheeses, Toppings) {
            var Pizza = {
                "CrustType": "flat bread",
                "SauceType": "pesto",
                "Cheeses": ["feta", "parmesan"],
                "toppings": ["mushrooms","peppers", "onions"],
                "pizzainfo": function() {
                    console.log("flat bread" + this.CrustType);
                    console.log("pesto" + this.SauceType);   
                    console.log("feta" + this.Cheeses);
                    console.log("onions" + this.toppings);
                }
                }
            }   
    
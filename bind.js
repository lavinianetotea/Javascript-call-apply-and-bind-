/*
The bind() method creates a new function that, when called, has its this keyword set to the provided value.

Let’s break it down. When we use the bind() method:

1. the JS engine is creating a new pokemonName instance and binding pokemon as its this variable. It is important to
understand that it copies the pokemonName function.
2. After creating a copy of the pokemonName function it is able to call logPokemon(), although it wasn’t on the pokemon
object initially. It will now recognizes its properties (Pika and Chu) and its methods.
 */

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'

/*
And the cool thing is, after we bind() a value we can use the function just like it was any other normal function.
We could even update the function to accept parameters, and pass them like so:
* */

var pokemonName2 = function(snack, hobby) {
    console.log(this.getPokeName() + 'loves ' + snack + ' and ' + hobby);
};

var logPokemon2 = pokemonName2.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon2('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
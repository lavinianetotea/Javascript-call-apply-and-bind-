/*
The call() method calls a function with a given this value and arguments provided individually.

What that means, is that we can call any function, and explicitly specify what this should reference within the calling
function. Really similar to the bind() method!

The main differences between bind() and call() is that the call() method:

1. Accepts additional parameters as well
2. Executes the function it was called upon right away.
3. The call() method does not make a copy of the function it is being called on.
*/

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};


/*
call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all
parameters to be passed in individually, whereas apply() expects an array of all of our parameters.
*/

console.info("CALL METHOD:");
pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

console.info("APPLY METHOD:");
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

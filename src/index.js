import first from './first.c';
import second from './second.cpp';

const iterations = 5;
const value = 120000000;

function printToDom(text) {

    function component(text) {

        let element = document.createElement('div');

        element.innerHTML = text;
        return element;
    }

    document.body.appendChild(component(text));
}

function callTimed(prefix, func, value) {
    let initial = new Date();
    let result = func(value);
    console.log(prefix + " --- " + (new Date() - initial));
    return result;
}



first.initialize().then(module => {
    const result = module._roll_dice();
    const sum = module._sum(2, 3);

    setTimeout(() => {
        let fib_c, fib_js;

        for(let i = 0; i< iterations; i++) {
            fib_c = callTimed("fib c", module._fib, value);
            fib_js = callTimed("fib js", fibonacci, value);
        }


        printToDom("dice roll: " + result);
        printToDom("sum: " + sum);
        printToDom("fib_c: " + fib_c);
        printToDom("fib_js: " + fib_js);
    }, 500);

});

second.initialize().then(module => {
   const result = module._useCpp();
   printToDom("From cpp " + result);
});

function fibonacci(n){
    let first = 0, second = 1, next, c;

    for ( c = 0 ; c < n ; c++ )
    {
        if ( c <= 1 )
            next = c;
        else
        {
            next = first + second;
            first = second;
            second = next;
        }
    }

    return next;
}

printToDom("Webpack working");
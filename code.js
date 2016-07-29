var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },
    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        var wordArray = sentence.split(" ");
        var counter = offset == 0 ? 0 : 1;
        for( var i = offset ; i < wordArray.length ; i++ ){
            if( counter == n ){
                wordArray[i] = wordArray[i].split("")[0].toUpperCase() + wordArray[i].substring(1);
                counter = 1;
            }else{
                counter++;
            }
        }
        return wordArray.join(" ");
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        for( var i = 2 ; i < n ; i++ ) {
            if( n % i === 0 ) {
                return false;
            }
        }
        return n > 1;
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        function grHelper(a, b, precision){
            if( precision == 0 ){
                return b / a;
            }
            return grHelper(b, a+b, precision - 1);
        }

        return grHelper(b, a+b, 100);
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        var fNumber1 = 0;
        var fNumber2 = 1;
        if( n == fNumber1 ){
            return fNumber1;
        }else if( n == fNumber2 ){
            return fNumber2;
        }

        var fNumber = 0;
        for( var i = 2 ; i <= n ; i++ ){
            fNumber = fNumber1 + fNumber2;
            fNumber1 = fNumber2;
            fNumber2 = fNumber;
        }

        return fNumber;
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        if( n == 1 || n == 0 ){
            return n;
        }

        function srHelper(n, left, right, precision){
            var mid = ( left + right ) / 2.0, newLeft = left, newRight = right;
             
            if( mid * mid == n || precision == 0 ){
                return mid;
            }else if( mid * mid > n ){
                newRight = mid;
            }else{
                newLeft = mid;
            }

            return srHelper(n, newLeft, newRight, precision - 1);
        }

        var left = 0, mid, right = n;
        
        return srHelper(n, left, right, 1000);
    }
};
module.exports = code;
var Main = function( data ){
  var debug = true;

  var input = data.split( "\n" );

  if( debug) console.time('t');

  var result = [];
  var inputNum = parseInt(input[0], 10);
  if(inputNum < 2){
    console.log ('not valid number');
    return false;
  }
  for(var i=2; i< inputNum; i++){
    if( isPrime(i, result) ){
      result.push(i);
    }
  }
  console.log(input + 'in primes:', result.length);
  if( debug ) console.timeEnd('t');

  //output
  //console.log( "\n" );
}

// param {int} n
// return boolean
var isPrime = function( n, primeArray){
  if( n in primeArray) return false;

  for(var i=2; i<n-1; i++){
    if( n % i === 0 ){
      return false;
    }
  }
  return true;
};

/* 考え方
素数配列にあれば素数、なけれ
*/




Main(require("fs").readFileSync("/dev/stdin", "utf8"));


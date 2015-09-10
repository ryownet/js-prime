var Main = function( data ){
  var debug = true;

  var input = data.split( "\n" );

  if( debug) console.time('t');

  var result = [];

  for(var i=0; i< parseInt(input[0]); i++){
    if( isPrime(i, Math.max.apply(null, result)) ){
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
var isPrime = function( n, currentMax){
  if( n < 8 ){
    if (n === 1) return false;
    if (n === 2) return true;
    if (n === 3) return true;
    if (n === 5) return true;
    if (n === 7) return true;
  };
  if( n % 2 === 0) return false;
  if( n % 3 === 0) return false;
  if( n % 5 === 0) return false;
  if( n % 7 === 0) return false;
  for(var i=9;i<n-1;i++){
    if( n % i === 0 ){
      return false;
    }
  }
  return true;
};

/* 考え方
偶数で割れれば素数ではない
1は素数ではない
2けた以上の場合は、事前に2,3,5,7で割り、false判定をとる
nでしか割れないのが素数なので、n-1まで割り算を続ける
*/




Main(require("fs").readFileSync("/dev/stdin", "utf8"));


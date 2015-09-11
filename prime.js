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

  var tansakuList = new Array(inputNum);

  // 探索リストの中身をすべて素数として仮置き
  // 0, 1は素数でないので除外
  for (var i = 0; i < inputNum; i++) {
    tansakuList[i] = true;
  }
  tansakuList[0] = false;
  tansakuList[1] = false;
  // 最大値の平方根
  var max = Math.floor(Math.sqrt(inputNum));

  // 探索リストの先頭 >= inputNumの平方根まで素数リストの倍数(2x)をふるい落とす
  // 2で割ってあまりを求めるのではなく、2をかけたものを全部消す
  for(var i = 2; i <= max; i++) {
    if(tansakuList[i]) {
        for(var j=i*2; j <= inputNum; j += i) {
            tansakuList[j] = false;
        }
    }
  }

//素数の出力
for(var i = 0; i < inputNum; i++) {
    if(tansakuList[i] === true) {
        result.push(i);
    }
}

  console.log(input + 'in primes:', result.length);
  if( debug ) console.timeEnd('t');
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));


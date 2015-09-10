# JSで素数を数える

## node.js v0.12

## 爆速バージョン

## 実行
## ターミナルで

```
$ node prime.js [inputNumber]

ex) 120万以下の数字の素数の数を数える
$ node prime
1234567
　ただし inputNumberは2以上の自然数
　入力は1行のみとし、改行が入る

　入力を終えるときはCtrl-Dとか
```

```
入力例
$ node prime
100

出力
100, in primes: 25(100以下の素数は25個)
t:1ms
```

```
$ node prime
1000

出力
1000,in primes: 168
t:1ms // 4ms -> 1ms
```

```
$ node prime
10000

出力
10000,in primes: 1229
t: 11ms // 61ms -> 11ms
```

```
$ node prime
123456

出力
123456,in primes: 11601
t: 599ms // 6087ms -> 599ms
```



function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));
console.log(identity<string>("hello"));
console.log(identity<number[]>([1, 2, 3]));

/*
Neste código, o <T> em function identity<T>(value: T) representa um tipo genérico. 
Isso permite que a função identity aceite qualquer tipo como argumento e retorne o mesmo tipo. 
Quando você chama identity<number>(42), o tipo genérico T é definido como number, então a função aceitará um número e retornará um número.
O mesmo vale para outros tipos de dados quando você usa identity<string>("Hello") ou identity<number[]>([1, 2, 3]).
*/

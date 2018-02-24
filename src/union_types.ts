function f(x: number | number[]): number {
    if (typeof x === "number") { //This is known as a type guard and means that the type of x will be treated as a number within the if statement block
      return x;
    }
    else {
        /*Note on Type Guards:
        A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime. 
        TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
        This is called a type guard.
      => so no need to explicitly cast (<Array<number>>x).reduce */
      return x.reduce((a,b) => a + b);
    }
  }


  console.log(f(5))
  console.log(f([1,2,2]))
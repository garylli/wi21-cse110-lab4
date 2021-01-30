1. It will print out `prices.length`. This is because old "var" doesn't have block scoping so even though i is declared in the for loop, it has a function wide scope.
2. At line 12, it'll print out `discountedPrice` __found in the final loop of the for loop at line 5__. This is also because old "var" doesn't have block scoping so discountedPrice has a functionwide scope.
This also means that redeclaring it does not throw an error as it would if we were redeclaring a global variable using let.
3. At line 13, it'll return the final price found in line 7 during the final loop of the for loop since old var has no block scoping and final price is therefore treated as a global variable.
This means that every loop, `finalPrice` is updated and will contain whatever the last loop assigns it.
4. It will return the array containing the discounted prices (`[50,100,150]`) since `discounted` is declared within the function and therefore `discounted` is in the scope of the function

5. It should throw an error since `let` follows block scoping so variable `i` is only declared within the `for` loop at line 5. Therefore at line 11, `i` is undeclared and there's an error.
6. `discountedPrice` is also declared within the `for` loop. Since we're using `let`, `discountedPrice` is a local variable within the `for` loop at line 5 and therefore is uninitialized at line 12. This should also throw an error.
7. The value of `finalPrice` found within the final iteration of the `for` loop is printed since `finalPrice` is declared within the function and therefore is a function wide variable. This means that it is accessible within the for loop and can be updated.
8. Assuming that the errors are cleared up from lines 11 and 12, it should return the same prices as before: `[50, 100, 150]`.


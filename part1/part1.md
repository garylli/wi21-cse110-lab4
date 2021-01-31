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

9. `i` is undeclared since it is declared within the scope of the `for` loop block and will throw an error.
10. `discountedPrice` is also undefined since it is declared within the scope of the `for` loop block.
11. `finalPrice` will throw an error when attempting to reassign a new value to it at `line 7`. However, if we ignore this error, it will return 0 since `finalPrice` is declared as a function-wide constant so it would maintain its original value.
12. It would throw multiple errors due to the reassigning of constant variables. However, if we ignore those errors, it would simply return an empty set `[]` since discounted is a constant so it would maintain its original value.

13
A. student.name
B. student["Grad Year"];
C. student.greeting();
D. student["Favorite Teacher"].name
E. student.courseLoad[0];

14.
A. 32 since the binary + operator is concatenating 2 to the string "3".
B. 1 since the binary - operator automatically converts both types to numbers.
C. 3 since null as a number is 0.
D. 3null since the binary + operator is concatenating null to the string '3'.
E. 4 since true has a number value of 1 and is converted into a number from the binary + operator.
F. 0 since false is not a string and both false and null are converted to numbers. false has a value of 0 and null has a value of 0 so we get 0.
G. 3undefined since we are applying the binary + operator to a string, meaning that it simply concatenates undefined onto 3.
H. NaN since undefined has a numeric value of NaN.

15.
A. true since the > operator converts string 2 into a number
B. true since 12 is the longer string.
C. true since the == operator converts '2' to a number.
D. false since '2' is not a number since === does not convert 2 to a string.
E. false since true has a nuemric value of 1 so 1 != 2.
F. true since Boolean turns any number >= 1 to true.

16. The === operator does not do type conversions while == does.

17. It prints How Are You? since 2 > 1 so it evaluates to true.

19. `[6, 8, 10]` is returned since it takes every number within the array and calls doSomething. After doSomething is called, it calls the function declared in the function call with array[i] + 2, so it adds 2 to the number in the array and then multiplies it by 2. Therefore, we get 1 + 2 = 3 * 2 = 6, for the first number and so on.

21. It prints out 1 4 3 2 with each number on a separate line. It's because it logs 1, 4, and then 3, and then 1 second later 2. The timeout runs only after the functions code is ran, so even though 3 has a timeout of 0, it's outputted after 4.

![Breakpoints image](breakpoints.png)
![Watch values image](watch.png)

What was the problem?

The problem with the javascript was that when it gets the num elements from the HTML document, num1 and num2 are passed in as strings. This makes it so when the sum is calculated, it's concatenating two strings instead of taking the numeric sum. To fix this, we can just modify calculate sum to convert the two strings into numbers while summing them.

`let result = +num1 + +num2` would work.
![Fix image](jsfix.png)

# Part 2
1. citylots.json
2. part2.js
3. 11.7MB
4. 1.06s
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData
1. true + false:
Output: 1
Number(true); // -> 1
Number(false); // -> 0
1 + 0; // -> 1

2. [,,,].length
Output: 3
// [,,,] outputs an array with three empty slots. The last comma is a trailing comma.
[,] + [,]; // -> ""
[] + [] === [,] + [,]; // -> true
[,,,] + [,,,]; // -> ",,,,"
([,,,] + [,,,]).length === [,,,,].length; // -> true

3. [1, 2, 3] + [4, 5, 6]
Output: "1,2,34,5,6"
[1, 2, 3,] + [4, 5, 6]; // -> "1,2,34,5,6"

4. 0.2 + 0.1 === 0.3
Output: false
0.2 + 0.1; // -> 0.30000000000000004;
0.2 + 0.1 > 0.3; // -> true

5. 10,2
Output: 2
// The comma operator simply returns the value of the last operand.

10, 2; // -> 2
1, 2, 3, 4; // -> 4
42, "pineapple", true; // -> true

6. !!""
Output: false
Boolean(""); // -> false
Boolean(0); // -> false
Boolean("Pineapple"); // -> true
Boolean(42); // -> true

7. +!![]
Output: 1
Boolean([]); // -> true
Number(true); // -> 1

8. !!!true
Output: false
!!!!!!!!!!!!true; // -> true

9. true == "true"
Output: false
Number(true); // -> 1
Number("true"); // -> NaN
1 == NaN; // -> false

10. 010 - 03
Output: 5
010; // -> 8
03; // -> 3
8 - 3; // -> 5

11. "" - - ""
Output: 0
Number(""); // -> 0
0 - - 0; // -> 0

12. null + 0
Output: 0
Number(null); // -> 0
0 + 0; // -> 0

null === false; // -> false
+null === +false; // -> true

13. 0/0
Output: NaN
isNaN(0/0); // -> true

14. 1/0 > Math.pow(10, 1000)
Output: false
1/0; // -> Infinity
Math.pow(10, 1000); // -> Infinity
Infinity > Infinity; // -> false

15. true++
Output: SyntaxError
1++; // -> SyntaxError
"x"++; // -> SyntaxError
undefined++; // -> NaN

16. "" - 1
Number(""); // -> 0
0 - 1; // -> -1;

17. (null - 0) + "0"
Output: "00"
Number(null) - 0; // -> 0
0 + "0"; // -> "00"

18. true + ("true" - 0)
Output: NaN
Number("true"); // -> NaN

19. !5 + !5
Output: 0
Boolean(5); // -> true
!true; // -> false
Number(false); // -> 0
0 + 0; // -> 0

20. [] + []
Output: ""
[].toString(); // -> ""
"" + ""; // -> ""

21. NaN === NaN
Output: false
isNaN(NaN); // -> true
NaN === NaN; // -> false

22. NaN++
Output: NaN
let _NaN = NaN;
_NaN++;
isNaN(_NaN); // -> true
_NaN--;
isNaN(_NaN); // -> true
_NaN *= 10;
isNaN(_NaN); // -> true

23. undefined + false
Output: NaN
Number(false); // -> 0
Number(undefined); // -> NaN
NaN + 0; // -> NaN

24. +0 === -0
Output: true
+0 === -0; // -> true
Object.is(+0, -0); // -> false

25. +!!NaN * "" - - [,]
Output: 0
+!!NaN; // -> 0
Number(""); // -> 0
-[,]; // -> -0
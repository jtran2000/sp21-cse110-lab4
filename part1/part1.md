## Part 1A

1. `values added: 20`
2. `final result: 20`
3. `values added: 20`
4. This is a ReferenceError, `result` exists only inside the `if (add) {...}` block, line 13 does not have access to it
5. Line 7 causes a TypeError so any code after it including line 9 is not executed. `const` cannot be reassigned after initialization.
6. See #5. Also, even without the TypeError the problem in #4 would apply.

## Part 1B

1. It will log `3` to the console. This is because `prices.length` is 3, so the loop ran 3 times and thus the last value of `i` is 3. It has access to `i` because `i` is function scoped by `var`.
2. It will log `150` to the console. This is because `300` was the last value in the `prices` array, and thus the last value of `discountedPrice` was `300 * 0.5`. It has access to `discountedPrice` because that is function scoped.
3. It still logs `150` to the console. Since it is declared in the block outside of the function it would not actually matter whether `finalPrice` used `var` or `let` in this case.
4. It returns the array `[50, 100, 150]`. This is to be expected, `discounted` is not subject to any errors.
5. This triggers a ReferenceError, because `i` is declared with `let` it is block scoped and thus inaccessible outside of the for loop.
6. This is also a ReferenceError for the same reason as #5
7. This still returns `150` because `finalPrice` was declared at the function level, not some block inside of it.
8. It still returns `[50, 100, 150]`, because `discounted` was declared at the function level.
9. It is a ReferenceError for the exact same reason as #5.
10. It returns `3`. `length` was set on line 4 and `prices.length` is indeed 3.
11. It still returns `[50, 100, 150]`. A `const` array cannot be reassigned, but it is still mutable. Push and other operations still work.
12. 

A. `student.name`

B. `student["Grad Year"]`

C. `student.greeting()`

D. `student["Favorite Teacher"].name`

E. `student.courseLoad[0]`

13. 
A.
The output is `'32'` because `'3'` is a string, so `2` is type converted into a string as well and the operation is treated as string concatenation.

B. The output is `1`. Unlike `+`, `-` can only be applied to numbers, so `3` is type converted to a number and the expression is evaluated.

C. The output is `'3null'` because `null` was converted to the string `'null'` and the strings were concatenated.

D. The output is `4` because `true` was type converted to the number `1`.

F. The output is `0` because both `false` and `null` were type converted to `0`.

G. The output is `3undefined` because `undefined` was type converted to a string.

H. This is `NaN`. `undefined` was type converted to `NaN` and subtraction by `NaN` yields `NaN` .

14. 

A.  True, because `2` is type converted to a number.

B.  False, since both items are strings there is no type conversion so lexicographical string comparison is used.

C. True, `2` was type converted to a number.

D. False, because the `===` comparison operator requires that the items be of the same type.

E. False, because `true` is type converted to 2.

F. True, because `Boolean()` converts any non-zero number to `true`.

15. The `==` operator does not require items to be of the same type, so it can do type conversions. The `===` operator does require the items to be of the same type so it will not convert them. This is why C was true and D was false.
16. See file
17. The result is the array `[2,4,6]` is returned. The for loop in `modifyArray` calls the callback function, in this case `doSomething` on each element of `[1,2,3]` then pushes the returned value. The returned value `doSomething` is double the number that was passed in. 
18. See file
19. It would output

    1
    
    4

    3

    2


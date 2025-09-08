
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

#### Answer the questions
1) (i) var is not block scope, its ignore block scope. it can be reassigned. we can use it before declaring but the value is undefined. (ii) let is block  scope. we cannot redeclare in the same scope. it can be reassigned. (iii) const is block scope. we cannot redeclare in the same scope, it cannot be reassigned.

2) (i) map(): its return e new array same length as input array. we can use it for transforms elements. (ii) forEach(): it is same as loop but its return undefined. we can use it for update dom elements. (iii) filter(): use filter we can filtering elements using condition. its return a new array.

3) arrow function is special shorthand syntax function in ES6. if function is single expression its return automatically.this function do not have their own arguments. 

4) i) example of destructuring:<br/>
 ```bash
        //array-destructuring
        const num = [1,2,3,4]
        const [a, b, c, d] = num;
        condole.log(a, b, c, d)
``` 
 ```bash
        //object-destructuring
        const student ={
                name: "Donald Trump",
                age: 20,
                department: "Computer Science"
        }
        const {name, age, department} = student
        console.log(name, age, department)
```

5) template literals is very useful feature in ES6. use template literals we can display multiline without using \n. template literals uses backtick (``). 
```bash
        const name = "Jhankar Mahbub";
        const age = 40;

        //old-string-concatenation
        console.log("Student name: " + name + "Student age: " + age)

        //new-string-concatenation-using-template-literals
        condole.log(`Student name: ${name} and Student age: ${age}`)
```


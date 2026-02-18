name='sri'
id=12
collegename='SFS'
address='hosur'
age=0x12
qualification='Bsc'
console.log("name:",name)
console.log("id:",id)
console.log("collegename:",collegename)
console.log("address:",address)
console.log("age:",age)
console.log("qualification:",qualification)

var a;
name='sri'
console.log('name:',name)

let a=7;
c=++a + a++ - --a + a--
console.log(c)

let a=11;
c=++a - --a + ++a - --a + ++a
console.log(c)

let a=null
console.log(a)

let user={
    name:"sri",
    age:18,
    address:"hosur",
    id:12
}

console.log(user)

let user1={
    name:"fanta",
    age:30,
    address:"kollegal"
}

 user .name="abi"
 console.log(user1)

 let user={
    name:"sri",
    age:10,
    address:"Bangalore",
    Biodata:{
        Maritalstatus:"unmarried",
        qualification:"BSC",
        DOB:"12/12/2005",
        professional:"engineer"

    }
 }
 console.log(user .Biodata)

let a=12
let b=14
let c=15

if(a>b && a>c)
{
    console.log("a is greater")
}
else if(b>a && b>c)
{
    console.log("b is graeter")
}
else{
 console.log("c is greater")
}

if(a>b){
    console.log("a is greater")
}
if(b>c){
  console.log("b is greater")
}
else{
    console.log("c is greater")
}

if(333>44)
{
    console.log("HLO good mrng")
    if(333<44)
        {
        console.log("to everone")
    }
}

//condition

if(10>2)
{
    console.log("sri")
}
else if(19<12)
{
    console.log("fanta")
}
else{
    console.log("error")
}

//loop

for(let i=1;i<=10;i++)
 {
    console.log(2*i);
 }

for(let i=1;i<=20;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i*j);
    }
    console.log("---------------");
}

//while loop
let i=1
while(i<=10)
{
    console.log(2*i) //2 table
    i++;
}

//do while loop
let i=1
do{
    console.log("INAFANT")
}
while(i<0)

//TECH
 let a=45
 let b=a*a
 let c=b%100
 let d=b/100
 if(parseInt (c+d)==a)
 {
    console.log("TECH")
 }
 else{
    console.log("NOT TECH")
 }

//swapping using temp
let a=10
let b=20
temp=0
temp=a
a=b
b=temp
console.log(a)
console.log(b)

//swapping without let a=10
let b=20
a=a+b
 b=a-b
 a=a-b
console.log(a)
console.log(b)using temp

//array
let a=[1,2,3,"sri",true]
console.log(a)

//array using index value
let a=[1,2,3,"sri",true]
console.log(a[0],a[1],a[2],a[3],a[4])

//for loop
let a=[1,2,3,"sri",true]
for(let i=0;i<5;i++)
{
    console.log(a[i])
}

//finding max value
let a=[1,2,4,5,9,8,10,12]
largest=a[0]
for(let i=0;i<7;i++)
{
    if(a[i]>largest)
        largest=a[i]
}
console.log(largest)

//finding same
let a=[1,2,4,5,6]
let b=[1,2,4,5,6]
let flag=true
for(let i=0;i<5;i++)
{
    if(a[i]==b[i])
    {
     flag=true
    }
    else{
        flag=false
        break
    }
        
}

 let a=[1,2,4,5,6]
let b=[1,2,4,6,6]
let same=true
for(let i=0;i<5;i++)
{
    if(a[i]!==b[i])
    {
        same=false
    }
}
if(same)
{
    console.log("same")
}
else
{
    console.log("not same")
}

let a=[1,2,4,5,6]
let b=[1,2,4,5,6]
let flag=true
for(let i=0;i<5;i++)
{
    if(a[i]==b[i])
    {
     flag=true
    }
    else{
        flag=false
        break
    }
        
}
console.log(flag)

let a=[1,2,3,4,5]
let target=9
let sum=0
for(let i=0;i<5;i++)
{
    for(let j=i+1;j<5;j++)
    {
        if(a[i]+a[j]==target)
        {
      sum=a[i]+a[j]
       break
        }
           
    } 
}
console.log(target)


function hello()
{
    console.log("hi")
}
hello();
function hello1()
{
    console.log("infant thondu")
}
hello1();
function hello2()
{
    console.log("sri")
}
hello2();

function  hello3()
{
    console.log("ro")
}
hello3();

function add(a,b) //Addition
{
    console.log(a+b);
}
add(3,4);
add(30,0);

function sub(a,b) //Subtraction
{
    console.log(a-b);
}
sub(12,2);

function mul(a,b) //multiplication
{
    console.log(a*b)
}
mul(2,3);

function div(a,b) //division
{
    console.log(a/b);
}
div(10,2);

function mod(a,b) //modulus
{
    console.log(a%b)
}
mod(10,2);

function add(a,b)
{
    return a+b;
}
// const a=add(12,4); //(or)
console.log(add(2,3))
    
const add=(a,b)=>  //arrow function
    {
    return a+b;
}
console.log(add(1,3));

const sub=(a,b)=>
    {
    return a-b;
}
console.log(sub(12,3));

const mul=(a,b)=>
    {
    return a*b;
}
console.log(mul(1,3));

const div=(a,b)=>
    {
    return a/b;
}
console.log(div(12,3));

const mod=(a,b)=>
    {
    return a%b;
}
console.log(mod(12,3));

 function details(name,city,age)
 {
    return name+" "+city+" " +age ;
 }
 console.log(details("sri","hosur",29));

 function qualification(degree,college,year)
{
    return degree+" "+college+" " +year;
}
console.log(qualification("Bsc","SFS",2026))

function a()
{
    console.log("hii")
    function b()
    {
        console.log("infant thondu")
    }
   
    b();
}
a();

function a()
{
    console.log("infant");
    function b()
    {
        console.log("oru");
    }
    
    function c()
    {
        console.log("thondu");
    }

    function d()
    {
        console.log("paiyan");
    }
b();
c();
d();
}
a();

let a=10;
const b=10;
{
    let a=10;
    console.log(a);
    console.log(b);
}
console.log(a);

var
{
    var a=10;
    console.log(a);
}
console.log(a);

hello();
hello1();
hello2();
function hello()
{
    console.log("sri")
}


function hello1()
{
    console.log("fantra")
} 

function hello2()
{
console.log("infant")
}

gret

function a(name,Callback)
{
    console.log("my name is",name);
    Callback();
}
function gret()
{
    console.log("good morning")
}
a("sri",gret)

function f1()
{
    console.log("im infant thondu");
}
function f2()
{
    console.log("im infant thondu"); 
}
function f3()
{
    console.log("im infant thondu");
  
}
function f4()
{
    console.log("im infant thondu");
    
}
function f5(c1,c2,c3,c4)
{
    c1();
    c2();
    c3();
    c4();  
}
f5(f1,f2,f3,f4);

//timeout

console.log(1);
console.log(2);
console.log(3);
setTimeout(()=>
{
    console.log(4)
},2000)
console.log(5);

function f1()
{
    console.log("f1");
}
function f2()
{
    console.log("f2");
}
function f3()
{
    console.log("infant thondu");
}
function f4()
{
    console.log("f4");
}
function f5()
{
    console.log("f5")
}
f1();
f2();
setTimeout(f3,200);
f4();
f5();

function a(Callback)
{
    Callback();
}
a(()=>
{
    console.log("sri")
})













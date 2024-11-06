//Exercise 1

// class Person {
//     constructor (name, age, country) {
//       this.name = name;
//       this.age = age;
//       this.country = country;
//     }
//       showDetails () {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.country);
//     }
//   }
  
//   let firstPerson = new Person ('FG', 34, 'UK');
//   firstPerson.showDetails();
  
//   let secondPerson = new Person ('FJ', 32, 'France');
//   secondPerson.showDetails();


//Exercise 2

// class Rectangle {
//     constructor (width, height)
// {
// this.width = width;
// this.height= height;

// }

// calcArea () {
//     let area = this.width*this.height;
//     console.log(area);
// }

// calcPerimeter () {

//     let perimeter =  (this.width*2) + (this.height*2);
// console.log(perimeter);}


// }

// let firstRectangle = new Rectangle (5, 10);

// firstRectangle.calcArea();
// firstRectangle.calcPerimeter();




// Exercise 3

// class Vehicle {

//     constructor(make, model, year)

//     {
// this.make=make;
// this.model= model;
// this.year= year;

//     }

//     showDetails ()
//     {
//     console.log(`Make: ${this.make}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);


//     }
// }

// class Car extends Vehicle {
// constructor(make, model, year, noOfDoors){
// super(make, model, year);
// this.noOfDoors=noOfDoors;
// }



// };


// let newCar = new Car ('ford', 'esc', 1980, 4);
// newCar.showDetails();
// console.log(newCar);

// //Exercise 4

// class BankAccount

// {
// constructor (accNumber, balance)
// {this.accNumber=accNumber;
// this.balance=balance;

// }


// deposit(amount){
//     this.balance = this.balance + amount;

// }

// withdraw(amount)
// {

// // this.balance=this.balance-amount;
// this.balance=this.balance-amount;
// }

// }

// let bankAcc1 = new BankAccount(31131312,120);
// console.log(bankAcc1);//Balance shows 110

// bankAcc1.withdraw(10);//Balance shows 110
// console.log(bankAcc1);



// //Exercise 5
// class Shape
// { constructor (long, width)
// {this.long=long;
// this.width=width;
// this.area=length*width;}

// }

// class Circle extends Shape
// {constructor(long, width)
//     {
//     super (long, width);
//     this.area= width*3.14;

//     }

// }

// const circle1 = new Circle (5, 5);
// console.log(circle1);

// //Exercise 6

// class Employee{
//     constructor(name, salary)
// {this.name=name;
//     this.salary=salary;
// }

// calcAnnSal(){
//     let annSal=this.salary*12;
//     console.log(annSal);
//     console.log('employee calcsal');
//     return annSal;
// }




// }

// class Manager extends Employee
// {constructor(name, salary, department)
//     {super(name, salary);
//         this.department=department;
//     }
// calcAnnSal(){

//     let baseSal =super.calcAnnSal();
//     console.log(baseSal);
//     let bonus = 0.1;
//     let fullSal=(baseSal*bonus)+baseSal;
// console.log(fullSal);
// console.log('manager calcsal');
// }


// }

// let manager1 = new Manager ('fred', 1400, 'HR');
// console.log(manager1);
// manager1.calcAnnSal();

// let manager2 = new Manager ('tom', 1200, 'Fin');
// console.log(manager2);
// manager2.calcAnnSal();



// //Exercise 7
// class Book {
//     constructor(title, author, pubYear)
//     {this.title=title;
// this.author=author;
// this.pubYear=pubYear;
//     }

//     displayBook(){
//         console.log(`Title: ${this.title}`);
//         console.log(`Author: ${this.author}`);
//         console.log(`PubYear: ${this.pubYear}`);


//     }
// }

// class Ebook extends Book{
// constructor(title, author, pubYear, bookPrice){
//     super(title, author, pubYear, bookPrice);
//     this.bookPrice=bookPrice;
// }
// displayBook(){
//     console.log(`Title: ${this.title}`);
//         console.log(`Author: ${this.author}`);
//         console.log(`PubYear: ${this.pubYear}`);
//         console.log(`Bookprice: ${this.bookPrice}`);
// }

// }

// const newBook = new Ebook('The book', 'Mr Smith', 1980, 8.99);
// newBook.displayBook();

// // Exercise 8
// class Animal
// {constructor(species, sound)
// {
// this.species=species;
// this.sound=sound;

// }
// makeSound(){
//     console.log(`${this.sound}`);
// }

// }

// class Dog extends Animal{
//     constructor(species, sound, color){
// super(species, sound);
// this.color=color;

//     }

//     makeSound(){
// super.makeSound();

// console.log(`${this.color}`);
// }
    
//     }

//     const dog1 = new Dog ('bull', 'bark', 'brown');
//     dog1.makeSound();

    //Exercise 9
//     class Bank{
//     constructor(){
// this.bankName=' ';
// this.branches=[];

//     }

// addBranch(branch){
//     this.branches.push(branch);
// }


// removeBranch(branch){
//     const index = this.branches.indexOf(branch);
// this.branches.splice(index, 1)
// }

// displayBranches(){

// console.log(this.branches);




// }

// }

// const abank = new Bank();

// abank.addBranch('sdfsd');
// abank.addBranch('erewrwerw');
// console.log(abank);
// abank.removeBranch('sdfsd')
// console.log(abank);


//Exercise 10
class Product{
constructor(id, name, price)
{

this.id=id;
this.name=name;
this.price=price;
}
totalPrice(quantity){
let fullPrice=this.price*quantity;
console.log(fullPrice);
}

}



let firstProduct = new Product('itsID', 'kettle', 20);
console.log(firstProduct);

firstProduct.totalPrice(2);

class PersonalCareProduct extends Product{
    constructor (id, name, price, warranty)

    {super(id, name, price);
        this.warranty=warranty;
    }

    totalPrice(quantity){
        let fullPrice=this.price*quantity;
        console.log(fullPrice);
console.log(this.warranty);
        }



}

const secondProduct = new PersonalCareProduct ('id2', 'secProd', 15, '1 year');



// //Exercise 11
// class BankAccount {

// constructor(accountNumber, accountHolderName, balance)

// {this.accountNumber=accountNumber;
// this.accountHolderName=accountHolderName;
// this.balance=balance;

// }

// deposit(amount){
// let newBalance = this.balance+amount;
// this.balance=newBalance;
// console.log(newBalance);

// }

// withdraw(amount){
// let newBalance = this.balance-amount;
// this.balance=newBalance;

// }

// transfer(amount, accountSender, accountReceiver){
//     accountSender.withdraw(amount);
// accountReceiver.deposit(amount);


// }


// }

// let bankAccountOne = new BankAccount (3133, 'mr smith', 450);
// console.log(bankAccountOne);
// bankAccountOne.withdraw(50);
// console.log(bankAccountOne);

// let bankAccountTwo = new BankAccount (483, 'mr sth', 100);
// console.log(bankAccountOne);
// console.log(bankAccountOne);



// console.log(bankAccountOne);
// console.log(bankAccountTwo);



// bankAccountOne.transfer(250, bankAccountOne, bankAccountTwo);
// console.log(bankAccountOne);
// console.log(bankAccountTwo);

// bankAccountOne.transfer(150, bankAccountOne, bankAccountTwo);
// console.log(bankAccountOne);
// console.log(bankAccountTwo);

//Exercise 12
class University
{constructor(uniName, [])

{this.uniName=uniName;
this.departments=[];
}
addDept(department){
this.departments.push(department);
console.log(this.name);
console.log(this.department);

}

removeDept(department){
const index = this.departments.indexOf(department);
this.departments.splice(index, 1);

}

displayDepts(){

    console.log(this.departments);
}

}

let Uni1 = new University('harvard', []);
let Uni2 = new University('stanford', []);

console.log(Uni1);
Uni1.addDept('science');
console.log(Uni1);
Uni1.addDept('finance');
console.log(Uni1);

Uni1.removeDept('science');
console.log(Uni1);


Uni1.addDept('hr');
console.log(Uni1);

Uni1.addDept('research');
console.log(Uni1);


Uni1.displayDepts();

//currently updating previously console logged Objs 
//to reflect current changes - not sure why - working otherwise

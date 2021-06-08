console.log('Hello');

// Single line comment

/* 

Multiple line comment 

*/

var productName = 'Tinned Beans';
let price = '0.40';
const quantity = 1;
var inStock = true;
let discountAmount = 0;

function showProductName(){
    //code goes here
    console.log(productName);
}

showProductName();

function totalPrice(productPrice,productQuantity){
    console.log(productPrice * productQuantity);
}

totalPrice(10,5);

// function checkAvailability(productInStock){
//     console.log(productInStock);
// }

// checkAvailability(productInStock){
//     console.log(productInStock);
// }

// var checkAvailability = (productInStock) => {
//     console.log(productInStock);
// }

var checkAvailability = productInStock => console.log(productInStock);

checkAvailability(5);


var number = 25;

function checkNumber(number){
    if(number < 10){
        return number + ' is less than 10';
    } else if(number < 20){
        return number + ' is less than 20 but more than 10';
    } else if(number < 30){
        return number + ' is less than 30 and more than 20';
    } else {
        return number + ' is not less than 30';
    }
}

console.log(checkNumber(8));
console.log(checkNumber(25));
console.log(checkNumber(34));
console.log(checkNumber(14));
console.log(checkNumber(12));

function drinkOrder(drink,size){
    // console.log(drink);
    // console.log(size);
    let strMessage = 'you have ordered a ' + size;
    let blnValidated = true;
    if(size != 'large' && size != 'medium' && size != 'small'){
        blnValidated = false;
        strMessage = 'you have ordered a size we do not sell';
    }
    if(blnValidated){
        switch(drink){
            case 'cola':
                strMessage += ' Coca-Cola';
                break;
            case 'lemon':
                strMessage += ' Schweppes';
                break;
            case 'orange':
                strMessage += ' Tango';
                break;
            default:
                strMessage = 'You have ordered a drink we do not sell';
                break;
        }
    }
    console.log(strMessage);
}

drinkOrder('cola','large');
drinkOrder('lemon','medium');
drinkOrder('orange','small');
drinkOrder('coffee','small');
drinkOrder('orange','seymour');

function calculator(number1,number2,operator){
    let sum;
    let blnValidated = true;
    if(isNaN(number1)){
        blnValidated = false;
        sum = 'Number1 is not a valid number';
    }
    if(isNaN(number2)){
        blnValidated = false;
        sum = 'Number2 is not a valid number';
    }
    if(blnValidated){
        switch(operator){
            case '+':
                sum = number1 + number2;
            break;
            case '-':
                sum = number1 - number2;
            break;
            case '*':
                sum = number1 * number2;
            break;
            case '/':
                sum = number1 / number2;
            break;
            case '%':
                sum = number1 % number2;
            break;
            default:
                sum = 'Operator is not valid';
        }
    }
    console.log(sum);
}

calculator(10,5,'+');
calculator(10,5,'-');
calculator(10,5,'*');
calculator(10,5,'/');
calculator(10,5,'%');
calculator('alex',5,'+');
calculator(10,'alex','+');
calculator(10,5,'alex');

let arrItems = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrItems);

let firstItem = arrItems[0];
let lastItem = arrItems[4];

// console.log(firstItem);
// console.log(lastItem);

let objItems = {
    productName:'Tinned Beans',
    price:'0.40',
    quantity:1,
    inStock:true,
    discountAmount:0,
};

console.log(objItems.productName);

console.log(objItems['quantity']);

console.log(objItems);

objItems.productName = 'Sliced Bread';

objItems['quantity'] = 10;

console.log(objItems);

objItems.newVariable = 'New';

objItems['anotherNewVariable'] = 'Another';

console.log(objItems);

arrColours = ['red','green','yellow','orange','blue'];

console.log(arrColours);

for(let counter=0; counter < arrColours.length; counter++){
    
    console.log(counter);

    console.log(arrColours[counter]);

}

function outputTimesTables(number){
    for(multiplyer=1; multiplyer <= 12; multiplyer++){
        let sum = multiplyer * number;
        strMessage = number + ' * ' + multiplyer + ' = ' + sum;
        console.log(strMessage);
    }
}

for(counter=1; counter <= 12; counter++){
    outputTimesTables(counter);
}

console.log(shoppingCart);

function totalPriceOfShopping(arrCart,objCoupon){
    console.log(objCoupon);
    //SET totalPrice = 0
    let totalPrice = 0;
    //LOOP through arrCart
    for(arrCartKey=0; arrCartKey < arrCart.length; arrCartKey++){
        let currentItem = arrCart[arrCartKey];
        // console.log(currentItem);
        //SET itemPrice = quantity * price
        let currentItemPrice = currentItem.quantity * currentItem.price;
        // UPDATE totalPrice + itemPrice
        if(objCoupon){
            blnApplyDiscount = false;
            if(objCoupon.productType == 'all'){
                blnApplyDiscount = true;
            }
            if(objCoupon.productType.includes(currentItem.type)){
                blnApplyDiscount = true;
            }
            switch(objCoupon.type){
                case 'percent':
                    if(blnApplyDiscount){
                        currentItemPrice = (currentItemPrice / 100) * objCoupon.value;
                    }
                break;
                case 'flat':
                    if(blnApplyDiscount){
                        currentItemPrice = currentItemPrice - objCoupon.value;
                    }
                break;
            }
        }
        totalPrice = totalPrice + currentItemPrice;
    }
    //RETURN totalPrice
    if(objCoupon){
        if(objCoupon.type == 'fixed'){
            totalPrice = totalPrice - objCoupon.value;
        }
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}

objCouponData = {
    type:'percent',
    productType:['toiletries','beverages'],
    value:'50'
}

console.log(totalPriceOfShopping(shoppingCart,objCouponData));
const multiply = (x , y) => {
    return x * y;
};
const concatenatedOdds =(arr1,arr2) => { 
const newArr =arr1.concat(arr2)
const newArr2 = newArr.filter((num, i) => {
    return (num % 2 === 1);
    // &&  (newArr.indexOf(num)== -1)
})

return newArr2;
        }
    
module.exports = { multiply, concatenatedOdds } 

// Functional Test:
// user clicks Shopping Cart
// User clicks Checkout
// If cart is empty there is link to homepage to add items to their shopping cart
// User has items in their shopping cart and clicks checkout but not signed in. Pop up window to allow them to continue as guest or log in
// user selects continues as guest and then have to complete basic profile info(Name, shipping address, phone number,credit card info)
// once done ask user if they want to proceed to checkout or create an account to save time next time
// user selects log in and has to input username and password and click log submit. Once logged it takes them back to checkout screen
// once on the checkout screen greet the user with their name and ask the user do they want to use the credit card saved or add a new credit card
// once credit card info is confirmed and user selects proceed, the Order summary page is displayed
// After reviewing order summary with items in shopping cart and shipping address, User must select place order button
// once Place order button is pressed then they should received successful confirmation and details of the order like order # and when they should expect to received their items


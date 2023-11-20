// UnitTestLogic.js

console.log("Block 18 Workshop: Writing Test Specifications");

// Unit Tests for 'multiplication' Function
console.log("\nTest Specifications for 'multiplication' Function:");
console.log("Expect multiplication(2, 3) to be a number.");
console.log("Expect multiplication(2, 3) to equal 6.");
console.log("Expect multiplication('a', 3) to be an error.");
console.log("Expect multiplication(0, 5) to equal 0.");
console.log("Expect multiplication(-2, 3) to equal -6.");
console.log("Expect multiplication(2, -3) to equal -6.");
console.log("Expect multiplication(-2, -3) to equal 6.");
console.log("Expect multiplication(2.5, 4) to be a number and possibly a decimal.");

// Unit Tests for 'concatOdds' Function
console.log("\nTest Specifications for 'concatOdds' Function:");
console.log("Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to return [-1, 1, 3, 9, 15].");
console.log("Expect concatOdds([], []) to return an empty array.");
console.log("Expect concatOdds(['a', 2], [1, 3]) to return an error or ignore the string.");
console.log("Expect concatOdds([3, 5, 7], [2, 4, 6]) to return [3, 5, 7].");
console.log("Expect concatOdds([3, 3, 3], [3, 3]) to return [3, 3, 3, 3, 3].");
console.log("Expect concatOdds([-3, -2, -1], [0, 1, 2]) to return [-3, -1, 1].");

// Functional Tests for Shopping Cart Checkout Feature
console.log("\nFunctional Test Specifications for Shopping Cart Checkout Feature:");
console.log("When a user tries to checkout with an empty cart, they should be notified that the cart is empty.");
console.log("When checking out as a guest, the process should be quick with an optional account creation suggestion.");
console.log("After guest checkout, prompt for account creation or login with an optional continuation as a guest.");
console.log("Logged-in users should have a streamlined checkout with autofilled account information.");
console.log("When choosing to create an account during checkout, guide the user through the account creation process.");
console.log("Before finalizing the purchase, show a summary of cart items and total cost for review.");
console.log("If payment or shipping information is invalid, prompt the user to correct it.");
console.log("On successful purchase, confirm with a message or email.");

// Additional JavaScript logic related to the workshop can be below if I come up with more)
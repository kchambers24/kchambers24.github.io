var answer1 = items.reduce((total, current) => total + current.price, 0)/25
$(".textOne").append(answer1);

var answer2 = items.filter ( (items) => items.price >= 14 && items.price <= 18 ).map((items) => items.title)
$(".textTwo").append(`${answer2.join("<br>")} `);

var answer3 = items.filter ( (items) => items.currency_code === "GBP").map((items) => items.title)
$(".textThree").append(answer3);

var answer4 = items.filter ( (items) => items.materials.includes("wood")).map((items) => items.title)
$(".textFour").append(`${answer4.join("<br>")} `);

var answer5 = items.filter ( (items) => items.materials.length >= "8").map((items) => `<br><strong>Name:</strong> ${items.title} has ${items.materials.length} <br> <strong>Materials:</strong> ${items.materials.join("<br>")}`);
$(".textFive").append(answer5);

var answer6 = items.filter ( (items) => items.who_made === "i_did").map((items) => items.title).length
$(".textSix").append(answer6 + " were made by their sellers");

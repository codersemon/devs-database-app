// Getting devs object keys
const devKeys = Object.keys(devs[0]);

// getting query data type
let queryType = prompt(
  `Write data type by which you want to search. Available data types are "${devKeys.join(
    ", "
  )}"`
);

// Converting to lowercase from user input
queryType = queryType.toLowerCase();

// Getting All Devs Info
const devsStack = []; // storing all developers stack name
const devsAge = []; // storing all developers age
const devsIncome = []; // storing all developers income

devs.forEach((item) => {
  devsStack.push(item.stack); //push stack name
  devsAge.push(item.age); //push age
  devsIncome.push(item.income); //push income
});

// Creating prompt based on data type from queryType variable
let searchTerm;
switch (queryType) {
  case "stack":
    searchTerm = prompt(
      `Type Developer Stack. Available stack are ${devsStack.join(", ")}`
    );
    break;

  case "name":
    searchTerm = prompt("Type Developer name");
    break;

  case "id":
    searchTerm = prompt(`Type Developer id between 1 - ${devs.length}`);
    searchTerm = parseInt(searchTerm);
    break;

  case "address":
    searchTerm = prompt("Type Developer Address");
    break;

  case "income":
    searchTerm = prompt(
      `Type Developer minimum income between ${Math.min(
        ...devsIncome
      )} - ${Math.max(...devsIncome)}`
    );
    searchTerm = parseInt(searchTerm);
    break;

  case "age":
    searchTerm = prompt(
      `Type Developer minimum age between ${Math.min(...devsAge)} - ${Math.max(
        ...devsAge
      )}`
    );
    searchTerm = parseInt(searchTerm);
    break;
}

/**
 *
 * @param {Devs object property} property
 * @param {Devs data} term
 * @returns
 */
function getDevs(property, term) {
  if ("age" == property || "income" == property) {
    return devs.filter((item) => item[property] >= term);
  } else if (
    "name" == property ||
    "address" == property ||
    "stack" == property ||
    "id" == property
  ) {
    return devs.filter((item) => item[property] === term);
  }
}

console.table(getDevs(queryType, searchTerm));

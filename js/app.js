'use strict;'

var pizzaData = [];
var allStoreData = [];
var weeklyPizzaOdyssey = [];


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaStore(name, minSales, maxSales) {
  this.name = name;
  this.PerHrData = [];
  allStoreData.push(this);
}

var ballard = new PizzaStore('Ballard');
var firstHill = new PizzaStore('First Hill');
var intlDist = new PizzaStore('International District');
var sLakeUnion = new PizzaStore('South Lake Union');
var georgeTown = new PizzaStore('George Town');
var ravenna = new PizzaStore('Ravenna');
var perDayData = [];

PizzaStore.prototype.pushData = function (data) {
  this.PerHrData.push(data);
}

function PerHrData(time, minSales, maxSales, minDeliveries, maxDeliveries) {
  this.time = time;
  this.pizzasSold = getRandom(minSales, maxSales);
  this.deliveriesMade = getRandom(minDeliveries, maxDeliveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
  pizzaData.push(this.pizzasSold);
  // this.result = getRandom(minSales, maxSales);
  // pizzaData.push(result);
}

ballard.pushData(new PerHrData('8:00 am', 0, 3, 1, 7));
ballard.pushData(new PerHrData('9:00 am', 0, 3, 1, 7));
ballard.pushData(new PerHrData('10:00 am', 0, 3, 1, 7));
ballard.pushData(new PerHrData('11:00 am', 5, 10, 2, 8));
ballard.pushData(new PerHrData('12:00 pm', 5, 10, 2, 8));
ballard.pushData(new PerHrData('1:00 pm', 5, 10, 2, 8));
ballard.pushData(new PerHrData('2:00 pm', 2, 13, 1, 7));
ballard.pushData(new PerHrData('3:00 pm', 2, 13, 1, 7));
ballard.pushData(new PerHrData('4:00 pm', 2, 13, 1, 7));
ballard.pushData(new PerHrData('5:00 pm', 0, 15, 2, 9));
ballard.pushData(new PerHrData('6:00 pm', 0, 15, 2, 9));
ballard.pushData(new PerHrData('7:00 pm', 0, 15, 2, 9));
ballard.pushData(new PerHrData('8:00 pm', 1, 3, 4, 12));
ballard.pushData(new PerHrData('9:00 pm', 1, 3, 4, 12));
ballard.pushData(new PerHrData('10:00 pm', 1, 3, 4, 12));
ballard.pushData(new PerHrData('11:00 pm', 8, 15, 6, 16));
ballard.pushData(new PerHrData('12:00 am', 8, 15, 6, 16));
ballard.pushData(new PerHrData('1:00 am', 8, 15, 6, 16));


firstHill.pushData(new PerHrData('8:00 am', 1, 3, 1, 7));
firstHill.pushData(new PerHrData('9:00 am', 1, 3, 1, 7));
firstHill.pushData(new PerHrData('10:00 am', 1, 3, 1, 7));
firstHill.pushData(new PerHrData('11:00 am', 5, 9, 2, 8));
firstHill.pushData(new PerHrData('12:00 pm', 5, 9, 2, 8));
firstHill.pushData(new PerHrData('1:00 pm', 5, 9, 2, 8));
firstHill.pushData(new PerHrData('2:00 pm', 2, 13, 1, 6));
firstHill.pushData(new PerHrData('3:00 pm', 2, 13, 1, 6));
firstHill.pushData(new PerHrData('4:00 pm', 2, 13, 1, 6));
firstHill.pushData(new PerHrData('5:00 pm', 18, 32, 3, 9));
firstHill.pushData(new PerHrData('6:00 pm', 18, 32, 3, 9));
firstHill.pushData(new PerHrData('7:00 pm', 18, 32, 3, 9));
firstHill.pushData(new PerHrData('8:00 pm', 1, 3, 5, 12));
firstHill.pushData(new PerHrData('9:00 pm', 1, 3, 5, 12));
firstHill.pushData(new PerHrData('10:00 pm', 1, 3, 5, 12));
firstHill.pushData(new PerHrData('11:00 pm', 8, 20, 6, 16));
firstHill.pushData(new PerHrData('12:00 am', 8, 20, 6, 16));
firstHill.pushData(new PerHrData('1:00 am', 8, 20, 6, 16));

intlDist.pushData(new PerHrData('8:00 am', 0, 4, 0, 4));
intlDist.pushData(new PerHrData('9:00 am', 0, 4, 0, 4));
intlDist.pushData(new PerHrData('10:00 am', 0, 4, 0, 4));
intlDist.pushData(new PerHrData('11:00 am', 0, 7, 0, 4));
intlDist.pushData(new PerHrData('12:00 pm', 0, 7, 0, 4));
intlDist.pushData(new PerHrData('1:00 pm', 0, 7, 0, 4));
intlDist.pushData(new PerHrData('2:00 pm', 2, 15, 1, 4));
intlDist.pushData(new PerHrData('3:00 pm', 2, 15, 1, 4));
intlDist.pushData(new PerHrData('4:00 pm', 2, 15, 1, 4));
intlDist.pushData(new PerHrData('5:00 pm', 10, 26, 4, 6));
intlDist.pushData(new PerHrData('6:00 pm', 10, 26, 4, 6));
intlDist.pushData(new PerHrData('7:00 pm', 10, 26, 4, 6));
intlDist.pushData(new PerHrData('8:00 pm', 8, 22, 7, 15));
intlDist.pushData(new PerHrData('9:00 pm', 8, 22, 7, 15));
intlDist.pushData(new PerHrData('10:00 pm', 8, 22, 7, 15));
intlDist.pushData(new PerHrData('11:00 pm', 0, 2, 2, 8));
intlDist.pushData(new PerHrData('12:00 am', 0, 2, 2, 8));
intlDist.pushData(new PerHrData('1:00 am', 0, 2, 2, 8));


sLakeUnion.pushData(new PerHrData('8:00 am', 0, 4, 0, 4));
sLakeUnion.pushData(new PerHrData('9:00 am', 0, 4, 0, 4));
sLakeUnion.pushData(new PerHrData('10:00 am', 0, 4, 0, 4));
sLakeUnion.pushData(new PerHrData('11:00 am', 0, 7, 0, 4));
sLakeUnion.pushData(new PerHrData('12:00 pm', 0, 7, 0, 4));
sLakeUnion.pushData(new PerHrData('1:00 pm', 0, 7, 0, 4));
sLakeUnion.pushData(new PerHrData('2:00 pm', 5, 15, 0, 4));
sLakeUnion.pushData(new PerHrData('3:00 pm', 5, 15, 0, 4));
sLakeUnion.pushData(new PerHrData('4:00 pm', 5, 15, 0, 4));
sLakeUnion.pushData(new PerHrData('5:00 pm', 25, 39, 13, 18));
sLakeUnion.pushData(new PerHrData('6:00 pm', 25, 39, 13, 18));
sLakeUnion.pushData(new PerHrData('7:00 pm', 25, 39, 13, 18));
sLakeUnion.pushData(new PerHrData('8:00 pm', 22, 36, 5, 22));
sLakeUnion.pushData(new PerHrData('9:00 pm', 22, 36, 5, 22));
sLakeUnion.pushData(new PerHrData('10:00 pm', 22, 36, 5, 22));
sLakeUnion.pushData(new PerHrData('11:00 pm', 5, 21, 16, 31));
sLakeUnion.pushData(new PerHrData('12:00 am', 5, 21, 16, 31));
sLakeUnion.pushData(new PerHrData('1:00 am', 5, 21, 16, 31));


georgeTown.pushData(new PerHrData('8:00 am', 2, 7, 3, 5));
georgeTown.pushData(new PerHrData('9:00 am', 2, 7, 3, 5));
georgeTown.pushData(new PerHrData('10:00 am', 2, 7, 3, 5));
georgeTown.pushData(new PerHrData('11:00 am', 3, 8, 3, 9));
georgeTown.pushData(new PerHrData('12:00 pm', 3, 8, 3, 9));
georgeTown.pushData(new PerHrData('1:00 pm', 3, 8, 3, 9));
georgeTown.pushData(new PerHrData('2:00 pm', 1, 5, 1, 4));
georgeTown.pushData(new PerHrData('3:00 pm', 1, 5, 1, 4));
georgeTown.pushData(new PerHrData('4:00 pm', 1, 5, 1, 4));
georgeTown.pushData(new PerHrData('5:00 pm', 5, 13, 2, 4));
georgeTown.pushData(new PerHrData('6:00 pm', 5, 13, 2, 4));
georgeTown.pushData(new PerHrData('7:00 pm', 5, 13, 2, 4));
georgeTown.pushData(new PerHrData('8:00 pm', 22, 41, 15, 42));
georgeTown.pushData(new PerHrData('9:00 pm', 22, 41, 15, 42));
georgeTown.pushData(new PerHrData('10:00 pm', 22, 41, 15, 42));
georgeTown.pushData(new PerHrData('11:00 pm', 15, 20, 6, 21));
georgeTown.pushData(new PerHrData('12:00 am', 15, 20, 6, 21));
georgeTown.pushData(new PerHrData('1:00 am', 15, 20, 6, 21));


ravenna.pushData(new PerHrData('8:00 am', 0, 4, 0, 4));
ravenna.pushData(new PerHrData('9:00 am', 0, 4, 0, 4));
ravenna.pushData(new PerHrData('10:00 am', 0, 4, 0, 4));
ravenna.pushData(new PerHrData('11:00 am', 0, 7, 0, 4));
ravenna.pushData(new PerHrData('12:00 pm', 0, 7, 0, 4));
ravenna.pushData(new PerHrData('1:00 pm', 0, 7, 0, 4));
ravenna.pushData(new PerHrData('2:00 pm', 2, 15, 1, 4));
ravenna.pushData(new PerHrData('3:00 pm', 2, 15, 1, 4));
ravenna.pushData(new PerHrData('4:00 pm', 2, 15, 1, 4));
ravenna.pushData(new PerHrData('5:00 pm', 6, 9, 5, 18));
ravenna.pushData(new PerHrData('6:00 pm', 6, 9, 5, 18));
ravenna.pushData(new PerHrData('7:00 pm', 6, 9, 5, 18));
ravenna.pushData(new PerHrData('8:00 pm', 4, 8, 2, 5));
ravenna.pushData(new PerHrData('9:00 pm', 4, 8, 2, 5));
ravenna.pushData(new PerHrData('10:00 pm', 4, 8, 2, 5));
ravenna.pushData(new PerHrData('11:00 pm', 2, 4, 3, 11));
ravenna.pushData(new PerHrData('12:00 am', 2, 4, 3, 11));
ravenna.pushData(new PerHrData('1:00 am', 2, 4, 3, 11));

function getPizzaOdysseys(pizzaData) {
  var pizzaOdyssey = 0;
  for (var i = pizzaData.length; i--;) {
    pizzaOdyssey += pizzaData[i];
  }
  weeklyPizzaOdyssey = pizzaOdyssey;

  function displayPizzaOdyssey(weeklyPizzaOdyssey) {
    var allThePizza = document.createElement('p');
    allThePizza.textContent = weeklyPizzaOdyssey +
      ' happy pizza odysseys this week!';

    if (document.getElementById('odyssey')) {
      document.getElementById('odyssey').appendChild(allThePizza);
    }
  }
  displayPizzaOdyssey(weeklyPizzaOdyssey);
}
getPizzaOdysseys(pizzaData);

if (document.getElementById('all-store-data')) {

  function createDataRow(inputArray) {
    var row = document.createElement('tr');
    var col;
    for (var i = 0; i < inputArray.length; i++) {
      col = document.createElement('td');
      col.textContent = inputArray[i];
      row.appendChild(col);
    }
    return row;
  }

  function createHeadingRow(inputArray) {
    var row = document.createElement('tr');
    var col;
    for (var i = 0; i < inputArray.length; i++) {
      col = document.createElement('th');
      col.textContent = inputArray[i];
      row.appendChild(col);
    }
    return row;
  }

  function createTable(location) {
    var dataTable = document.createElement('table');
    dataTable.setAttribute('id', location.name);
    var firstRow = createHeadingRow(['Time', 'Pizzas Sales', 'Deliveries Made',
      'Delivery Drivers Needed'
    ]);
    dataTable.appendChild(firstRow);

    for (var i = 0; i < location.PerHrData.length; i++) {
      var theRow = createDataRow([location.PerHrData[i].time, location.PerHrData[
        i].pizzasSold, location.PerHrData[i].deliveriesMade, location.PerHrData[
        i].driversNeeded]);
      dataTable.appendChild(theRow);
    }

    return dataTable;
  }

  function createHeader(location) {
    var locationHeading = document.createElement('h1');
    locationHeading.textContent = location.name;
    return locationHeading;
  }

  function renderStoreToTable(location) {
    var locationHeading = createHeader(location);
    var locationTable = createTable(location);
    document.getElementById('all-store-data').appendChild(locationHeading);
    document.getElementById('all-store-data').appendChild(locationTable);
  }

  renderStoreToTable(ballard);
  renderStoreToTable(firstHill);
  renderStoreToTable(intlDist);
  renderStoreToTable(sLakeUnion);
  renderStoreToTable(georgeTown);
  renderStoreToTable(ravenna);

}


function addToExistingTable(location) {
  for (var i = 0; i < location.PerHrData.length; i++) {
    var newRow = createDataRow([location.PerHrData[i].time, location.PerHrData[
      i].pizzasSold, location.PerHrData[i].deliveriesMade, location.PerHrData[
      i].driversNeeded]);
    document.getElementById(location.name).appendChild(theRow);
  }
}

function newStoreInfoSubmission(event) {

  event.preventDefault();

  var name = event.target.newstorename.value;
  var minSales = parseInt(event.target.newstoreminsales.value);
  var maxSales = parseInt(event.target.newstoremaxsales.value);
  var minDeliveries = parseInt(event.target.newstoremindeliveries.value);
  var maxDeliveries = parseInt(event.target.newstoremaxdeliveries.value);
  var time = event.target.newstoretime.value;

  var newStore = new PizzaStore(name);
  newStore.pushData(new PerHrData(time, minSales, maxSales, minDeliveries,
    maxDeliveries));

  if (document.getElementById(name)) {
    addToExistingTable(newStore);
  } else {
    renderStoreToTable(newStore);
  }
}

var createNewStoreForm = document.getElementById('new-store-form');

if (document.getElementById('new-store-form')) {
  createNewStoreForm.addEventListener('submit', newStoreInfoSubmission);
};

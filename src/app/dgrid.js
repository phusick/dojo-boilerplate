require(['dojo/_base/declare', 'dgrid/Grid', 'dgrid/Selection'], function(declare, Grid, Selection) {

  var data = [
    { first: "Bob", last: "Barker", age: 89 },
    { first: "Vanna", last: "White", age: 55 },
    { first: "Pat", last: "Sajak", age: 65 }
  ];

  var grid = new declare([Grid, Selection])({
    columns: {
      first: 'First Name',
      last: 'Last Name',
      age: 'Age'
    }
  }, 'grid');

  grid.renderArray(data);

});

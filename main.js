// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var container = document.getElementById('customers');

  var header = document.createElement('h1');
  header.innerHTML = 'INTERNAL COMPANY DIRECTORY';
  container.appendChild(header);

  //main div of people
  var mainDiv = document.createElement('div');
  mainDiv.className = 'mainDiv';
  container.appendChild(mainDiv);


  // console.log(container);

  fetch(url).then(function(response){
    response.json().then(function(data){
      // console.log(data.results.length);
      for(var i = 0; i < data.results.length; i++){
        var person = data.results[i];
        // console.log(data);
      displayCustomer(person);
      }

    });
  });
function displayCustomer(person){


  //create individual div for each person
  var personData = document.createElement('div');
  personData.className = 'personData';
  mainDiv.appendChild(personData);

  //customer's last name
  // var customerLast = document.createElement("div");
  // customerLast.innerHTML = person.name.last;
  // customerLast.className = 'last';
  // personData.appendChild(customerLast);

  //customer's picture
  var customerPicture = document.createElement("div");
  customerPicture.innerHTML = '<img src="' + person.picture.large + '">';
  customerPicture.className = 'picture';
  personData.appendChild(customerPicture);

  //customer's name
  var customerName = document.createElement("div");
  customerName.innerHTML = person.name.first + " " + person.name.last;
  customerName.className = 'name';
  personData.appendChild(customerName);

  //customer's email
  var customerEmail = document.createElement("div");
  customerEmail.innerHTML = person.email;
  customerEmail.className = 'email';
  personData.appendChild(customerEmail);

  //customer's street
  var customerStreet = document.createElement("div");
  customerStreet.innerHTML = person.location.street;
  customerStreet.className = 'street';
  personData.appendChild(customerStreet);

  //customer's state
  var customerState = document.createElement("div");
  customerState.innerHTML = person.location.city + "," + " " + person.location.state;
  customerState.className = 'state';
  personData.appendChild(customerState);

  //customer's phone number
  var customerNumber = document.createElement("div");
  customerNumber.innerHTML = person.phone;
  customerNumber.className = 'number';
  personData.appendChild(customerNumber);


}

})();

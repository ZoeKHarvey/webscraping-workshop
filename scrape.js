var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare 
  .goto('https://gopuff.com/home')
  .wait('.c-control__button')
  .click('.c-control__button')
  .wait(9000)
  .click('.puffButton')
  .wait(1000)
  .click('#mapAddAdddress')
  .wait(2000)
  .wait(2000)
  .evaluate(function (result, done) {
    const addressError = document.querySelector('.c-header__address-danger-wrap')
    if(addressError) {
      return 'Address not in range for delivery';
    } else {
      return 'Snacks can be delivered!'
    }
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  });
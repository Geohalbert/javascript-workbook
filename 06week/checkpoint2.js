let userArray = [
    {
            "customer": {
                "id": 1,
                "customerName":"Marilyn Monroe",
                "customerCity":"New York City",
                "customerState":"NY",
                "product":"Yellow Chair",
                "productPrice": 19.99
            }
        },
        {
            "customer": {
                "id": 2,
                "customerName":"Abraham Lincoln",
                "customerCity":"Boston",
                "customerState":"MA",
                "product":"Movie Tickets",
                "productPrice": 27.00
            }
        },
                {
            "customer": {
                "id": 3,
                "customerName":"John F. Kennedy",
                "customerCity":"Dallas",
                "customerState":"TX",
                "product":"Mustang Convertible",
                "productPrice": 24999.99
            }
        },
                {
            "customer": {
                "id": 4,
                "customerName":"Martin Luther King",
                "customerCity":"Burmingham",
                "customerState":"AL",
                "product":"Sandwiches",
                "productPrice": 7.99
            }
        },
];

const cust = userArray.map((customer) => {
  let user_name = customer.customer.customerName;
  let amount = customer.customer.productPrice;
  let product = customer.customer.product;
  let city = customer.customer.customerCity;
  let state = customer.customer.customerState;
  return console.log(user_name+' paid '+amount+' for '+product+' in '+city+', '+state+'.');
});

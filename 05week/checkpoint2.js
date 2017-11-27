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
/**
* @param cust is the mapped result of userArray
*/
const cust = userArray.map((customer) => {
    return customer;
})
for (i=0; i<cust.length; i++){
  let user_name = cust[i].customer.customerName;
  let amount = cust[i].customer.productPrice;
  let product = cust[i].customer.product;
  let city = cust[i].customer.customerCity;
  let state = cust[i].customer.customerState;
  console.log(user_name+' paid '+amount+' for '+product+' in '+city+', '+state+'.');
}

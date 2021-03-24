# # Explain the difference between these blocks of code

```
for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}
 
footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})
```
There are no difference between these two lines of code, It really comes down to the preference of the developer. However, here are some things to consider when choosing between (a for loop) and the (forEach method). The good thing about forEach is that the callback function within it allows you to keep that variable within the forEach’s scope. If you’ve assigned a variable outside and re-use it within the forEach, the outside variable retains its value.

# # Create an array with three elements
const products =[
  {
  name: 'laptop',
  amount: 7000,
  count: 5
  },
  {
    name: 'desktop',
    amount:3000,
    count: 7
    },
    {
      name: 'phone',
    amount:3000,
    count: 10
    }
  ];
  const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.amount * item.count
  }));

  console.log(totalProductsValue);

//MyDOM/event listener assignment link

https://adefisayo247.github.io/FORM/event-listener/index.html

//MyLOOP assignment link

https://adefisayo247.github.io/Loop-Practice/Loop-practical/loop.html
```
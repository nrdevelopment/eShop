# NRDev-eShop

They nrdev-eshop is a little ecommerce helper for javascript. It is adding a few js files for managing the backend of your shop.
You can create an eShop, add or delete some Items, change the properties of items and put them inside collections and a shopping cart.
With the collections you can create like 'categories' e.g. shoe-collection or shirt-collection.

## Installation

The installation is very easy just hitting this code to your console in your project:

`npm i nrdev-eshop --save`

## Usage:

First of all you need to import the shop and create a new one:

### Shop import:

```javascript
import { EShop } from "nrdev-eShop";

const shop = new EShop();
shop.doSomething();
```

### Adding items to your Shop:

You cann add a new eShopItem to the eshop by hitting this code:

```javascript
/*
default:  shop.addShopItem(id, name, singlePrice);
example:
*/
shop.addShopItem(1, "Red shoe", 49.99);
```

This is adding a Red shoe to your Shop with id 1 and a price of 49.99. You get back a number like 49.99 and then it depends on you what kind of currency you want to use. e.g 49.99$ or 49.99€ ...

The inputs id, name and singlePrice **must not be a null value**! The id is working like a primary key in a sql database, so you can't create two shopItems with the same id.
If you get an array of values from your database or any else kind of source, you can fill the shop by iterating throw the array. If you are not sure about the price yet, you can first set it to 0.0.

### Removing shopItem from the shop:

You can also remove the shopItem again from the shop. You can use the id (reason for unique id values) or you can use the EShopItem Object to delete it from the shop.

```javascript
let item = shop.addShopItem(1, "Red shoe", 49.99);

//default: shop.removeItemById(id);
shop.removeItemById(1);
// --OR--
shop.removeItem(item);
```

### Change the shopItem:

You can modify your shop Item by getting and setting the properties of the item. You can also add new properties to the ShopItem Objects. Here some examples about what is possible:

```javascript
//creating a shopItem using this function returns the EShopItem-Object.
let shopItem = shop.addShopItem(1, "Red shoe", 49.99);

//you can change the amount of the item.
//This also changes the price if you have amount of 2 then your price will return 2*singlePrice. In that case 99.98
shopItem.increaseAmount();
shopItem.decreaseAmount();

//you can get the price of item times the amount (amount*singlePrice)
shopItem.getPrice(); //-> this returns 99.98 if the amount is set to 2.

//You can directly change or add new properties/functions to the shopItem like this:
shopItem.id = 2;
shopItem.name = "Blue shoe";
shopItem.amount = 3;
shopItem.singlePrice = 39.99;

shopItem.newProperty = someValue;
shopItem.newFunction = function () {
  //...do something;
};

//You can also use an existing function for adding new properties to your item. This will automatically create "get" and "set" functions.
//Here is an example:
let shopItem = shop.addShopItem(3, "yellow shoe", 29.99);

//default shopItem.addProperty(name,value);
shopItem.addProperty("weight", "358g");
shopItem.getWeight(); //-> this will return "358g";

shopItem.setWeight("299g");
shopItem.getWeight(); //-> this will return "299g";

shopItem.weight = "429g";
shopItem.getWeight(); //-> this will return "429g";
```

### Creating and using Collections:

Collections are simplified just kind of arrays with some extra properties. You can create a collection, add, remove items and get you a List of Items belonging this collection. Here is an example:

```javascript
let item1 = shop.addShopItem(1, "Red shoe", 49.99);
let item2 = shop.addShopItem(2, "Blue shoe", 29.99);
let items = [item1, item2];

//default shop.createCollection(id, name, description);
let shoes = shop.createCollection(
  1,
  "Shoes",
  "The new collection of colored shoes."
);
shoes.addCollItem(item1);
shoes.addCollItem(item2);
// -- OR adding an array of items --
shoes.addCollItems(items);

//you can also remove it again:
shoes.removeCollItem(item2);
// -- OR --
shoes.removeCollItemById(2);

//You can get the list of items of the collection and use it:
let allshoes = shoes.getItems();
```

### Using the shopping cart:

You can put items inside the shopping cart and receive the price and the amount of items inside the cart. Here is an example:

```javascript
let item1 = shop.addShopItem(1, "Red shoe", 49.99);
let item2 = shop.addShopItem(2, "Blue shoe", 29.99);
let items = [item1, item2];

//adding Items to the shopping cart:
shop.addItemToShoppingCart(item1);
//-- OR --
shop.addItemsToShoppingCart(items);

//after adding both to the shopping cart you can get the amount of items and the price of the shopping cart:
shop.getShoppingCart().getItemAmount(); // -> this returns 2 cause of 2 EShopItems.
//if you are increasing the amount of an item like this:
item1.increaseAmount();
shop.getShoppingCart().getItemAmount(); // -> this will still return 2 cause we still have 2 EShopItems but one has an amount of 2.
//if you want to get the current Amount of all items inside the shoppintCart use:
shop.getShoppingCart().getAmount(); // -> this will return 3 cause we have 1 item with amount of 2 and one item with amount of 1

//you can get the price:
shop.getShoppingCart().getCartWorth(); // -> this returns you in our example 2*49.99 + 29.99 = 129,97
```

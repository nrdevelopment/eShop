import { EShopItem } from './eShopItem.js';

/**
 * EShoppingCart is handling the current shopping cart of an eshop.
 */
export function EShoppingCart() {

    /**List filled with all items inside the shoppingCart. */
    let items = new Array();


    /**
     * Add a single ShopItem to the shopping cart.
     * @param {EShopItem} item A EShopItem adding to the cart.
     * @throws { Error { msg }} Error with a message of what gone wrong. NullPointer or IllegalArgument. 
     */
    this.addItem = function(item) {
        if(item === null) { throw { msg:"Item must not be null!"} };
        if(!(item instanceof EShopItem)) { throw { msg:"Only EShopItems are allowed!" } }
        items.push(item);
    }

    /**
     * Adding a list of Items to the shoppingCart.
     * @param {Array(EShopItem)} newItems List of EShopItems that should be added to the shopping cart.
     * @throws {Error{msg}} Error with a message of what gone wrong. NullPointer or IllegalArgument.
     */
    this.addItems = function(newItems) {
        if(newItems === null || newItems.length === 0) { throw { msg: "Items must not be null or empty!"} }
        newItems.forEach( function(item, index) {
            if(!(item instanceof EShopItem)) { throw { msg:"Only EShopItems are allowed!" } }
            items.push(item);
        });
    }

    /**
     * Removing a ShopItem from the shopping cart.
     * @param {Number} id ID of the shopItem that shell be removed.
     * @returns true if the shopItem was removed and false if not.
     */
    this.removeItemById = function(id) {
        let index = -1;
        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                index = items.indexOf(items[i]);
                break;
            }
        }
        if(index > -1) {
            items.splice(index, 1);
            return true;
        } 
        return false;
    }


    /**
     * 
     * @param {EShopItem} item ShopItem that shell be removed from shopping cart.
     * @returns true if the item was removed and false if not. 
     */
    this.removeItem = function(item) {
        if(items.indexOf(item) > -1) {
            items.splice(items.indexOf(item), 1);
            return true;
        }
        return false;
    }


    /**
     * @returns the amount of EShopItems inside the shopping cart. 
     */
    this.getItemAmount = function() {
        return items.length;
    }

    /**
     * @returns the amount of the shopping cart if you have 10times the same shoe its 1 item with amount of 10 so it returns 10.
     */
    this.getAmount = function() {
        let amount = 0;
        if(items.length > 0) {
            items.forEach( function(item, index) {
                amount += item.amount;
            });
        }
        return amount;
    }


    /**
     * Getting the Price of the current filled shopping cart.
     * @returns {Number} current worth. 
     */
    this.getCartWorth = function() {
        let amount = 0;
        if(items.length > 0) {
            items.forEach( function(item, index) {
                amount += item.getPrice();
            });
        }
        return amount;
    }


    /**
     * @returns the List of items inside this shopping cart.
     */
    this.getItemsInCart = function() {
        return items;
    }


    /**
     * Clearing the shopping cart.
     */
    this.clear = function() {
        items.length = 0;
    }


}
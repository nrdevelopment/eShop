import { ECollection } from './eCollection.js';
import { EShopItem } from './eShopItem.js';
import { EShoppingCart } from './eShoppingCart.js';


function EShop() {

    /**ShoppingCart of this shop. */
    let shoppingCart = new EShoppingCart();
    /**Array filled with all items inside this shop. */
    let allItems = new Array();
    /**Array filled with all collections belonging to this shop. */
    let collections = new Array();
    


    /**
     * Adding a Item to the EShop;
     * @param {Number} id Id of the shopItem.
     * @param {String} name Name of the Item.
     * @param {Number} singlePrice Price of the Item.
     * @throws {Error{msg}} throws an error with a message about what have gone wrong. NullPointer, IllegalArgument or Already Exists.
     * @returns {EShopItem} returning the created EShopItem.
     */
    this.addShopItem = function(id, name, singlePrice) {
        if(id === null) { throw {msg:"ID must not be null!"}};
        if(name === null || name === "") { throw {msg:"Name must not be null or empty!"}};
        if(singlePrice < 0.0) { throw {msg:"Price of Item must not be lower then 0.0"}};

        for(let i = 0; i < allItems.length; i++) {
            if(allItems[i].id === id) {
                throw {msg:"An EShopItem with the id '"+id+"' already exists in the shop! Please use another id."};
            }
        }

        let item = new EShopItem(id, name, singlePrice);
        allItems.push(item);
        return item;
    }


    /**
     * Removing a ShopItem from the eShop by ID.
     * @param {Number} id ID of the shopItem that shell be removed.
     * @throws {Error{msg}} if the id is null.
     * @returns true if the shopItem was removed and false if not.
     */
    this.removeItemById = function(id) {
        if(id === null) { throw {msg:"Id must not be null."}};
        let index = -1;
        for(let i = 0; i < allItems.length; i++) {
            if(allItems[i].id === id) {
                index = allItems.indexOf(allItems[i]);
                break;
            }
        }
        if(index > -1) {
            allItems.splice(index, 1);
            shoppingCart.removeItemById(id);
            return true;
        } 
        return false;
    }


    /**
     * Removing an Item from the eShop.
     * @param {EShopItem} item ShopItem that shell be removed from eShop.
     * @throws {Error{msg}} if the item is null or not an instanceof EShopItem.
     * @returns true if the item was removed and false if not. 
     */
    this.removeItem = function(item) {
        if(item === null) { throw {msg:"Item must not be null."}};
        if(!(item instanceof EShopItem)) { throw { msg:"Only 'EShopItems' can be deleted from the shop." } };
        if(allItems.indexOf(item) > -1) {
            items.splice(allItems.indexOf(item), 1);
            shoppingCart.removeItem(item);
            return true;
        }
        return false;
    }


    /**
     * Adding a shopItem to the ShoppingCart.
     * @param {EShopItem} item An EShopItem that shell be added to the shopping cart.
     * @throws {Error{msg}} throws error with a message about what have gone wrong. NullPointer or IllegalArgument. 
     */
    this.addItemToShoppingCart = function (item) {
        try {
            shoppingCart.addItem(item);
        } catch (e) {
            throw e;
        }
    }

    /**
     * Adding a list of EShopItems to the shopping cart.
     * @param {Array(EShopItem)} items List filled with EShopItems.
     * @throws {Error{msg}} throws an error with a message about what have gone wrong. NullPointer or IllegalArgument.
     */
    this.addItemsToShoppingCart = function (items) {
        try {
            shoppingCart.addItems(items);
        } catch (e) {
            throw e;
        }
    }

    /**
     * Creating a new Collecting in the eShop.
     * @param {Number} id Id of the collection.
     * @param {String} name Name of the collection.
     * @param {String} desc Description of the collection.
     * @throws {Error{msg}} if id, name or desc is null.
     * @returns {ECollection} returning a the created ECollection.
     */
    this.createCollection = function(id, name, desc) {
        if(id === null || name === null || desc === null) { throw {msg:"Values must not be null or empty."}};
        for(let i = 0; i < collections.length; i++) {
            if(collections[i].id === id) {
                throw {msg:"A Collection with the id '"+id+"' already exists in the shop! Please use another id."};
            }
        }

        let coll = new ECollection(id, name, desc);
        collections.push(coll);
        return coll;
    }

    
    /**
     * Delete and Collection by ID.
     * @param {Number} id id of the collection that shell be deleted. 
     * @throws {Error{msg}} throwing an NullPointer exception if id is null.
     * @returns true if the collection was deleted and false if not.
     */
    this.deleteCollectionById = function(id) {
        if(id === null) { throw {msg:"ID must not be null"}};
        let index = -1;
        for(let i = 0; i < collections.length; i++) {
            if(collections[i].id === id) {
                index = collections.indexOf(collections[i]);
                break;
            }
        }
        if(index > -1) {
            collections.splice(index, 1);
            return true;
        } 
        return false;
    }

    /**
     * Deleting a collection of the EShop.
     * @param {ECollection} coll ECollection that shell be deleted from the shop.
     * @throws {Error{msg}} throwing error with a message if coll is null or not instanceof ECollection.
     * @returns returning true if the collection was deleted and false if not.
     */
    this.deleteCollection = function(coll) {
        if(coll === null) { throw {msg:"ECollection must not be null"}};
        if(!(coll instanceof ECollection)) { throw { msg:"Only a Collection with the type of 'ECollection' can be deleted!" } };
        if(collections.indexOf(coll) > -1) {
            collections.splice(collections.indexOf(coll), 1);
            return true;
        }
        return false;
    }



    /**
     * @returns the shopping cart of this shop.
     */
    this.getShoppingCart = function() {
        return shoppingCart;
    }

    /**
     * @returns an array filled with all items loaded in this shop.
     */
    this.getAllShopItems = function() {
        return allItems;
    }


}

module.exports.EShop = EShop;
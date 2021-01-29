
import { EShopItem } from './eShopItem.js';

/**
 * ECollection is a List filled with EShopItems that belong to a kind of group. e.g. shoes.
 * @param {Number} id Id of the collection.
 * @param {String} name name of the collection.
 * @param {String} description description of the collection.
 */
export function ECollection(id, name, description) {

    /**Id of the collection to Identify it. */
    this.id = id;
    /**Name of the collection. */
    this.name = name;
    /**Description of the collection. */
    this. description = description;

    let items = new Array();


    /**
     * Add a single ShopItem to the collection.
     * @param {EShopItem} item A EShopItem adding to the collection.
     * @throws { Error { msg }} Error with a message of what gone wrong. NullPointer or IllegalArgument. 
     */
    this.addCollItem = function(item) {
        if(item === null) { throw { msg:"Item must not be null!"} };
        if(!(item instanceof EShopItem)) { throw { msg:"Only EShopItems are allowed!" } }
        items.push(item);
    }

    /**
     * Adding a list of Items to the collection.
     * @param {Array(EShopItem)} newItems List of EShopItems that should be added to the collection.
     * @throws {Error{msg}} Error with a message of what gone wrong. NullPointer or IllegalArgument.
     */
    this.addCollItems = function(newItems) {
        if(newItems === null || newItems.length === 0) { throw { msg: "Items must not be null or empty!"} }
        newItems.forEach( function(item, index) {
            if(!(item instanceof EShopItem)) { throw { msg:"Only EShopItems are allowed!" } }
            items.push(item);
        });
    }


    /**
     * Removing a ShopItem from the collection by id.
     * @param {Number} id ID of the shopItem that shell be removed.
     * @returns true if the shopItem was removed and false if not.
     */
    this.removeCollItemById = function(id) {
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
     * @param {EShopItem} item ShopItem that shell be removed from the collection.
     * @returns true if the item was removed and false if not. 
     */
    this.removeCollItem = function(item) {
        if(items.indexOf(item) > -1) {
            items.splice(items.indexOf(item), 1);
            return true;
        }
        return false;
    }


    /**
     * Getting an item from the collection by id.
     * @param {Number} id Id of the item
     * @throws {Error{msg}} if the id is null.
     * @returns EShopItem if found and false if not.
     */
    this.getCollItem = function(id) {
        if(id === null) { throw {msg:"id must not be null"}};
        for(let count = 0; count < items.length; count++) {
            if(items[count].id === id) {
                return items[count];
            }
        }
        return false;
    }


    /**
     * @returns Returning the array filled with EShopItems;
     */
    this.getItems = function() {
        return items;
    }

}
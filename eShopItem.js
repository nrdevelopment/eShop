
/**
 * Creating an Item of the eShop with id name and singlePrice.
 * @param {Number} id Item-Id like article number.
 * @param {String} name Name of the shopping Item.
 * @param {Number} singlePrice The price of one item.
 */
export function EShopItem(id, name, singlePrice) {

    /**ID of the shopItem. */
    this.id = id;
    /**Name of the ShoppingItem. */
    this.name = name;
    /**Price of one ShoppingItem. */
    this.singlePrice = singlePrice;
    /**Current amount of this item. */
    this.amount = 1;


    /**
     * Increasing the amount of this item by 1.
     */
    this.increaseAmount = function() {
        this.amount++;
    }

    /**
     * Deacreasing the amount of this item by 1.
     * @throws {Error{msg}} throwing an error with a message if the amount is hitting 0 or lower.
     */
    this.decreaseAmount = function() {
        if(this.amount < 1) {
            throw { msg: "Amount getting 0 or lower"};
        }
        this.amount--;
    }

    /**
     * Getting the Price of the Item times the amount of this item.
     * @returns Price of Items.
     */
    this.getPrice = function() {
        return this.singlePrice * this.amount;
    }

}

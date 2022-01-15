import { DISCOUNT_RULES } from "./data.js";

export class Checkout {
  //make sure dont have duplicate product, we use Map()
  #productsSelected = new Map();
  #discountRules = [];
  //constructor with default pricing rules is empty array
  constructor(pricingRules = []) {
    let rules = [];
    pricingRules.forEach((pricingRule) => {
      // in case apply 2 discount rules with same product id, will choose the last one
      rules = [
        ...rules.filter(
          (rule) => rule.productIdApplied !== pricingRule.productIdApplied
        ),
      ];
      rules.push(pricingRule);
    });
    this.#discountRules = this.#discountRules.concat(rules);
  }
  //add product(in this sample is pizza) method with default quantity = 1
  add(product, quantity = 1) {
    let productExisted = this.#productsSelected.get(product.id);
    //in case product was exited, just add quantity and make sure price updated if has changed
    productExisted
      ? this.#productsSelected.set(product.id, {
          quantity: productExisted.quantity + quantity,
          price: product.price,
          name: product.name,
        })
      : this.#productsSelected.set(product.id, {
          quantity: quantity,
          price: product.price,
          name: product.name,
        });
  }
  calculateTotal() {
    //init total is 0
    let total = 0;
    //do loop products
    this.#productsSelected.forEach((value, key) => {
      let rule =
        this.#discountRules.filter(
          (discountRule) => discountRule.productIdApplied === key
        ).length > 0
          ? this.#discountRules.filter(
              (discountRule) => discountRule.productIdApplied === key
            )[0]
          : null;
      if (rule) {
        //there is pricing rule need to apply
        switch (rule.name) {
          case DISCOUNT_RULES.DISCOUNT_BY_PRICE:
            total += value.quantity * rule.newPrice;
            break;
          case DISCOUNT_RULES.DISCOUNT_BY_QUANTITY:
            //get new product quantity after minus get free
            let newQuantity =
              value.quantity -
              Math.floor(value.quantity / rule.buyQuantityRequired) *
                rule.getFreeQuantity;
            total += newQuantity * value.price;
            break;
          default:
            new Error(
              `There is no implemented for ${rule.name} discount rule`
            );
            break;
        }
      } else {
        //there is no discount applied
        total += value.quantity * value.price;
      }
    });
    return total;
  }
}

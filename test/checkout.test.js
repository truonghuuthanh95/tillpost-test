import { Checkout } from "../src/checkout.js";
import {
  PIZZA_ID,
  PIZZA_PRICE,
  PIZZA_NAME,
  DISCOUNT_RULES,
} from "../src/data.js";
// var assert = require('assert');
import assert from "assert";
const amazonRule = [
  {
    productIdApplied: PIZZA_ID.LARGE_PIZZA,
    newPrice: 19.99,
    name: DISCOUNT_RULES.DISCOUNT_BY_PRICE,
  },
];

const microsoftRule = [
  {
    productIdApplied: PIZZA_ID.SMALL_PIZZA,
    buyQuantityRequired: 3,
    getFreeQuantity: 1,
    name: DISCOUNT_RULES.DISCOUNT_BY_QUANTITY,
  },
];

describe("Checkout module", function () {
  describe("Customer: DEFAULT", function () {
    it("it should $49.97", function () {
      let checkout = new Checkout();
      checkout.add(
        {
          id: PIZZA_ID.SMALL_PIZZA,
          price: PIZZA_PRICE.SMALL_PIZZA,
          name: PIZZA_NAME.SMALL_PIZZA,
        },
        1
      );
      checkout.add(
        {
          id: PIZZA_ID.MEDIUM_PIZZA,
          price: PIZZA_PRICE.MEDIUM_PIZZA,
          name: PIZZA_NAME.MEDIUM_PIZZA,
        },
        1
      );
      checkout.add(
        {
          id: PIZZA_ID.LARGE_PIZZA,
          price: PIZZA_PRICE.LARGE_PIZZA,
          name: PIZZA_NAME.LARGE_PIZZA,
        },
        1
      );
      // checkout.calculateTotal();
      assert.equal(checkout.calculateTotal(), 49.97);
    });
  });
  describe("Customer: MICROSOFT", function () {
    it("it should $45.97", function () {
      let checkout = new Checkout(microsoftRule);
      checkout.add(
        {
          id: PIZZA_ID.SMALL_PIZZA,
          price: PIZZA_PRICE.SMALL_PIZZA,
          name: PIZZA_NAME.SMALL_PIZZA,
        },
        3
      );
      checkout.add(
        {
          id: PIZZA_ID.LARGE_PIZZA,
          price: PIZZA_PRICE.LARGE_PIZZA,
          name: PIZZA_NAME.LARGE_PIZZA,
        },
        1
      );
      // checkout.calculateTotal();
      assert.equal(checkout.calculateTotal(), 45.97);
    });
  });
  describe("Customer: AMAZON", function () {
    it("it should $67.96", function () {
      let checkout = new Checkout(amazonRule);
      checkout.add(
        {
          id: PIZZA_ID.MEDIUM_PIZZA,
          price: PIZZA_PRICE.MEDIUM_PIZZA,
          name: PIZZA_NAME.MEDIUM_PIZZA,
        },
        3
      );
      checkout.add(
        {
          id: PIZZA_ID.LARGE_PIZZA,
          price: PIZZA_PRICE.LARGE_PIZZA,
          name: PIZZA_NAME.LARGE_PIZZA,
        },
        1
      );
      // checkout.calculateTotal();
      assert.equal(checkout.calculateTotal(), 67.96);
    });
  });
});

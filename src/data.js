export const DISCOUNT_RULES = {
  DISCOUNT_BY_QUANTITY: "DISCOUNT_BY_QUANTITY",
  DISCOUNT_BY_PRICE: "DISCOUNT_BY_PRICE",
};

export const PIZZA_ID = {
  SMALL_PIZZA: 1,
  MEDIUM_PIZZA: 2,
  LARGE_PIZZA: 3,
};

export const PIZZA_NAME = {
  SMALL_PIZZA: "SMALL_PIZZA",
  MEDIUM_PIZZA: "MEDIUM_PIZZA",
  LARGE_PIZZA: "LARGE_PIZZA",
};

export const PIZZA_PRICE = {
  SMALL_PIZZA: 11.99,
  MEDIUM_PIZZA: 15.99,
  LARGE_PIZZA: 21.99,
};

export const PIZZAS = [
  {
    id: PIZZA_ID.SMALL_PIZZA,
    name: "Small Pizza",
    description: "10' pizza for one person",
    price: 11.99,
  },
  {
    id: PIZZA_ID.MEDIUM_PIZZA,
    name: "Medium Pizza",
    description: "12' pizza for one person",
    price: 15.99,
  },
  {
    id: PIZZA_ID.SMALL_PIZZA,
    name: "Large Pizza",
    description: "13' pizza for one person",
    price: 21.99,
  },
];

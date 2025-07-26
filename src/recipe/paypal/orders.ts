import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Orders",
  reference: `${base.reference}/orders/v2`,
  upstream: `${base.upstream}/checkout_orders_v2.json`,
};

export default recipe;

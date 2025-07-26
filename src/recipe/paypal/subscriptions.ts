import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Subscriptions",
  reference: `${base.reference}/subscriptions/v1`,
  upstream: `${base.upstream}/billing_subscriptions_v1.json`,
};

export default recipe;

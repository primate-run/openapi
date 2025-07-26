import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Payments",
  reference: `${base.reference}/payments/v2`,
  upstream: `${base.upstream}/payments_payment_v2.json`,
};

export default recipe;

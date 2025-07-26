import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Disputes",
  reference: `${base.reference}/customer-disputes/v1`,
  upstream: `${base.upstream}/customer_disputes_v1.json`,
};

export default recipe;

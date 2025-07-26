import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Invoicing",
  reference: `${base.reference}/invoicing/v2`,
  upstream: `${base.upstream}/invoicing_v2.json`,
};

export default recipe;

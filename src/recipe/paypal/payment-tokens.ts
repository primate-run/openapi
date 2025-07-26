import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Payment Method Tokens",
  reference: `${base.reference}/payment-tokens/v3`,
  upstream: `${base.upstream}/vault_payment_tokens_v3.json`,
};

export default recipe;

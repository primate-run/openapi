import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Payouts",
  reference: `${base.reference}/payments.payouts-batch/v1`,
  upstream: `${base.upstream}/payments_payouts_batch_v1.json`,
};

export default recipe;

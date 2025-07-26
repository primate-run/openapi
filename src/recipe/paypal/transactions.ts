import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Transaction Search",
  reference: `${base.reference}/transaction-search/v1`,
  upstream: `${base.upstream}/reporting_transactions_v1.json`,
};

export default recipe;

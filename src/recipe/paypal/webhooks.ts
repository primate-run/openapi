import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Webhooks Management",
  reference: `${base.reference}/webhooks/v1`,
  upstream: `${base.upstream}/notifications_webhooks_v1.json`,
};

export default recipe;

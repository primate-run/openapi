import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Partner Referrals",
  reference: `${base.reference}/partner-referrals/v2`,
  upstream: `${base.upstream}/customer_partner_referrals_v2.json`,
};

export default recipe;

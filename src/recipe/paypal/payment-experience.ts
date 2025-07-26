import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Payment Experience Web Profiles",
  reference: `${base.reference}/payment-experience/v1`,
  upstream: `${base.upstream}/payment-experience_web_experience_profiles_v1.json`,
};

export default recipe;

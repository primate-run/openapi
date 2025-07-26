import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Catalog Products",
  reference: `${base.reference}/catalog-products/v1`,
  upstream: `${base.upstream}/catalogs_products_v1.json`,
};

export default recipe;

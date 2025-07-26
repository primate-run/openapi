import type Recipe from "#Recipe";
import base from "#recipe/paypal/base";

const recipe: Recipe = {
  description: "Shipment Tracking",
  reference: `${base.reference}/tracking/v1`,
  upstream: `${base.upstream}/shipping_shipment_tracking_v1.json`,
};

export default recipe;

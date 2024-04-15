import Stripe from "stripe";

const { stripeSecret } = useRuntimeConfig();
export default new Stripe(stripeSecret);
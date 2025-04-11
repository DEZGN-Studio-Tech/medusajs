import type {
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/framework"

import axios from "axios"
import { OrderService } from "@medusajs/medusa"

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve("logger")

  logger.info("Sending confirmation email...")

  try {
    // Send POST request to the webhook URL with the data variable
    await axios.post("https://ai.doneforu.com/webhook/8f108341-97de-4e6c-b3dd-f30716857030", data)

    logger.info("Order data sent to webhook successfully")
  } catch (error) {
      logger.error(`Failed to send data to webhook: ${error.message}`)
  }

}

export const config: SubscriberConfig = {
  event: `order.placed`,
}
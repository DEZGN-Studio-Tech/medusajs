import { AbstractPaymentProvider } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import {
    AuthorizePaymentInput,
    AuthorizePaymentOutput,
    PaymentSessionStatus,
    CapturePaymentInput,
    CapturePaymentOutput,
    InitiatePaymentInput,
    InitiatePaymentOutput,
    CancelPaymentInput,
    CancelPaymentOutput,
    RefundPaymentInput,
    RefundPaymentOutput,
    RetrievePaymentInput,
    RetrievePaymentOutput,
    UpdatePaymentInput,
    UpdatePaymentOutput,
    DeletePaymentInput,
    DeletePaymentOutput,
    GetPaymentStatusInput,
    GetPaymentStatusOutput,
    ProviderWebhookPayload,
    WebhookActionResult,
  } from "@medusajs/framework/types"
type Options = {
  apiKey: string
}

type InjectedDependencies = {
  logger: Logger
}

class MyPaymentProviderService extends AbstractPaymentProvider<Options> {
    protected logger_: Logger
    protected options_: Options
  
    constructor(
      container: InjectedDependencies,
      options: Options
    ) {
      super(container, options)
      this.logger_ = container.logger
      this.options_ = options
    }

    async capturePayment(
        input: CapturePaymentInput
      ): Promise<CapturePaymentOutput> {
        return {
          data: {
            status: "captured",
            captured_at: new Date().toISOString()
          }
        }
      }


  async authorizePayment(
    input: AuthorizePaymentInput
  ): Promise<AuthorizePaymentOutput> {
    const externalId = input.data?.id

    // assuming you have a client that authorizes the payment
    return {
      status: "authorized"
    }
  }

  async cancelPayment(
    input: CancelPaymentInput
  ): Promise<CancelPaymentOutput> {
    return {
      data: {
        status: "cancelled",
        cancelled_at: new Date().toISOString()
      }
    }
  }

  async initiatePayment(
    input: InitiatePaymentInput
  ): Promise<InitiatePaymentOutput> {
    const {
      amount,
      currency_code,
      context: customerDetails
    } = input

    return {
      id: `manual_${Date.now()}`,
      data: {
        status: "pending",
        amount,
        currency_code,
        customer: customerDetails
      }
    }
  }

  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {
    return {
      status: input.data?.status as PaymentSessionStatus,
    }
  }


  async refundPayment(
    input: RefundPaymentInput
  ): Promise<RefundPaymentOutput> {
    return {
      data: {
        status: "refunded",
        refunded_at: new Date().toISOString(),
        amount: input.amount
      }
    }
  }

  async retrievePayment(
    input: RetrievePaymentInput
  ): Promise<RetrievePaymentOutput> {
    const externalId = input.data?.id

    // For manual payments, return a mock payment data
    return {
      data: {
        status: "pending",
        amount: input.data?.amount || 0,
        currency_code: input.data?.currency_code || "usd",
        customer: input.context?.customer || null,
        retrieved_at: new Date().toISOString()
      }
    }
  }

  async updatePayment(
    input: UpdatePaymentInput
  ): Promise<UpdatePaymentOutput> {
    const { amount, currency_code, context } = input
    const externalId = input.data?.id

    // Validate context.customer
    if (!context || !context.customer) {
      throw new Error("Context must include a valid customer.")
    }

    // For manual payments, just return the updated data
    return {
      data: {
        status: "pending",
        amount,
        currency_code,
        customer: context.customer,
        updated_at: new Date().toISOString()
      }
    }
  }

  async deletePayment(
    input: DeletePaymentInput
  ): Promise<DeletePaymentOutput> {
    const externalId = input.data?.id

    // assuming you have a client that cancels the payment
    // await this.client.cancelPayment(externalId)
    return {}
  }

  async getWebhookActionAndData(
    payload: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    return {
      action: "not_supported"
    }
  }

  // ...
}

export default MyPaymentProviderService
import {
    createWorkflow,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { authorizePaymentSessionStep } from "@medusajs/medusa/core-flows"
  
  type WorkflowInput = {
    paymentSessionId: string
  }
  
  const approvePaymentWorkflow = createWorkflow(
    "approve-payment-session",
    function (input: WorkflowInput) {
      const { payment_session } = authorizePaymentSessionStep({
        id: input.paymentSessionId,
      })
  
      return new WorkflowResponse({
        response: {
          payment_session
        }
      })
    }
  )
  
  export default approvePaymentWorkflow
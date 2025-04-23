import type {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  import approvePaymentWorkflow from "../../workflows/approve-payment-session"
  
  // export async function GET(
  //   req: MedusaRequest,
  //   res: MedusaResponse
  // ) {
  //   const { result } = await approvePaymentWorkflow(req.scope)
  //     .run({
  //       input: {
  //           paymentSessionId: req.query.payment_session_id as string,
  //       },
  //     })
    
  //   res.send(result)
  // }
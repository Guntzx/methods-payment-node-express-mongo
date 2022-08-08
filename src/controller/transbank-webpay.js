import { WebpayPlus } from "transbank-sdk"
import { Transaction } from '../model/transaction'

export const WebPay_create = async (req, res) => {
    try {
        const { buyOrder, sessionId, amount, returnUrl } = req.body
    
        const createResponse = await new WebpayPlus.Transaction().create(
        buyOrder,
        sessionId,
        amount,
        returnUrl
        )

        return res.status(200).json(createResponse)
      } catch (e) {
        console.error(e)
        return res.status(500).json({ message: "Ocurrio un error: "+ e.message})
      }
}

export const WebPay_confirm = async (req, res) => {
  try {
    const { token } = req.body

    const confirmResponse = await new WebpayPlus.Transaction().commit(
      token
    )
    
    await Transaction.create({method: 'transbank', token: token, id_transaction: confirmResponse.buy_order, status: confirmResponse.status, transaction_date: confirmResponse.transaction_date, amount: confirmResponse.amount })

    return res.status(200).json({ status: confirmResponse.status, amount: confirmResponse.amount, transaction_date: confirmResponse.transaction_date})
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Ocurrio un error: "+ e.message})
  }
}

export const WebPay_status = async (req, res) => {
  try {
    const { token } = req.query

    const statusResponse = await new WebpayPlus.Transaction().status(token)

    return res.status(200).json(statusResponse)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: "Ocurrio un error: "+ e.message})
  }
}
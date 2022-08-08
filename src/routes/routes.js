import { Router } from "express"
import { Data } from '../middleware/verifyData'
import { WebPay_create, WebPay_confirm, WebPay_status } from '../controller/transbank-webpay'
import { MercadoPago } from '../controller/mercado-pago'
import { PayPal } from '../controller/paypal'
import { StripeMethod } from '../controller/stripe'

const router = Router()

router.get('/', async (req, res) => {
    return res.send('API para el pago con diferentes operadores como transbank, mercado pago, PayPal, stripe')
})

router.post('/transbank/create', Data, WebPay_create)

router.post('/transbank/confirm', Data, WebPay_confirm)

router.get('/transbank/create', Data, WebPay_status)

router.post('/mercado_pago/create', Data, MercadoPago)

router.post('/paypal/create', Data, PayPal)

router.post('/stripe/create', Data, StripeMethod)

router.get('*', async (req, res) => {
    return res.send('Esta pagina no existe :(')
})

export default router
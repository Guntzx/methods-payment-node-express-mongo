import mongoose from 'mongoose'

export const Transaction = mongoose.model('Transaction', {
    method: { type: String, required: true },
    token: { type: String },
    id_transaction: { type: String, required: true },
    status: { type: String, required: true },
    transaction_date: { type: Date, required: true },
    amount: { type: Number, required: true }
})
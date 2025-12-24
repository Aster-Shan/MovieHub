"use client"

import TitleTypography from "@/components/TitleTypography"
import { Button } from "@/components/ui/button"
import { markBookingAsPaid } from "@/server-actions/booking"
import { Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function FakePayForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const bookingId = searchParams.get("bookingId")
  const amountParam = searchParams.get("amount")
  const amount = amountParam ? Number(amountParam) : 0

  const [loading, setLoading] = useState(false)
  const [paid, setPaid] = useState(false)

  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")

  const isValidCardNumber = /^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))
  const isValidExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)
  const isValidCvv = /^\d{3,4}$/.test(cvv)
  const isFormValid = isValidCardNumber && isValidExpiry && isValidCvv

  const handleFakePay = async () => {
    if (!bookingId) {
      toast.error("Missing booking ID.")
      return
    }
    if (!isFormValid) {
      toast.error("Please enter valid card details.")
      return
    }

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      await markBookingAsPaid(bookingId, amount)
      toast.success(`Payment of £${amount.toLocaleString()} successful!`)
      setPaid(true)

      setTimeout(() => router.push("/"), 1500)
    } catch {
      toast.error("Payment failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-md py-12">
      <TitleTypography>Fake Payment</TitleTypography>
      <p className="mt-2">
        You are about to pay <strong>£{amount.toLocaleString()}</strong> for booking ID {bookingId}.
      </p>
      {paid ? (
        <p className="mt-6 text-center font-semibold text-green-600">Payment successful! 🎉</p>
      ) : (
        <div className="mt-6 space-y-4">
          {/* Card Number */}
          <div>
            <label className="mb-1 block font-medium">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={19}
              className="w-full rounded border px-3 py-2"
            />
            {!isValidCardNumber && cardNumber && (
              <p className="mt-1 text-sm text-red-600">Enter a valid 16-digit card number.</p>
            )}
          </div>
          {/* Expiry */}
          <div>
            <label className="mb-1 block font-medium">Expiry (MM/YY)</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              maxLength={5}
              className="w-full rounded border px-3 py-2"
            />
            {!isValidExpiry && expiry && (
              <p className="mt-1 text-sm text-red-600">Enter a valid expiry date.</p>
            )}
          </div>
          {/* CVV */}
          <div>
            <label className="mb-1 block font-medium">CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={4}
              className="w-full rounded border px-3 py-2"
            />
            {!isValidCvv && cvv && (
              <p className="mt-1 text-sm text-red-600">Enter a valid 3 or 4 digit CVV.</p>
            )}
          </div>
          <Button
            onClick={handleFakePay}
            disabled={loading || !isFormValid}
            className="mt-4 w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Pay £{amount.toLocaleString()}
          </Button>
        </div>
      )}
    </div>
  )
}

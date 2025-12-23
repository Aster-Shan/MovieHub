"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface PayBtnProps {
  id: string
  totalAmount: number
}

const PayBtn = ({ id, totalAmount }: PayBtnProps) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pay = async () => {
    setLoading(true)
    setTimeout(() => {
      router.push(`/FakePay?bookingId=${id}&amount=${totalAmount}`)
    }, 800)
  }

  return (
    <Button onClick={pay} disabled={loading}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Fake Pay
    </Button>
  )
}

export default PayBtn

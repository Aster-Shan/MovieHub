"use client"

import { Suspense } from "react"
import FakePay from "./FakePayForm"

export default function FakePayPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FakePay />
    </Suspense>
  )
}

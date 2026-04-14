import type { Metadata } from "next"
import { ForgotForm } from "@/components/auth/forgot-form"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function ForgotPage() {
  return <ForgotForm />
}

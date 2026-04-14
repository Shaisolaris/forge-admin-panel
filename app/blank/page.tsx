import type { Metadata } from "next"
import Layout from "@/components/cmsfullform/layout"
import { BlankContent } from "@/components/blank"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function BlankPage() {
  return (
    <Layout>
      <BlankContent />
    </Layout>
  )
}

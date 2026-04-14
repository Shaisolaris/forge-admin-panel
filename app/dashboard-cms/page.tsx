import type { Metadata } from "next"
import Content from "@/components/dashboard-cms/content"
import Layout from "@/components/cmsfullform/layout"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function DashboardCMSPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

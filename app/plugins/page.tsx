import type { Metadata } from "next"
import Layout from "@/components/cmsfullform/layout"
import Content from "@/components/plugins/content"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function PluginsPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

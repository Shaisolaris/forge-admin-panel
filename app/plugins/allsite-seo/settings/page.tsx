import type { Metadata } from "next"
import { AllSiteSEOSettings } from "@/components/plugins/allsite-seo/settings"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function AllSiteSEOSettingsPage() {
  return <AllSiteSEOSettings />
}

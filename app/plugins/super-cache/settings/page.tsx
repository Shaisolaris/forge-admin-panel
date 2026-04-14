import type { Metadata } from "next"
import { SuperCacheSettings } from "@/components/plugins/super-cache/settings"

export const metadata: Metadata = {
  title: "Forge Dashboard - OpenSource CMS",
  description: "Forge dashboard build with Next.js and Tailwind CSS",
}

export default function SuperCacheSettingsPage() {
  return <SuperCacheSettings />
}

"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/dashboard-cms")
  }, [router])
  
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="animate-pulse text-muted-foreground text-sm">Loading dashboard...</div>
    </div>
  )
}

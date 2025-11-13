"use client"

// Supabase handles sessions automatically via cookies
// This component is kept for compatibility but doesn't need to do anything
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

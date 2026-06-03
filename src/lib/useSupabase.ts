import { useState, useEffect } from 'react'
import { supabase } from './supabase'

export function useSupabaseQuery<T>(
  table: string,
  fallbackData: T[],
  orderBy?: string,
  ascending?: boolean,
): { data: T[]; loading: boolean } {
  const [data, setData] = useState<T[]>(fallbackData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let cancelled = false

    async function fetchData() {
      try {
        let query = supabase!.from(table).select('*')
        if (orderBy) {
          query = query.order(orderBy, { ascending: ascending ?? true })
        }
        const { data: rows, error } = await query
        if (!cancelled && rows && !error) {
          setData(rows as T[])
        }
      } catch {
        // Silently fall back to hardcoded data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [table, orderBy, ascending])

  return { data, loading }
}

export async function submitContactForm(formData: Record<string, string>) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  return supabase.from('contact_submissions').insert(formData)
}

export async function subscribeNewsletter(email: string) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  return supabase.from('newsletter_subscribers').insert({ email })
}

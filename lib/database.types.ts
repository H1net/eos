export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      conversations: {
        Row: {
          created_at: string | null
          created_by_profile_id: string
          id: string
          model: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          created_by_profile_id: string
          id?: string
          model?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          created_by_profile_id?: string
          id?: string
          model?: string | null
          title?: string | null
        }
      }
      messages: {
        Row: {
          conversation_id: string
          created_at: string
          id: string
          profile_id: string | null
          role: string
          seen_at: string | null
          text: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          id?: string
          profile_id?: string | null
          role: string
          seen_at?: string | null
          text: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          id?: string
          profile_id?: string | null
          role?: string
          seen_at?: string | null
          text?: string
        }
      }
      posts: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
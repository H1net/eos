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
      examples: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
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
      pins: {
        Row: {
          archived_at: string | null
          created_at: string
          created_by_profile_id: string | null
          id: string
          text: string
          updated_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          text?: string
          updated_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          text?: string
          updated_at?: string | null
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
      property_key_requests: {
        Row: {
          author_profile_id: string
          by_name: string | null
          by_profile_id: string | null
          created_at: string
          id: string
          in_at: string | null
          out_at: string | null
          property_id: string | null
          property_key_id: string
          updated_at: string | null
        }
        Insert: {
          author_profile_id: string
          by_name?: string | null
          by_profile_id?: string | null
          created_at?: string
          id?: string
          in_at?: string | null
          out_at?: string | null
          property_id?: string | null
          property_key_id: string
          updated_at?: string | null
        }
        Update: {
          author_profile_id?: string
          by_name?: string | null
          by_profile_id?: string | null
          created_at?: string
          id?: string
          in_at?: string | null
          out_at?: string | null
          property_id?: string | null
          property_key_id?: string
          updated_at?: string | null
        }
      }
      property_keys: {
        Row: {
          created_at: string
          cut_required: boolean
          description: string | null
          id: string
          lost: boolean
          property_id: string
          status: string
          tag_letter: string | null
          tag_number: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          cut_required?: boolean
          description?: string | null
          id?: string
          lost?: boolean
          property_id: string
          status?: string
          tag_letter?: string | null
          tag_number?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          cut_required?: boolean
          description?: string | null
          id?: string
          lost?: boolean
          property_id?: string
          status?: string
          tag_letter?: string | null
          tag_number?: number | null
          updated_at?: string | null
        }
      }
      propertys: {
        Row: {
          address: string
          created_at: string
          development_street: string | null
          id: string
          landlord: string | null
          parking: string | null
          reapit_id: string | null
          updated_at: string | null
        }
        Insert: {
          address: string
          created_at?: string
          development_street?: string | null
          id?: string
          landlord?: string | null
          parking?: string | null
          reapit_id?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          created_at?: string
          development_street?: string | null
          id?: string
          landlord?: string | null
          parking?: string | null
          reapit_id?: string | null
          updated_at?: string | null
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

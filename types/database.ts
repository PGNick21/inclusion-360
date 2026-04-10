export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          description: string | null
          detected_at: string | null
          id: string
          severity: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          description?: string | null
          detected_at?: string | null
          id?: string
          severity?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          description?: string | null
          detected_at?: string | null
          id?: string
          severity?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          role: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          role: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string | null
        }
        Relationships: []
      }
      places: {
        Row: {
          accessibility_tags: string[] | null
          category: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          lat: number
          lng: number
          name: string
          verified_count: number | null
        }
        Insert: {
          accessibility_tags?: string[] | null
          category: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          lat: number
          lng: number
          name: string
          verified_count?: number | null
        }
        Update: {
          accessibility_tags?: string[] | null
          category?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          lat?: number
          lng?: number
          name?: string
          verified_count?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          points: number | null
          settings: Json | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          points?: number | null
          settings?: Json | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          points?: number | null
          settings?: Json | null
        }
        Relationships: []
      }
      reports: {
        Row: {
          created_at: string | null
          id: string
          note: string | null
          place_id: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          note?: string | null
          place_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          note?: string | null
          place_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      sign_phrases: {
        Row: {
          category: string
          id: string
          phrase: string
        }
        Insert: {
          category: string
          id?: string
          phrase: string
        }
        Update: {
          category?: string
          id?: string
          phrase?: string
        }
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: {
      verify_place: {
        Args: { p_place_id: string }
        Returns: void
      }
      award_points: {
        Args: { p_amount: number }
        Returns: void
      }
    }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

export type ToneLabel =
  | "Aggressive"
  | "Passive-Aggressive"
  | "Accusatory"
  | "Dismissive"
  | "Defensive"
  | "Neutral"
  | "Professional"
  | "Direct"
  | "Friendly"
  | "Empathetic"
  | "Enthusiastic"
  | "Uncertain"
  | "Apologetic";

export interface ToneAnalysisResult {
  primary_tone: ToneLabel;
  confidence_score: number;
  is_rude: boolean;
  rudeness_level: number;
  mixed_emotions: Array<{
    tone: ToneLabel;
    score: number;
  }>;
  key_triggers: string[];
  critique: string;
  rewrites: {
    professional: string;
    friendly: string;
    assertive: string;
  };
}

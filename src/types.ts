export interface SovereignTime {
  hour: number;
  minute: number;
  second: number;
  isIntermission: boolean;
  intermissionType: 'MIDNIGHT' | 'MIDDAY' | null;
}

export interface CreedPoint {
  title: string;
  description: string;
}

export interface BriefingSection {
  id: string;
  title: string;
  content: string;
}

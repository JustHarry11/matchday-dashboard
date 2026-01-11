export interface Team {
  id: number;
  name: string;
  crest: string;
  venue: string;
}

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: {
    name: string;
  };
  awayTeam: {
    name: string;
  };
  score: {
    fullTime: {
      home: number | null;
      away: number | null;
    };
  };
}

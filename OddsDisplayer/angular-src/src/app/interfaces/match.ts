export interface Match {
	Suspended: boolean,
    Status: number,
    StreamURL: string,
    Id: number,
    StartTime: Date,
    Visible: boolean,
    SportId: number,
    TournamentId: number,
    HomeTeamId: number,
    HomeTeamName: string,
    AwayTeamId: number,
    Type: number,
    AwayTeamName: string,
    Score: string,
    OutrightName: string,
    EndTime: Date
}

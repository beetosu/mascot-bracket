enum TournamentRound {
	First = 0,
	Second = 64,
	Sixteen = 96,
	Eight = 112,
	Four = 120,
	Championship = 124,
	Winner = 126
}

export function getNextRound(currentRound: TournamentRound): TournamentRound | null {
  switch (currentRound) {
    case TournamentRound.First:
      return TournamentRound.Second;
    case TournamentRound.Second:
      return TournamentRound.Sixteen;
    case TournamentRound.Sixteen:
      return TournamentRound.Eight;
    case TournamentRound.Eight:
      return TournamentRound.Four;
    case TournamentRound.Eight:
      return TournamentRound.Four;
    case TournamentRound.Four:
      return TournamentRound.Championship;
    case TournamentRound.Championship:
      return TournamentRound.Winner
    default:
      return null;
  }
}

export function getXStep(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 25;
    case TournamentRound.Second:
      return 50;
    case TournamentRound.Sixteen:
      return 75;
    case TournamentRound.Eight:
      return 100;
    case TournamentRound.Eight:
      return 125;
    case TournamentRound.Four:
      return 150;
    case TournamentRound.Championship:
      return 175;
    default:
      return 200;
  }
}

export default TournamentRound;
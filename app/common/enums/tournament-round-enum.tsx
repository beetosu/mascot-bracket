enum TournamentRound {
  FirstFour = 0,
	First = 8,
	Second = 72,
	Sixteen = 104,
	Eight = 120,
	FinalFour = 128,
	Championship = 132,
	Winner = 134
}

/**
 * Determine which round a college is currently in.
 * @param idx The index of the college in the match history.
 * @returns The round the college is in.
 */
export function determineRound(idx: number): TournamentRound {
  const enumValues = Object.values(TournamentRound).filter(t => typeof t === 'number') as TournamentRound[];
  
  // Find the round with the smallest value that the college has past the bounds of.
  return enumValues.findLast(e => e <= idx) ?? TournamentRound.First;
}

/**
 * Maps a round enum with the enum representing the next round.
 * @param currentRound the round we want to find the next round for.
 * @returns the round that is the next round, relative to the currentRound.
 */
export function getNextRound(currentRound: TournamentRound): TournamentRound | null {
  switch (currentRound) {
    case TournamentRound.FirstFour:
      return TournamentRound.First
    case TournamentRound.First:
      return TournamentRound.Second;
    case TournamentRound.Second:
      return TournamentRound.Sixteen;
    case TournamentRound.Sixteen:
      return TournamentRound.Eight;
    case TournamentRound.Eight:
      return TournamentRound.FinalFour;
    case TournamentRound.FinalFour:
      return TournamentRound.Championship;
    case TournamentRound.Championship:
      return TournamentRound.Winner
    default:
      return null;
  }
}

export default TournamentRound;
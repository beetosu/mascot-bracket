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

/**
 * Map the round enum to a xStep value.
 * @param currentRound The round we want to find the xStep for.
 * @returns The xStep associated with the round.
 */
export function getXStep(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 62;
    case TournamentRound.Second:
      return 220;
    case TournamentRound.Sixteen:
      return 410;
    case TournamentRound.Eight:
      return 590;
    case TournamentRound.FinalFour:
      return 780;
    case TournamentRound.Championship:
      return 695;
    default:
      return 915;
  }
}

/**
 * Map the round enum to a yStart value.
 * @param currentRound The round we want to find the yStart for.
 * @returns The yStart associated with the round.
 */
export function getYStart(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 230;
    case TournamentRound.Second:
      return 245;
    case TournamentRound.Sixteen:
      return 275;
    case TournamentRound.Eight:
      return 335;
    case TournamentRound.FinalFour:
      return 455;
    case TournamentRound.Championship:
      return 715;
    default:
      return 715;
  }
}

/**
 * Map the round enum to a yStep value.
 * @param currentRound The round we want to find the yStep for.
 * @returns The yStep associated with the round.
 */
export function getYStep(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 30.5;
    case TournamentRound.Second:
      return 60.5;
    case TournamentRound.Sixteen:
      return 121;
    case TournamentRound.Eight:
      return 245;
    case TournamentRound.FinalFour:
      return 520;
    case TournamentRound.Championship:
      return 0;
    default:
      return 0;
  }
}

/**
 * Map the round enum to a yGap value.
 * @param currentRound The round we want to find the yGap for.
 * @returns The yGap associated with the round.
 */
export function getYGap(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 30;
    case TournamentRound.Second:
      return 35;
    case TournamentRound.Sixteen:
      return 35;
    case TournamentRound.Eight:
      return 25;
    default:
      return 0;
  }
}

export default TournamentRound;
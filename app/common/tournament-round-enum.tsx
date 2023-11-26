enum TournamentRound {
	First = 0,
	Second = 64,
	Sixteen = 96,
	Eight = 112,
	Four = 120,
	Championship = 124,
	Winner = 126
}

/**
 * Maps a round enum with the enum representing the next round.
 * @param currentRound the round we want to find the next round for.
 * @returns the round that is the next round, relative to the currentRound.
 */
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

/**
 * Map the round enum to a xStep value.
 * @param currentRound The round we want to find the xStep for.
 * @returns The xStep associated with the round.
 */
export function getXStep(currentRound: TournamentRound): number {
  switch (currentRound) {
    case TournamentRound.First:
      return 55;
    case TournamentRound.Second:
      return 220;
    case TournamentRound.Sixteen:
      return 410;
    case TournamentRound.Eight:
      return 590;
    case TournamentRound.Four:
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
      return 145;
    case TournamentRound.Second:
      return 160;
    case TournamentRound.Sixteen:
      return 190;
    case TournamentRound.Eight:
      return 250;
    case TournamentRound.Four:
      return 370;
    case TournamentRound.Championship:
      return 628;
    default:
      return 628;
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
    case TournamentRound.Four:
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
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
      return 25;
    case TournamentRound.Second:
      return 100;
    case TournamentRound.Sixteen:
      return 175;
    case TournamentRound.Eight:
      return 250;
    case TournamentRound.Eight:
      return 325;
    case TournamentRound.Four:
      return 400;
    case TournamentRound.Championship:
      return 475;
    default:
      return 500;
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
      return 25;
    case TournamentRound.Second:
      return 100;
    case TournamentRound.Sixteen:
      return 175;
    case TournamentRound.Eight:
      return 250;
    case TournamentRound.Eight:
      return 325;
    case TournamentRound.Four:
      return 400;
    case TournamentRound.Championship:
      return 475;
    default:
      return 500;
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
      return 0;
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
      return 15;
    case TournamentRound.Second:
      return 20;
    case TournamentRound.Sixteen:
      return 25;
    case TournamentRound.Eight:
      return 30;
    case TournamentRound.Eight:
      return 35;
    case TournamentRound.Four:
      return 40;
    case TournamentRound.Championship:
      return 45;
    default:
      return 0;
  }
}

export default TournamentRound;
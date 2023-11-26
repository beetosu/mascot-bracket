import Bracket from '@/app/components/bracket/bracket';
import TournamentRound, { getNextRound, getXStep, getYGap, getYStart, getYStep } from '@/app/common/tournament-round-enum';

type WinStateProps = { 
  matchHistory: string[]
}

export type CollegeCoordinates = {
  college: string,
  x: number,
  y: number,
  isRight: boolean
}

/**
 * Build a list of text objects to display on the bracket canvas.
 * @param matchHistory A list of college names based on their placements in the tournament
 * @returns A list of objects holding the college name, and their coordinates.
 */
function generateCoordinates(matchHistory: string[]): CollegeCoordinates[] {
  const collegeCoords: CollegeCoordinates[] = [];

  matchHistory.forEach((college, idx) => {
    collegeCoords.push({
      college: college,
      x: determineX(idx),
      y: determineY(idx),
      isRight: isRight(idx)
    });
  });
  return collegeCoords;
}

/**
 * Determine the x value of a college on the bracket.
 * @param idx the index of the college in the match history.
 * @returns the x coordinate associated with the college.
 */
function determineX(idx: number): number {
  const currentRound = determineRound(idx);
  const canvasWidth = 1918;

  // x here is either xStep, or the width of the bracket
  // minus xStep, based on whether the college is on the left
  // or right hand side.
  let x = getXStep(currentRound);
  if (isRight(idx)) {
    x = canvasWidth - x;
  }

  return x;
}

/**
 * Determine the y value of a college on the bracket.
 * @param idx the index of the college in the match history.
 * @returns the y coordinate associated with the college.
 */
function determineY(idx: number): number {
  const currentRound = determineRound(idx);
  const nextRound = getNextRound(currentRound);

  if (!nextRound) return getYStart(currentRound);

  const midpoint = (nextRound - currentRound) / 2;
  const quarterpoint = midpoint / 2;
  // We want to wrap around at the midpoint, since past that the college
  // will return to to the top, but on the other side of the bracket.
  const relativePosition = (idx - currentRound) % midpoint;
  
  // The formula here is:
  // y = start + step (+ gap if any)
  const yStep = relativePosition * getYStep(currentRound);
  let y = getYStart(currentRound) + yStep;
  // If the college is in the bottom half of the bracket (which would be
  // the 2nd or 4th quartile of the round), we should account for the gap
  // between the matches.
  if (relativePosition !== relativePosition % quarterpoint) {
    y += getYGap(currentRound)
  }
  
  return y;
}

/**
 * Determine which round a college is currently in.
 * @param idx The index of the college in the match history.
 * @returns The round the college is in.
 */
function determineRound(idx: number): TournamentRound {
  const enumValues = Object.values(TournamentRound).filter(t => typeof t === 'number') as TournamentRound[];
  
  // Find the round with the smallest value that the college has past the bounds of.
  return enumValues.findLast(e => e <= idx) ?? TournamentRound.First;
}

/**
 * Determine whether the college should be on the left or right hand side of the bracket.
 * @param idx The index of the college in the match history.
 * @param currentRound The round the college is currently in.
 * @returns A boolean representing if the college should be on the right of the bracket.
 */
function isRight(idx: number): boolean {
  const currentRound = determineRound(idx);
  const nextRound = getNextRound(currentRound);

  // Winner should be centered.
  if (!nextRound) return false;

  return idx >= nextRound - ((nextRound - currentRound) / 2);
}

export default function WinState({ matchHistory }: WinStateProps ) {
  return (
    <Bracket 
      collegeCoordinates={generateCoordinates(matchHistory)}
    />
  )
}

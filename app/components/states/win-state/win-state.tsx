import Bracket from '@/app/components/bracket/bracket';
import TournamentRound, { getNextRound, getXStep, getYGap, getYStart, getYStep } from '@/app/common/tournament-round-enum';

type WinStateProps = { 
  matchHistory: string[]
}

export type CollegeCoordinates = {
  college: string,
  x: number,
  y: number
}

function isRight(idx: number, currentRound: TournamentRound): boolean {
  const nextRound = getNextRound(currentRound);

  // Winner should be centered.
  if (!nextRound) return false;

  return idx >= nextRound - ((nextRound - currentRound) / 2);
}

function generateCoordinates(matchHistory: string[]): CollegeCoordinates[] {
  const collegeCoords: CollegeCoordinates[] = [];

  matchHistory.forEach((college, idx) => {
    collegeCoords.push({
      college: college,
      x: determineX(idx),
      y: determineY(idx)
    });
  });
  return collegeCoords;
}

function determineX(idx: number): number {
  const currentRound = determineRound(idx);
  const canvasWidth = 1000;

  let x = getXStep(currentRound);

  if (isRight(idx, currentRound)) {
    x = canvasWidth - x;
  }

  return x;
}

function determineY(idx: number): number {
  const currentRound = determineRound(idx);
  const nextRound = getNextRound(currentRound);

  if (!nextRound) return 350;

  const midpoint = (nextRound - currentRound) / 2;
  const quarterpoint = midpoint / 2;
  const relativePosition = (idx - currentRound) % midpoint;
  
  let y = getYStart(currentRound) + (relativePosition * getYStep(currentRound));
  if (relativePosition !== relativePosition % quarterpoint) {
    y += getYGap(currentRound)
  }
  
  return y;
}

function determineRound(idx: number): TournamentRound {
  const enumValues = Object.values(TournamentRound).filter(t => typeof t === 'number') as TournamentRound[];
  
  return enumValues.findLast(e => e <= idx) ?? TournamentRound.First;
}

export default function WinState({ matchHistory }: WinStateProps ) {
  return (
    <Bracket 
      collegeCoordinates={generateCoordinates(matchHistory)}
    />
  )
}

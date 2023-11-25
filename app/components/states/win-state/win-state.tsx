import Bracket from '@/app/components/bracket/bracket';
import TournamentRound, { getNextRound, getXStep } from '@/app/common/tournament-round-enum';

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
  const round = determineRound(idx);
  return idx * 5;
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

import Bracket from '@/app/components/bracket/bracket';
import CollegeEnum from '@/app/common/enums/college-enum';
import MascotStore from '@/app/common/mascot-store';
import Tournament from '@/app/common/types/tournament';
import generateCollegeTextObjects from '@/app/common/builders/college-text-builder';
import generateRoundDates from '@/app/common/builders/round-date-text-builder';
import BracketTextObjects from '@/app/common/types/bracket-text-objects';
import TextObject from '@/app/common/types/text-object';
import TextAlignEnum from '@/app/common/enums/text-align-enum';
import { CANVAS_WIDTH } from '@/app/common/builders/canvas-builder';
import generateFirstFourRankTextObjects from '@/app/common/builders/first-four-text-builder';

type WinStateProps = { 
  matchHistory: CollegeEnum[],
  tournament: Tournament
}

function buildBracketTextObjects(collegeNames: string[], tournament: Tournament): BracketTextObjects {
  return {
    tournamentName: generateTournamentNameTextObject(tournament.name),
    collegeNames: generateCollegeTextObjects(collegeNames),
    roundDates: generateRoundDates(tournament.roundDates),
    firstFourRank: generateFirstFourRankTextObjects(tournament.bracket.slice(0, 8))
  }
}

function generateTournamentNameTextObject(tournamentName: string): TextObject {
  return {
    text: tournamentName,
    x: CANVAS_WIDTH / 2,
    y: 140,
    textAlign: TextAlignEnum.Center
  }
}

export default function WinState({ matchHistory, tournament }: WinStateProps ) {

  const collegeNames = matchHistory.map(m => MascotStore[m].collegeName);
  const bracketTextObjects = buildBracketTextObjects(collegeNames, tournament);

  return (
    <Bracket 
      bracketTextObjects={bracketTextObjects}
    />
  )
}

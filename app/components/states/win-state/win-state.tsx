import Bracket from '@/app/components/bracket/bracket';
import CollegeEnum from '@/app/common/enums/college-enum';
import MascotStore from '@/app/common/mascot-store';
import Tournament from '@/app/common/types/tournament';
import generateCollegeTextObjects from '@/app/common/builders/college-text-builder';
import generateRoundDates from '@/app/common/builders/round-date-text-builder';
import BracketTextObjects from '@/app/common/types/bracket-text-objects';

type WinStateProps = { 
  matchHistory: CollegeEnum[],
  tournament: Tournament
}

function buildBracketTextObjects(collegeNames: string[], tournament: Tournament): BracketTextObjects {
  return {
    collegeNames: generateCollegeTextObjects(collegeNames),
    roundDates: generateRoundDates(tournament.roundDates)
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

import Bracket from '@/app/components/bracket/bracket';
import CollegeEnum from '@/app/common/enums/college-enum';
import MascotStore from '@/app/common/mascot-store';
import Tournament from '@/app/common/types/tournament';
import generateCollegeTextObjects from '@/app/common/builders/college-text-builder';
import generateRoundDates from '@/app/common/builders/round-date-text-builder';

type WinStateProps = { 
  matchHistory: CollegeEnum[],
  tournament: Tournament
}

export default function WinState({ matchHistory, tournament }: WinStateProps ) {

  const collegeNames = matchHistory.map(m => MascotStore[m].collegeName);

  return (
    <Bracket 
      collegeTextObjects={generateCollegeTextObjects(collegeNames)}
      roundTextObjects={generateRoundDates(tournament.roundDates)}
      tournament={tournament}
    />
  )
}

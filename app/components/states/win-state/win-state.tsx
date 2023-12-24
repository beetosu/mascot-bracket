import Bracket from '@/app/components/bracket/bracket';
import CollegeEnum from '@/app/common/enums/college-enum';
import MascotStore from '@/app/common/mascot-store';
import Tournament from '@/app/common/types/tournament';
import generateCollegeTextObjects from '@/app/common/builders/college-text-object-builder';

type WinStateProps = { 
  matchHistory: CollegeEnum[],
  tournament: Tournament
}

export default function WinState({ matchHistory }: WinStateProps ) {

  const collegeNames = matchHistory.map(m => MascotStore[m].collegeName);

  return (
    <Bracket 
      collegeTextObjects={generateCollegeTextObjects(collegeNames)}
    />
  )
}

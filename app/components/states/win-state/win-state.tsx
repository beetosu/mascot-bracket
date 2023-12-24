import Bracket from '@/app/components/bracket/bracket';
import CollegeEnum from '@/app/common/enums/college-enum';
import MascotStore from '@/app/common/mascot-store';
import Tournament from '@/app/common/types/tournament';
import generateCoordinates from '@/app/common/builders/college-coordinate-builder';

type WinStateProps = { 
  matchHistory: CollegeEnum[],
  tournament: Tournament
}

export default function WinState({ matchHistory }: WinStateProps ) {

  const collegeNames = matchHistory.map(m => MascotStore[m].collegeName);

  return (
    <Bracket 
      collegeCoordinates={generateCoordinates(collegeNames)}
    />
  )
}

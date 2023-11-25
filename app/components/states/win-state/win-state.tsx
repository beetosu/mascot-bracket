import Bracket from '@/app/components/bracket/bracket';
import BRACKET_COORDINATES from '@/app/common/bracket-coordinates';

type WinStateProps = { 
  matchHistory: string[]
}

export type CollegeCoordinates = {
  [college: string]: {
    x: number,
    y: number
  }
}

function generateCoordinates(matchHistory: string[]): CollegeCoordinates {
  return {'fizz': {x: 100, y: 200}};
}

export default function WinState({ matchHistory }: WinStateProps ) {
  return (
    <Bracket 
      collegeCoordinates={generateCoordinates(matchHistory)}
    />
  )
}

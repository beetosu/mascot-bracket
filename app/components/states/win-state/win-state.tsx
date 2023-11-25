import { MascotData } from '@/app/common/mascot-store';
import Bracket from '../../bracket/bracket';

type WinStateProps = { 
  winner: MascotData,
  matchHistory: string
}

export default function WinState({ winner, matchHistory }: WinStateProps ) {
  return (
    <Bracket 
      matchHistory={matchHistory}
    />
  )
}

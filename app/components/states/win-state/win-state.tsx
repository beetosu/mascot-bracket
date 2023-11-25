import MascotStore, { MascotData } from '@/app/common/mascot-store';
import Bracket from '../../bracket/bracket';

type WinStateProps = { 
  matchHistory: string[]
}

export default function WinState({ matchHistory }: WinStateProps ) {
  return (
    <Bracket 
      matchHistory={matchHistory}
    />
  )
}

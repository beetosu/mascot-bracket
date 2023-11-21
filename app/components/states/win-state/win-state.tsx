"use client";

import { MascotData } from '@/app/common/mascot-store';

type WinStateProps = { 
  winner: MascotData,
  matchHistory: string
}

export default function WinState({ winner, matchHistory }: WinStateProps ) {
  return (
    <div>
        <p>{winner.collegeName} wins x3</p>
        <p>look at these winz: {matchHistory}</p>
    </div>
  )
}

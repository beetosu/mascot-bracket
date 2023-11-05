"use client";

import { useState } from 'react'
import MascotCard from './components/mascot-card/mascot-card'
import styles from './page.module.css'
import MascotStore from './common/mascot-store'
import InitialMatchQueue from './common/initial-match-queue'
import CollegeEnum from './common/college-enum';

export default function Home() {
  const matchQueue = InitialMatchQueue;
  const [leftMascot, updateLeftMascot] = useState<CollegeEnum>(matchQueue[0][0]);
  const [rightMascot, updateRightMascot] = useState<CollegeEnum>(matchQueue[0][1]);
  
  /**
   * 
   * @param winner the 
   */
  function handleQueueUpdate(winner: CollegeEnum) {
    const lastElement = matchQueue.length - 1;

    // 
    if (matchQueue[lastElement][1] === CollegeEnum.Unknown) {
      matchQueue[lastElement][1] = winner;
    } else {
      matchQueue.push([winner, CollegeEnum.Unknown]);
    }

    matchQueue.shift();
    updateLeftMascot(matchQueue[0][0]);
    updateRightMascot(matchQueue[0][1]);
  }

  return (
    <main className={styles.main}>
      <MascotCard 
        key={leftMascot}
        mascotData={MascotStore[leftMascot]}
        handleQueueUpdate={handleQueueUpdate}
      />
      <MascotCard 
        key={rightMascot}
        mascotData={MascotStore[rightMascot]}
        handleQueueUpdate={handleQueueUpdate}
      />
    </main>
  )
}

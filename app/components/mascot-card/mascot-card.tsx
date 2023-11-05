import Image from 'next/image'
import styles from './mascot-card.module.css'
import { MascotData } from '@/app/common/mascot-store'

export default function MascotCard({mascotData, handleQueueUpdate}: { mascotData: MascotData | undefined, handleQueueUpdate: (winner: MascotData) => void }) {

  function selectWinner(): void { if (mascotData) handleQueueUpdate(mascotData); }

  return (
    <button className={styles.main} onClick={selectWinner}>
      {mascotData?.collegeName}
      <Image
        src={mascotData?.imgSrc ?? ''}
        alt={mascotData?.mascotName ?? 'Unknown'}
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </button>
  )
}
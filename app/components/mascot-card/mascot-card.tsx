import Image from 'next/image'
import styles from './mascot-card.module.css'
import { MascotData } from '@/app/common/mascot-store'

export default function MascotCard({mascotData, handleQueueUpdate}: { mascotData: MascotData | undefined, handleQueueUpdate: (winner: MascotData) => void }) {

  // Designate corresponding mascot as winner if selected.
  function selectWinner(): void { if (mascotData) handleQueueUpdate(mascotData); }

  return (
    <button className={styles.main} onClick={selectWinner}>
      <Image
        src={`/mascots/${mascotData?.imgSrc ?? ''}`}
        alt={mascotData?.mascotName ?? 'Unknown'}
        className={styles.vercelLogo}
        width={300}
        height={300}
        priority
      />
      <p>{mascotData?.mascotName}</p>
      <p>{mascotData?.collegeName} • {mascotData?.rank}</p>
    </button>
  )
}
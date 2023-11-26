import Image from 'next/image'
import styles from './mascot-card.module.css'
import { MascotData } from '@/app/common/mascot-store'

type MascotCardProps = {
  mascotData: MascotData | undefined,
  handleQueueUpdate: (winner: MascotData) => void, 
  isLeft: boolean
}

export default function MascotCard({mascotData, handleQueueUpdate, isLeft}: MascotCardProps) {
  // Designate corresponding mascot as winner if selected.
  function selectWinner(): void { if (mascotData) handleQueueUpdate(mascotData); }

  return (
    <button className={styles.mascotButton + ' ' + (isLeft ? styles.left : styles.right) } onClick={selectWinner}>
      <figure>
        <Image
          src={`/mascots/${mascotData?.imgSrc ?? ''}`}
          alt={mascotData?.mascotName ?? 'Unknown'}
          className={styles.vercelLogo}
          width={300}
          height={300}
          priority
        />
        <figcaption className={styles.collegeName}>
          {mascotData?.mascotName}
        </figcaption>
      </figure>
      <p>{mascotData?.collegeName} • {mascotData?.rank}</p>
    </button>
  )
}
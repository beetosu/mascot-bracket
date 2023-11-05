import Image from 'next/image'
import styles from './mascot-card.module.css'
import { MascotData } from '@/app/common/mascot-store'
import CollegeEnum from '@/app/common/college-enum'

export default function MascotCard({mascotData, handleQueueUpdate}: { mascotData: MascotData, handleQueueUpdate: (winner: CollegeEnum) => void }) {

  function onClick(): void { handleQueueUpdate(mascotData.id); }

  return (
    <button className={styles.main} onClick={onClick}>
      {mascotData.collegeName}
      <Image
        src={mascotData.imgSrc}
        alt={mascotData.mascotName}
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </button>
  )
}
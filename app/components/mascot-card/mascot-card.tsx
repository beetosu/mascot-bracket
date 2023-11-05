import Image from 'next/image'
import styles from './mascot-card.module.css'
import { MascotData } from '@/app/common/mascot-store'

export default function MascotCard({mascotData}: { mascotData: MascotData }) {
  return (
    <button className={styles.main}>
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
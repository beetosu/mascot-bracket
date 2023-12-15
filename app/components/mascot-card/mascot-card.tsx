import CollegeEnum from '@/app/common/enums/college-enum';
import styles from './mascot-card.module.css'
import BracketInfo from '@/app/common/bracket-info'
import MascotStore from '@/app/common/mascot-store';

type MascotCardProps = {
  bracketInfo: BracketInfo | undefined,
  handleQueueUpdate: (winner: BracketInfo) => void, 
  isLeft: boolean
}

export default function MascotCard({bracketInfo, handleQueueUpdate, isLeft}: MascotCardProps) {
  // Designate corresponding mascot as winner if selected.
  function selectWinner(): void { if (bracketInfo) handleQueueUpdate(bracketInfo); }

  const mascotInfo = MascotStore[bracketInfo?.id ?? CollegeEnum.Unknown] 
  
  return (
    <button className={styles.mascotButton + ' ' + (isLeft ? styles.left : styles.right) } onClick={selectWinner}>
      <div className={styles.imageContainer}>
        <img
          src={`/images/mascots/${mascotInfo.imgSrc ?? ''}`}
          alt={mascotInfo.mascotName ?? 'Unknown'}
          className={styles.vercelLogo}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.captionContainer}>
        <p className={styles.mascotName}>
          {mascotInfo.mascotName}
        </p>
        <p className={styles.subtitle}>
          {mascotInfo.isUnofficial ? '(Unofficial)' : ''}
        </p>
        <p className={styles.collegeInfo}>
          {mascotInfo.collegeName} • {bracketInfo?.rank}
        </p>
      </div>
    </button>
  )
}
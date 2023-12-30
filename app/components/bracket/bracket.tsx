import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import buildCanvas from '@/app/common/builders/canvas-builder';
import BracketTextObjects from '@/app/common/types/bracket-text-objects';

export default function Bracket({ bracketTextObjects }: { bracketTextObjects: BracketTextObjects }) {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => buildCanvas(imageRef, bracketTextObjects));

  return (
	<img className={styles.bracket} ref={imageRef} />
  )
}
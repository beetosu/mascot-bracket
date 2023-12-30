import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import TextObject from '@/app/common/types/text-object';
import buildCanvas from '@/app/common/builders/canvas-builder';
import BracketTextObjects from '@/app/common/types/bracket-text-objects';

type BracketProps = {
	collegeTextObjects: TextObject[],
	roundTextObjects: TextObject[]
}

export default function Bracket({ bracketTextObjects }: { bracketTextObjects: BracketTextObjects }) {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => buildCanvas(imageRef, bracketTextObjects));

  return (
	<img className={styles.bracket} ref={imageRef} />
  )
}
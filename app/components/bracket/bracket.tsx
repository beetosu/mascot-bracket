import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import TextObject from '@/app/common/types/text-object';
import buildCanvas from '@/app/common/builders/canvas-builder';

type BracketProps = {
	collegeTextObjects: TextObject[],
	roundTextObjects: TextObject[]
}

export default function Bracket({ collegeTextObjects, roundTextObjects }: BracketProps) {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => buildCanvas(imageRef, collegeTextObjects, roundTextObjects));

  return (
	<img className={styles.bracket} ref={imageRef} />
  )
}
import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import TextObject from '@/app/common/types/text-object';
import buildCanvas from '@/app/common/builders/canvas-builder';

export default function Bracket({collegeTextObjects}: { collegeTextObjects: TextObject[] }) {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => buildCanvas(imageRef, collegeTextObjects));

  return (
	<img className={styles.bracket} ref={imageRef} />
  )
}
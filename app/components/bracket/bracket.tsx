import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import { CollegeCoordinates } from '../states/win-state/win-state';

export default function Bracket({collegeCoordinates}: { collegeCoordinates: CollegeCoordinates[] }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
    const canvas = canvasRef.current;
		if (canvas === null) return;

    const ctx = canvas.getContext('2d');
		if (ctx === null) return;

		ctx.font = "22px Arial";

		// set bracket as background image
		const base = new Image();
		base.onload = () => {
			ctx.drawImage(base, 0, 0);

			// draw the college names on top of the background image
			for (const c of collegeCoordinates) {
				c.isRight ? ctx.textAlign = 'right' : ctx.textAlign = 'left';
				ctx.fillText(c.college, c.x, c.y);
			}
		}
		base.src = '/bracket2.png';		
	});

	console.log(collegeCoordinates);

  return (
    <canvas className={styles.bracket} ref={canvasRef} width={959*2} height={669*2} />
  )
}
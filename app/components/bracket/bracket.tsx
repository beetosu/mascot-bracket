import { useEffect, useRef } from 'react'
import { CollegeCoordinates } from '../states/win-state/win-state';

export default function Bracket({collegeCoordinates}: { collegeCoordinates: CollegeCoordinates }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
    const canvas = canvasRef.current;
		if (canvas === null) return;

    const ctx = canvas.getContext('2d');
		if (ctx === null) return;

		// set bracket as background image
		const base = new Image();
		base.onload = () => {
			ctx.drawImage(base, 0, 0);

			// draw the college names on top of the background image
			for (const [college, coordinates] of Object.entries(collegeCoordinates)) {
				ctx.fillText(college, coordinates.x, coordinates.y);
			}
		}
		base.src = '/bracket.png';		
	});

  return (
    <canvas ref={canvasRef} width={1000} height={700} />
  )
}
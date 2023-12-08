import { useEffect, useRef } from 'react'
import styles from './bracket.module.css'
import { CollegeCoordinates } from '../states/win-state/win-state';

export default function Bracket({collegeCoordinates}: { collegeCoordinates: CollegeCoordinates[] }) {
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		// Create a canvas which we can draw the bracket onto.
		const canvas = document.createElement('canvas');

		const ctx = canvas.getContext('2d');
		if (ctx === null) return;

		canvas.width = 1918;
		canvas.height = 1338;
		ctx.font = "22px Arial";

		// Set bracket as background image
		const base = new Image();
		base.onload = () => {
			ctx.drawImage(base, 0, 0);

			// Draw the college names on top of the background image
			for (const c of collegeCoordinates) {
				c.isRight ? ctx.textAlign = 'right' : ctx.textAlign = 'left';
				ctx.fillText(c.college, c.x, c.y);
			}

			// Once the canvas is fully generated, put the content into the image element.
			const image = imageRef.current;
			if (image === null) return;

			image.setAttribute('src', canvas.toDataURL('image/png'));
		}
		base.src = 'images/bracket.png';
	});

  return (
	<img alt='A college basketball bracket, with winners predicted by user using marchmascots.com.' className={styles.bracket} ref={imageRef} />
  )
}
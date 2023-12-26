import { MutableRefObject } from "react";
import TextObject from "../types/text-object";

const COLLEGE_FONT = "22px Arial";
const ROUND_FONT = "18px Arial";

function buildCanvas(imageRef: MutableRefObject<HTMLImageElement | null>, colleges: TextObject[], rounds: TextObject[]) {
    // Create a canvas which we can draw the bracket onto.
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    canvas.width = 1918;
    canvas.height = 1500;

    // Set bracket as background image
    const base = new Image();
    base.onload = () => {
        ctx.drawImage(base, 0, 0);
        drawTextObjects(ctx, colleges, COLLEGE_FONT);
        drawTextObjects(ctx, rounds, COLLEGE_FONT);
        exportCanvasToImage(canvas, imageRef.current)
    }
    base.src = 'images/bracket.png';
}


function drawTextObjects(ctx: CanvasRenderingContext2D, textObjects: TextObject[], font: string) {
    ctx.font = font;

	for (const t of textObjects) {
		ctx.textAlign = t.textAlign;
		ctx.fillText(t.text, t.x, t.y);
	}
}

/**
 * Puts the content of the fully generated canvas into the image element.
 * @param canvas The canvas we are exporting to image.
 * @param image The image we are exporting the image to (if it exists).
 */
function exportCanvasToImage(canvas: HTMLCanvasElement, image: HTMLImageElement | null) {
	if (image === null) return;

	const imageAlt = 'A college basketball bracket, with winners predicted by user using marchmascots.com.';

	image.setAttribute('src', canvas.toDataURL('image/png'));
	image.setAttribute('alt', imageAlt);
}

export default buildCanvas;
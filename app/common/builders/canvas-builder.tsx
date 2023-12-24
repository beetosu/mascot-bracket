import { MutableRefObject } from "react";
import TextObject from "../types/text-object";

function buildCanvas(imageRef: MutableRefObject<HTMLImageElement | null>, collegeTextObjects: TextObject[]) {
    // Create a canvas which we can draw the bracket onto.
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    canvas.width = 1918;
    canvas.height = 1500;
    ctx.font = "22px Arial";

    // Set bracket as background image
    const base = new Image();
    base.onload = () => {
        ctx.drawImage(base, 0, 0);
        drawCollegeNames(ctx, collegeTextObjects);
        exportCanvasToImage(canvas, imageRef.current)
    }
    base.src = 'images/bracket.png';
}

/**
 * Draw all of the provided colleges onto the appropriate portions of the canvas.
 * @param ctx The context of the canvas we are drawing on.
 * @param collegeTextObjects A list of objects holding college names and 2d positions.
 */
function drawCollegeNames(ctx: CanvasRenderingContext2D, collegeTextObjects: TextObject[]) {
	for (const c of collegeTextObjects) {
		ctx.textAlign = c.textAlign;
		ctx.fillText(c.text, c.x, c.y);
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
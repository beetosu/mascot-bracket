import { MutableRefObject } from "react";
import TextObject from "../types/text-object";
import BracketTextObjects from "../types/bracket-text-objects";

export const CANVAS_HEIGHT = 750;
export const CANVAS_WIDTH = 971;

function buildCanvas(imageRef: MutableRefObject<HTMLImageElement | null>, bracketTextObjects: BracketTextObjects) {
    const COLLEGE_FONT = fontString(11);
    const ROUND_FONT = fontString(8);
    const NAME_FONT = fontString(24, 'bold');

    // Create a canvas which we can draw the bracket onto.
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Set bracket as background image
    const base = new Image();
    base.onload = () => {
        ctx.drawImage(base, 0, 0);
        drawTextObject(ctx, bracketTextObjects.tournamentName, NAME_FONT)
        drawTextObjects(ctx, bracketTextObjects.collegeNames, COLLEGE_FONT);
        drawTextObjects(ctx, bracketTextObjects.roundDates, ROUND_FONT);
        exportCanvasToImage(canvas, imageRef.current)
    }
    base.src = 'images/bracket.png';
}

function fontString(fontSize: number, fontWeight?: string): string {
    let font = `${fontSize}px Arial`;

    if (fontWeight) font = `${fontWeight} ${font}`;
    return font;
}

function drawTextObjects(ctx: CanvasRenderingContext2D, textObjects: TextObject[], font: string) {
    ctx.font = font;

	for (const t of textObjects) {
		drawTextObject(ctx, t);
	}
}

function drawTextObject(ctx: CanvasRenderingContext2D, textObject: TextObject, font?: string) {
    if (font) ctx.font = font;

    ctx.textAlign = textObject.textAlign;
	ctx.fillText(textObject.text, textObject.x, textObject.y);
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
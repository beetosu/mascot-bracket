import { MutableRefObject } from "react";
import TextObject from "../types/text-object";
import BracketTextObjects from "../types/bracket-text-objects";

export const CANVAS_HEIGHT = 750;
export const CANVAS_WIDTH = 971;

const COLLEGE_FONT = fontString(11);
const ROUND_FONT = fontString(8);
const NAME_FONT = fontString(25, 'bold');
const FIRST_FOUR_FONT = fontString(11, 'bold');

/**
 * Create the tournament bracket as a canvas element, and then provide an image of the canvas to the user.
 * @param imageRef A reference to the image element we are sending the canvas image to.
 * @param bracketTextObjects An object holding all of the pieces of text we want show, ordered by type.
 */
function buildCanvas(imageRef: MutableRefObject<HTMLImageElement | null>, bracketTextObjects: BracketTextObjects): void {
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
        drawBracketTextObjects(ctx, bracketTextObjects);
        exportCanvasToImage(canvas, imageRef.current)
    }
    base.src = 'images/bracket.png';
}

/**
 * Draw all text objects associated with the bracket.
 * @param ctx The context of the canvas we are drawing on.
 * @param bracketTextObjects An object holding all of the pieces of text we want show, ordered by type.
 */
function drawBracketTextObjects(ctx: CanvasRenderingContext2D, bracketTextObjects: BracketTextObjects): void {
    drawTextObject(ctx, bracketTextObjects.tournamentName, NAME_FONT)
    drawTextObjects(ctx, bracketTextObjects.collegeNames, COLLEGE_FONT);
    drawTextObjects(ctx, bracketTextObjects.roundDates, ROUND_FONT);
    drawTextObjects(ctx, bracketTextObjects.firstFourRank, FIRST_FOUR_FONT);
}

/**
 * Creates a font string for a text we want to draw on the canvas.
 * @param fontSize The pixel size of the font.
 * @param fontWeight A font weight, if we want to override the default normal font weight.
 * @returns A string, either formatted as '[fontSize]px Arial' or '[fontWeight] [fontSize]px Arial.
 */
function fontString(fontSize: number, fontWeight?: string): string {
    let font = `${fontSize}px Arial`;

    if (fontWeight) font = `${fontWeight} ${font}`;
    return font;
}

/**
 * Given a list of textObjects with the same font, draw them to all to the canvas.
 * @param ctx The context of the canvas we are drawing on.
 * @param textObjects A list of text objects that we are drawing on the canvas.
 * @param font The font of all text objects we are drawing.
 */
function drawTextObjects(ctx: CanvasRenderingContext2D, textObjects: TextObject[], font: string): void {
    ctx.font = font;

	for (const t of textObjects) {
		drawTextObject(ctx, t);
	}
}

/**
 * Draw a text object onto the canvas.
 * @param ctx The context of the canvas we are drawing on.
 * @param textObject The text object we are drawing to the canvas.
 * @param font The font associated with the text object, if a unique one is provided.
 */
function drawTextObject(ctx: CanvasRenderingContext2D, textObject: TextObject, font?: string): void {
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
    // If we do not have an image object, then we have nothing to export.
	if (image === null) return;

	const imageAlt = 'A college basketball bracket, with winners predicted by user using marchmascots.com.';

	image.setAttribute('src', canvas.toDataURL('image/png'));
	image.setAttribute('alt', imageAlt);
}

export default buildCanvas;
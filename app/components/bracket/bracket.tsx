import { MascotData } from '@/app/common/mascot-store'
import { useEffect, useRef } from 'react'

export default function Bracket({matchHistory}: { matchHistory: string }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
    const canvas = canvasRef.current;
		if (canvas === null) return;

    const ctx = canvas.getContext('2d');
		if (ctx === null) return;

		const base = new Image();
		base.onload = () => {
			ctx.drawImage(base, 0, 0);
		}
		base.src = '/bracket.png';
	});

  return (
    <canvas ref={canvasRef} width={1000} height={700} />
  )
}
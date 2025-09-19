import React, { useEffect, useRef } from 'react';
import fabric  from 'fabric';

interface DrawingCanvasProps {
  width?: number;
  height?: number;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ width = 1280, height = 720 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        width,
        height,
        backgroundColor: 'white',
        isDrawingMode: true,
      });

      fabricCanvasRef.current.freeDrawingBrush = new fabric.PencilBrush(fabricCanvasRef.current);
      fabricCanvasRef.current.freeDrawingBrush.width = 5;
      fabricCanvasRef.current.freeDrawingBrush.color = 'black';

      return () => {
        fabricCanvasRef.current?.dispose();
      };
    }
  }, [width, height]);

  return <canvas ref={canvasRef} className="border border-gray-600 shadow-lg" />;
};

export default DrawingCanvas;
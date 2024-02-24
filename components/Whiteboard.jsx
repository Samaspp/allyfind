import React, { useRef, useEffect, useState } from 'react';
import '../src/styles/Whiteboard.css';

function Whiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const onMouseDown = (event) => {
      setIsDrawing(true);
      const { offsetX, offsetY } = event.nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    };

    const onMouseMove = (event) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event.nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const onMouseUp = () => {
      setIsDrawing(false);
    };

    const onMouseLeave = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isDrawing]);

  return (
    <div className="whiteboard-container">
      <h2>Whiteboard</h2>
      <canvas ref={canvasRef} width={800} height={400} className="whiteboard-canvas" />
    </div>
  );
}

export default Whiteboard;

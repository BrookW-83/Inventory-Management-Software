'use client'

import React, { useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ObjectDetection = () => {
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  let model;

 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      imageRef.current.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  const detectObjects = async () => {
    const predictions = await model.detect(imageRef.current);
    setPredictions(predictions);
    drawPredictions(predictions);
  };

  const drawPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;
      ctx.strokeStyle = prediction.class === 'unopened' ? 'green' : 'red';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.font = '18px Arial';
      ctx.fillText(
        `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
        x,
        y > 10 ? y - 5 : 10
      );
    });
  };

  React.useEffect(() => {
     const loadModel = async () => {
    model = await cocoSsd.load();
    console.log('model: ', model)
    setIsModelLoading(false);
  };

    loadModel();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Object Monitoring</h1>
      {isModelLoading ? (
        <p>Loading model...</p>
      ) : (
        <>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="mb-4"
          />
          <button
            onClick={detectObjects}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Detect Objects
          </button>
          <div className="relative">
            <img ref={imageRef} className="max-w-full" alt="Uploaded" />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0"
              style={{
                width: imageRef.current ? imageRef.current.width : 'auto',
                height: imageRef.current ? imageRef.current.height : 'auto',
              }}
            />
          </div>
          {predictions.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Predictions:</h2>
              <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(predictions, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ObjectDetection;

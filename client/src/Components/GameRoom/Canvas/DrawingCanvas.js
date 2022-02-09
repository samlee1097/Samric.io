import React, {useState, useRef, useEffect } from 'react';
import {BsTrash} from 'react-icons/bs'
import FloodFill from 'q-floodfill'

function DrawingCanvas({utensil}) {
    const {tool, weight, color} = utensil;
    const magic = {
        width: "800px",
        height:"600px",
        backgroundColor: "white",
        borderStyle: "groove",
        cursor: "pointer"
    }

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    // const cavnasId = document.getElementById('canvas');
    // const dataURLstring = cavnasId?.toDataURL();
    // console.log(dataURLstring)

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = 1600;
        canvas.height = 1200;
        canvas.style.width = "800px";
        canvas.style.height = "600px";

        const context = canvas.getContext("2d")
        context.scale(2, 2)
        context.lineCap = "round"
        context.strokeStyle = `${color}`
        context.lineWidth = 5
        contextRef.current = context;
    },[])

    function location(evt, canvas2) {
        let offsetX, offsetY;
        if (evt.targetTouches) {
          const rect = canvas2.getBoundingClientRect();
          offsetX = Math.round(evt.targetTouches[0].pageX - rect.left);
          offsetY = Math.round(evt.targetTouches[0].pageY - rect.top);
        } else {
          offsetX = evt.offsetX*2;
          offsetY = evt.offsetY*2;
        }
        return { offsetX, offsetY };
      }

    function mouseDown({nativeEvent}){
        if (tool === "bucket"){
            const { offsetX, offsetY } = location(nativeEvent, canvasRef.current.getContext("2d"));
            const context = canvasRef.current.getContext("2d")
            const imgData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
            const floodFill = new FloodFill(imgData)
            floodFill.fill(color, offsetX, offsetY, 0)
            context.putImageData(floodFill.imageData, 0, 0)

        } else if (tool === "brush"){
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = color
            canvasRef.current.getContext("2d").lineWidth = weight
            setIsDrawing(true)

        } else { 
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = "white"
            canvasRef.current.getContext("2d").lineWidth = 10
            setIsDrawing(true)
        }
    }

    function mouseUp(){
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    function draw({nativeEvent}){
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }

    function resetCanvas(){
        canvasRef.current.getContext("2d").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    return (
        <>
            <canvas id="canvas" style={magic} 
                onMouseDown={mouseDown} 
                onMouseUp={mouseUp} 
                onMouseMove={draw}
                ref={canvasRef}
            />
            <div>
                <button id="trash-icon" title="Clear the board" onClick={resetCanvas}><BsTrash className='react-icon-tool'/></button>
            </div>
        </>
    );
}

export default DrawingCanvas
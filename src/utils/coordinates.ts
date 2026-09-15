import type React from "react";

export default function calculateImageCoordinates(e: React.MouseEvent<HTMLImageElement>, imageElement: HTMLImageElement) {

    const rect = imageElement.getBoundingClientRect();

    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const scaleX = imageElement.naturalWidth / rect.width;
    const scaleY = imageElement.naturalHeight / rect.height;

    const x = screenX * scaleX;
    const y = screenY * scaleY;

    return { x: Math.floor(x), y: Math.floor(y) };

}
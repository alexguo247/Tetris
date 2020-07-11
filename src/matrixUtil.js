export const detectCollision = (dest, src, offsetX = 0, offsetY = 0) => {
    const{
        width: srcWidth, 
        height: srcHeight
    } = getMatrixSize(src)
    const{
        width: destWidth, 
        height: destHeight
     } = getMatrixSize(dest)
     for(let srcY = 0; srcY < srcHeight; srcY++)
     {
         for(let srcX = 0; srcX < srcWidth; srcX++){
             if(src[srcY][srcX] !== 0)
             {
                 const destX = srcX + offsetX;
                 const destY = srcY + offsetY;
                 if(inRange(destX, 0, destWidth) && inRange(destY, 0, destHeight))
                 {
                     if(dest[destY][destX] !== 0)
                     {
                         return true;
                     }
                 }
                 else
                 {
                     return true;
                 }
             }
         }
     }
     return false;
}

export const combineMatrices = (dest, src, offsetX = 0, offsetY = 0, overwrite = true) => {
    const lastXIndex = getMatrixWidth(src) + offsetX - 1;
    const lastYIndex = getMatrixHeight(src) + offsetY - 1;

    const newMatrix = dest.map((rows, y) => {
        return rows.map((value, x) => {
            if(inRange(x, offsetX, lastXIndex + 1) && inRange(y, offsetY, lastYIndex+1)){
                if(overwrite || !value){
                    return src[y - offsetY][x - offsetX]
                }
            }
            return value;
        })
    })
}
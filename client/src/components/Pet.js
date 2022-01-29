import React from "react";

export default function Pet(props) {

    let canvasWidth = 300;
    let canvasHeight = 500;

    function calculateProportion(image){
        let imageProportion = 0;

        if(image.width > image.height){
            imageProportion = image.height / image.width;
        }
        else{
            imageProportion = image.width / image.height;
        }
        return imageProportion
    }

    function getHatSize(petName){
        let size = 0; 

        switch(petName){
            case 'dog':
                size = 100;
            break;
            case 'snake':
                size = 100; 
            break;
            case 'cat':
                size = 60; 
            break;
            default:
            break;
        }

        return size;
    }

    function getHatPosition(petName){
        let pos = {x: 0, y: 0}; 

        switch(petName){
            case 'dog':
                pos = {x: 74, y: 100};
            break;
            case 'snake':
                pos = {x: 74, y: 100};
            break;
            case 'cat':
                pos = {x: 22, y: 55};
            break;
            default:
            break;
        }

        return pos;
    }

    React.useEffect(() => {


        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");

        let canvasWidth = ctx.canvas.width;
        let canvasHeight = ctx.canvas.height;

        let img1 = new Image();
        img1.src = 'images/'+props.type+'.png';
        
        img1.height = 360;
        img1.width = img1.height * calculateProportion(img1);

        img1.onload = function () {
            ctx.drawImage(img1, canvasWidth - img1.width, canvasHeight - img1.height, img1.width, img1.height);
        };

        // hat
        if(props.hat !== false){
            let hatImage = new Image();
            hatImage.src = 'images/'+props.hat+'.png';
            let hatProportion = calculateProportion(hatImage);
            hatImage.height = getHatSize(props.type);
            hatImage.width = hatImage.height / hatProportion;
            let hatPost = getHatPosition(props.type);
            hatImage.onload = function () {
                ctx.drawImage(hatImage, hatPost.x, hatPost.y, hatImage.width, hatImage.height);
            };
        }

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }, []);

  

  return (
    <div>
      <canvas
        id="canvas"
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid #fff" }}>
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}

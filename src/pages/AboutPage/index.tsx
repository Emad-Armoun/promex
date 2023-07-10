import { useEffect } from "react";
import { AboutDiv, DeveloperDiv } from "./styled";
import myAvatar from '/src/assets/Emad.jpg';

export const AboutPage: React.FC = () => {

  useEffect(() => {
    const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.04)";
    const LETTERS_COLOR = "#0cff00";
    const FONT_SIZE = 10;

    const matrixCanvas = document.getElementById("matrixCanvas") as HTMLCanvasElement;
    const matrixContext = matrixCanvas.getContext("2d") as CanvasRenderingContext2D;

    matrixCanvas.height = window.innerHeight;
    matrixCanvas.width = window.innerWidth;

    const matrixLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrix = matrixLetters.split("");

    const columnsCount = matrixCanvas.width/FONT_SIZE;
    //an array of drops - one per column
    const dropsY: number[] = [];
    for(let x = 0; x < columnsCount; x++)
        dropsY[x] = 1; 

    function progressRain()
    {
        matrixContext.fillStyle = BACKGROUND_COLOR;
        matrixContext.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        matrixContext.fillStyle = LETTERS_COLOR;
        matrixContext.font = FONT_SIZE + "px arial";

        for(let i = 0; i < dropsY.length; i++)
        {
            const randomLetter = matrix[Math.floor(Math.random() * matrix.length)];
            const x = i * FONT_SIZE;
            const y = dropsY[i] * FONT_SIZE;
            matrixContext.fillText(randomLetter, x, y);

            if(y > matrixCanvas.height && Math.random() > 0.975)
                dropsY[i] = 0;

            dropsY[i]++;
        }
    }
    setInterval(progressRain, 35);
  }, []);

  return (
    <AboutDiv>
      <canvas id="matrixCanvas"></canvas>
      <div>
        <h1>PromEx</h1>
        <h2>A Promotool team's chrome extension</h2>
        <DeveloperDiv>
          <div>
            <span>Developed By:</span>
            <h2>Emad Armoun</h2>
            <a href="http://www.Armoun.com" target="_blank" rel="noreferrer">www.Armoun.com</a>
            <a href="mailto:emad.armoun@deliveryhero.com" target="_blank" rel="noreferrer">
              emad.armoun@deliveryhero.com
            </a>
          </div>
          <img src={myAvatar} alt="Emad Armoun" />
        </DeveloperDiv>
      </div>
    </AboutDiv>
  )
}

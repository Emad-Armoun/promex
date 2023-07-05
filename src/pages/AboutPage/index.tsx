import { useEffect } from "react";
import { AboutDiv, DeveloperDiv } from "./styled";

const AboutPage: React.FC = () => {

  useEffect(() => {
    // geting canvas by Boujjou Achraf
    const c = document.getElementById("c") as HTMLCanvasElement;
    if (!c) return;
    const ctx = c.getContext("2d") as CanvasRenderingContext2D;

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    const matrixLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    const matrix = matrixLetters.split("");

    const font_size = 10;
    const columns = c.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    const drops: number[] = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(let x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        // ctx.fillStyle = "#f4427d";//green text
        ctx.fillStyle = "#0cff00";//green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(let i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            const text = matrix[Math.floor(Math.random()*matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 35);
  }, []);

  return (
    <AboutDiv>
      <canvas id="c"></canvas>
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
          <img src="/src/assets/Emad.jpg" alt="Emad Armoun" />
        </DeveloperDiv>
      </div>
    </AboutDiv>
  )
}

export default AboutPage;
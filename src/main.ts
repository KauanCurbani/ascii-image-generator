import Jimp from "jimp";

const caracters: string = "#@$%*+=-:. ";


Jimp.read("./src/image.jpeg", function (err, image) {
  if (err) {
    console.log(err);
    return;
  }

  image.resize(110, 110)
  image.grayscale()

  const lines: string[][] = []
  const width = image.getWidth() - 1
  const height = image.getHeight() - 1

  for (let y = 0; y < height; y++) {
    const line = []
    for(let x = 0; x < width; x++) {
      const color = image.getPixelColor(x, y);
      const gray = Jimp.intToRGBA(color).b
      const index = Math.floor(gray / (255 / caracters.length))
      line.push(caracters[index])
    }
    lines.push(line)
  }

  lines.forEach(line => console.log(line.join("")))
});

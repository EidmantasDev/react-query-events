import fs from 'node:fs/promises';

async function getImages(req, res) {
  const imagesFileContent = await fs.readFile('./data/images.json');
  const images = JSON.parse(imagesFileContent);
  res.json({ images });
}

export { getImages };

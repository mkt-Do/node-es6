import fs from 'fs';
import { promisify } from 'util';

const read = async () => {
  const text = await promisify(fs.readFile)('package.json', 'utf8');
  console.log(text);
};

read();


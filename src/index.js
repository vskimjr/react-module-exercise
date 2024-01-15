import foods from './foods';
import { choice, remove } from './helpers';

const RANDOMFRUIT = choice(foods);

console.log(`I'd like one ${RANDOMFRUIT}, please`);

console.log(`Here you go: ${RANDOMFRUIT}`);

console.log(`Delicious! May I have another?`);

const FRUITSLEFT = remove(foods, RANDOMFRUIT);

console.log(`I'm sorry, we're all out. We have ${FRUITSLEFT.length} left`);
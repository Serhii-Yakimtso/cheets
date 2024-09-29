console.log('hello');

//  (Перевірка кількості слів)
const txt =
  'On the picture I see of the most well-known two icons. There is a green original icon of a mobile operating system Android on the left of the picture. And there is a black icon of another mobile operating system developed by Apple - an American multinational technology company that revolutionized the technology sector through its innovation of computer software, personal computers, mobile tablets and smartphones.     Also there is icon with context VS, which means signs of comparison between the two brands. The author of this poster wanted to share advantages and disadvantages of this mobile operation systems. This picture can be a leaflet of some webinar or meeting to changing user’s experience.';

const spliteTxt = txt.split(' ');
console.log(spliteTxt);

const filterTxt = spliteTxt
  .filter(word => word.toLowerCase() !== 'the')
  .filter(word => word !== 'a')
  .filter(word => word !== 'of')
  .filter(word => word !== '-')
  .filter(word => word !== '')
  .filter(word => word !== 'to');

console.log(filterTxt);

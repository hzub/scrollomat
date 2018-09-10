
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default [
  {
    id: 0,
    startSlide: 1,
    endSlide: 2,
    position: 'left',
    content: 'xyz',
    bgColor: getRandomColor(),
  },
  {
    id: 1,
    startSlide: 2,
    endSlide: 2,
    position: 'right',
    content: 'abc',
    bgColor: getRandomColor(),
  },
  {
    id: 2,
    startSlide: 3,
    endSlide: 4,
    position: 'center',
    content: 'foobar',
    bgColor: getRandomColor(),
  },
  {
    id: 3,
    startSlide: 4,
    endSlide: 4,
    position: 'left',
    content: 'test',
    bgColor: getRandomColor(),
  },
  {
    id: 4,
    startSlide: 5,
    endSlide: 7,
    position: 'right',
    content: 'qweqwe',
    bgColor: getRandomColor(),
  },
  {
    id: 5,
    startSlide: 7,
    endSlide: 7,
    position: 'left',
    content: 'end',
    bgColor: getRandomColor(),
  },
]

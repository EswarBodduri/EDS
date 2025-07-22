export default function decorate(block) {
  const headline = block.querySelector('h1');
  if (headline) {
    headline.classList.add('highlight');
  }
}

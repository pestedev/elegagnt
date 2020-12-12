/***
 *  Change Element (mostly input element like input/textarea) height dynamically
 * @param ref [String] element'ref
 * @param maxHeight [Number] maximum of height of element
 */
const resizeElementHeight = (ref, maxHeight) => {
  try {
    const element = ref.current; // get element ref here
    element.style.height = 'auto'; // if it doesn't have height, so first assign it

    if (element.scrollHeight < maxHeight) {
      element.style.height = `${element.scrollHeight}px`;
    } else {
      element.style.height = `${maxHeight}px`;
    }
  } catch (e) {
    console.error(e);
  }
};

export default resizeElementHeight;

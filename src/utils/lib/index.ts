/**
 * Function to adjust the contrast in the DOM by incrementing or decrementing.
 *
 * @param {string} elementId - The ID of the DOM element whose contrast needs to be adjusted.
 * @param {number} increment - The amount by which to increment or decrement the contrast.
 */

export function adjustContrast(elementId: any, increment:any) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found.`);
        return;
    }

    element.style.filter = `contrast(${increment})`;
}

/**
 * Function to adjust the grayscale in the DOM.
 *
 * @param {string} elementId - The ID of the DOM element whose contrast needs to be adjusted.
 * @param {string} flag - Flag to turn on grayscale or turn off grayscale.
 */
export function grayScale(elementId: any, flag: boolean) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found.`);
        return;
    }
    if(flag){
        element.style.filter = `grayscale(100%)`;
    }else{
        element.style.filter = `grayscale(0)`;
    }
}

/**
     * Function to adjust the negative contraste in the DOM.
     *
     * @param {string} elementId - The ID of the DOM element whose contrast needs to be adjusted.
     * @param {string} flag - Flag to turn on grayscale or turn off grayscale.
*/
export function negativeContrast(elementId: any, flag: boolean) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found.`);
        return;
    }
    console.log(flag)
    if(flag){
        element.style.filter = `invert(1)`;
    }else{
        element.style.filter = `invert(0)`;
    }
}

export function underlineLinks(elementId: any, flag: boolean) {
    const links = document.querySelectorAll(elementId);
    links.forEach((link: any) => {
      if (flag) {
        link.style.textDecoration = 'underline';
      } else {
        link.style.textDecoration = 'none';
      }
    });
}

export function adjustFontSize(elements: string[], increase: boolean) {
    elements.forEach(elementType => {
      const elementsOfType = document.querySelectorAll(elementType);
      elementsOfType.forEach((element: any) => {
        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
        const newFontSize = increase ? currentFontSize + 2 : currentFontSize - 2;
        element.style.fontSize = `${newFontSize}px`;
      });
    });
}

export function reset(elements: string[]) {
    elements.forEach(elementType => {
      const elementsOfType = document.querySelectorAll(elementType);
      elementsOfType.forEach((element: any) => {
        element.style.fontSize = '';
      });
    });
  }

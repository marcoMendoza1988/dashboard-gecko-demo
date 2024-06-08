export function formatPrice(price: number): string {
    const priceString = price?.toString();
    const [wholeNumber, fractionalPart = ''] = priceString?.split('.');

    const slicePartStart = price !== 0 ? 2 : 4;
    const paddedFractionalPart = fractionalPart.padStart(slicePartStart, '0');

    const formattedWholeNumber = wholeNumber.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    const formattedPrice = `${formattedWholeNumber}.${paddedFractionalPart}`;
  
    return formattedPrice;
  }
  
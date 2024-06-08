export function formatPrice(price: number): string {
  const priceString = price?.toString();
  const [wholeNumber, fractionalPart = '']: any = priceString?.split('.');

  const slicePartStart = price !== 0 ? 2 : 4;
  const paddedFractionalPart: any = fractionalPart?.padStart(slicePartStart, '0') || '0';

  const formattedWholeNumber: any = wholeNumber?.replace(/(\d)(?=(\d{3})+$)/g, '$1,') || '.0000';
  const formattedPrice: string = `${formattedWholeNumber}.${paddedFractionalPart}`;

  return formattedPrice;
}

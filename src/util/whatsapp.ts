export function createWhatsAppOrderURL(
  itemName: string,
  price: number,
  plateSize: string,
): string {
  const phoneNumber = "2347891230";
  const message = `Hello Krislaw Kitchen

I'd like to place an order:

*Item:* ${itemName}
*Size:* ${plateSize}
*Price:* ₦${price.toLocaleString()}

Please confirm my order. Thank you!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

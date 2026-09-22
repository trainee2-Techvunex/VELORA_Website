export const formatPrice = (amount: number): string => {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
};

export const calculateDiscountAmount = (price: number, discountPercent: number): number => {
  return Math.round((price * discountPercent) / 100);
};

export const getEstimatedDeliveryDate = (daysToAdd: number = 3): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const generateOrderId = (): string => {
  const prefix = 'VEL';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${timestamp}-${random}`;
};

export const generateReference =
  (
    prefix: string
  ) => {
    return `${prefix}-${Date.now()}`;
  };
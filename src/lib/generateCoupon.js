export const generateCoupon = (title = "", expiredate = "") => {
  const formattedTitle = title.toUpperCase().replace(/\s+/g, "");
  const formattedExpireDate = expiredate
    .split("-")
    .reverse()
    .join("");

  const couponCode = `${formattedTitle}${formattedExpireDate}`;
  return couponCode;
};

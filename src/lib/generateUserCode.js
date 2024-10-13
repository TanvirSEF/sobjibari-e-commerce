export default function generateUserCode(prefix, fullName) {
  // Get the initials from the full name
  let initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  // Get the current date in MMDDYYYY format
  let now = new Date();
  let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  let day = String(now.getDate()).padStart(2, "0");
  let year = now.getFullYear();

  const userCode = `${prefix}-${initials}-${month}${day}${year}`;
  // Combine prefix, initials, and date
  return userCode;
}

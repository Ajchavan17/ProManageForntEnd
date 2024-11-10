export const truncateString = (str, limit = 29) => {
  if (str.length > limit) {
    // Truncate to the limit and add three dots
    return `${str.substring(0, limit - 3)} ...`;
  }
  return str;
};

export const formatDate = (date) => {
  // Convert to Date object if `date` is a string
  if (typeof date === "string") {
    date = new Date(date);
  }

  // Check if date is valid
  if (date instanceof Date && !isNaN(date)) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
  } else {
    return "Invalid Date"; // Optional: handle invalid dates
  }
};

export const isDueDatePassed = (dueDate) => {
  const today = new Date();
  return new Date(dueDate) < today;
};

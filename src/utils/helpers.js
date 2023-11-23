export const formatDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getYear = (date) => {
  const dateObj = new Date(date);
  return dateObj.getFullYear();
};

export const getIdFromUrl = (url) => {
  const urlArray = url.split("/");
  return urlArray[urlArray.length - 2];
};

export const getMovieImage = (id) => {
  return `/src/assets/images/episode${id}.jpeg`;
};

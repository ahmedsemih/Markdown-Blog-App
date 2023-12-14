import { authors } from "./constants";

const getAuthorImage = (name: string) => {
  const author = authors.find((author) => author.name + "\r" === name);
  return author?.image;
};

export default getAuthorImage;

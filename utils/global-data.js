// export const pp = 'ok';

export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Okay Basketball';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : ' ';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const image = process.env.IMAGE
    ? decodeURI(process.env.IMAGE)
    : '/images/bball.png';

  return {
    name,
    blogTitle,
    footerText,
    image,
  };
};

export const getGlobalData = () => {
  const image =
    'https://www.okaybasketball.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhi.0c4f657d.png&w=3840&q=75';
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Okay Basketball';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : ' ';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
    image,
  };
};

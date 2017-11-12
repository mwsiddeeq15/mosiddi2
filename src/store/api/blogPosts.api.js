import axios from 'axios';

export const getBlogPostsAPI = (userId) => {
  // const url = `/api/blogPosts/${ userId }`;
  const url = `http://localhost:5000/blogService/posts/${ userId }`;
  const mapToPayload = ({ data: { posts } }) => ({ posts });

  return axios.get(url).then(mapToPayload);
};

export const saveBlogPostAPI = (userId, post) => {
  // const url = `/api/blogPosts/${ userId }/${ post.id }`;
  const url = `http://localhost:5000/blogService/posts/${ userId }${ post.id ? `/${post.id}` : '' }`;
  const mapToPayload = ({ data: { posts } }) => ({ posts });
  const httpPostData = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: post
  };

  return axios(httpPostData).then(mapToPayload);
};

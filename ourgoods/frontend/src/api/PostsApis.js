import AxiosInstance from './AxiosInstance';

const PostsApis = {
  getPostList() {
    return AxiosInstance({
      url: '/post',
      method: 'get',
    });
  },

  getOnePost(id) {
    return AxiosInstance({
      url: '/post/' + id,
      method: 'get',
    });
  },

  writePost(post) {
    console.log(post);

    return AxiosInstance({
      url: '/post',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      data: post,
    });
  },

  deleteOnePost(id) {
    return AxiosInstance({
      url: '/post/' + id,
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
      },
      data: { id },
    });
  },

  // postUpdate(postData) {
  //   const { post, id } = postData;
  //   return AxiosInstance({
  //     url: '/post/' + id,
  //     method: 'put',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     data: post,
  //   });
  // },
};

export default PostsApis;

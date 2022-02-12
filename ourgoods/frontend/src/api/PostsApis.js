import AxiosInstance from './AxiosInstance';

const PostsApis = {
  getPostList() {
    return AxiosInstance({
      url: 'post',
      method: 'get',
    });
  },

  //url앞에 post가 자동으로 들어감
  getOnePost(id) {
    return AxiosInstance({
      url: id,
      method: 'get',
    });
  },

  deleteOnePost(id) {
    console.log('iddddddddddddd', id);

    return AxiosInstance({
      url: '/post/' + id,
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
      },
      data: { id },
    });
  },

  postUpdate(postData) {
    const { post, id } = postData;
    console.log(post);
    console.log(id);
    return AxiosInstance({
      url: '/post/' + id,
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      data: post,
    });
  },
};

export default PostsApis;

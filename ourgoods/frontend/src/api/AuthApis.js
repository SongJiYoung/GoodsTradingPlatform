import AxiosInstance from './AxiosInstance';

export default {
  postLogin({ userId, password }) {
    return AxiosInstance({
      url: 'accounts/login',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { userId, password },
    });
  },
  postRegister({ id, password, name, email, phone, address }) {
    return AxiosInstance({
      //post
      url: 'member/addMembers',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id,
        password,
        name,
        email,
        phone,
        address,
      },
    });
  },
  idCheck({ id }) {
    //
    console.log('postIdCheck값', id);
    return AxiosInstance({
      //post idCheck값 req는 항상 success오도록 backendTest/server.js서버설정중
      url: 'member/memberIdCheck',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id,
      },
    });
  },
  emailCheck(email) {
    console.log('getEmailParams값', email);
    return AxiosInstance({
      //data: undefinedheaders: {Accept: 'application/json, text/plain, */*'}
      // "get"params: {email: 'a@gmail.com} 로 get 리퀘하면 1234로(자바에서 string 랜덤값) response오도록 backendTest/server.js서버설정중'}
      url: 'member/mailCheck',
      method: 'get',
      params: { email: email },
    });
  },
};

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
  postRegister({
    id,
    password,
    name,
    email,
    phone,
    zonecode,
    address,
    detailAddress,
  }) {
    //member/*라우터 안에있으므로 밑의 라우터들은 기본값으로 url앞에 /member가 붙어있음
    console.log('postRegister값', {
      id,
      password,
      name,
      email,
      phone,
      zonecode,
      address,
      detailAddress,
    });
    return AxiosInstance({
      //post
      url: 'addMembers',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id,
        pw: password,
        name,
        email,
        phone,
        addr1: zonecode,
        addr2: address,
        addr3: detailAddress,
      },
    });
  },
  idCheck(id) {
    //
    console.log('postIdCheck값', id);
    return AxiosInstance({
      //post idCheck값 req는 항상 success오도록 backendTest/server.js서버설정중
      url: 'memberIdCheck',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        id: id,
      },
    });
  },
  //
  emailCheck(email) {
    console.log('getEmailParams값', email);
    return AxiosInstance({
      //data: undefinedheaders: {Accept: 'application/json, text/plain, */*'}
      // "get"params: {email: 'a@gmail.com} 로 get 리퀘하면 1234로(자바에서 string 랜덤값) response오도록 backendTest/server.js서버설정중'}
      // url: 'mailCheck',
      // method: 'get',
      // params: { email: email },
      url: 'mailCheck',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        email: email,
      },
    });
  },
};

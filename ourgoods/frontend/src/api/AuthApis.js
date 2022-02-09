import AxiosInstance from './AxiosInstance';

const AuthApis = {
  // 하단의 라우터들은 member/*라우터 안에있으므로 기본값으로 url앞에 /member/가 붙어있으므로생략
  postLogin(userLoginInput) {
    const { userIdInput, password } = userLoginInput;
    console.log('postLogin값', userLoginInput);
    return AxiosInstance({
      url: 'login',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id: userIdInput, pw: password },
    });
  },
  postRegister(userRegInfo) {
    const {
      id,
      password,
      name,
      email,
      phone,
      zonecode,
      address,
      detailAddress,
    } = userRegInfo;
    console.log('postRegister값', userRegInfo);
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

export default AuthApis;

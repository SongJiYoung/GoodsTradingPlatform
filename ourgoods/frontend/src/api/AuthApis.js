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
    return AxiosInstance({
      // url:'member/memberIdCheck'
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
  emailCheck() {
    return AxiosInstance({
      url: 'member/mailCheck',
      method: 'get',
    });
  },
};

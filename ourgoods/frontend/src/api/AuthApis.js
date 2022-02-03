import AxiosInstance from './AxiosInstance';

export default {
  postLogin({ userId, password }) {
    return AxiosInstance({
      url: 'accounts/login',
      method: 'post',
      data: { userId, password },
    });
  },

  postRegister({
    userId,
    password,
    userName,
    userEmail,
    phoneNumber,
    userTown,
  }) {
    return AxiosInstance({
      url: 'accounts/register',
      method: 'post',
      data: {
        userId,
        password,
        userName,
        userEmail,
        phoneNumber,
        userTown,
      },
    });
  },
};

import instance from './request';

export const getChatMessage = () => {
  return instance({
    url: '/usermessages',
    method: 'get',
  });
};

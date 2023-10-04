import axios from 'axios';
import { getCookie } from '../libs/cookies';
import { useQuery } from '@tanstack/react-query';
import { TResponse } from '../types/types';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/'
      : 'http://localhost:3001/',
  // withCredentials: true, // 쿠키를 통해 사용자 세션을 찾아 이를 재활용
  // params: {
  //   api_key: process.env.API_KEY,
  //   language: "ko-KR",
  // },
  headers: {
    access_token: getCookie('x-jwt'),
  }
});

export default instance;
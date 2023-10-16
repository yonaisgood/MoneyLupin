import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

type SignupResponse = {
  error: string | null;
  isPending: boolean;
  signup: (email: string, password: string, displayName: string) => void;
};
// 회원가입을 진행하는 훅
export const useSignup = (): SignupResponse => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState<string | null>(null);
  // 현재 서버와의 통신 상태를 저장합니다.
  const [isPending, setPending] = useState<boolean>(false);

  const { dispatch } = useAuthContext();

  const signup = (email: string, password: string, displayName: string) => {
    setError(null);
    setPending(true);

    // 회원가입이 처리되는 함수
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error('회원 가입에 실패했습니다!');
        }

        // 회원의 별명정보를 업데이트합니다.
        updateProfile(user, { displayName })
          .then(() => {
            setError(null);
            setPending(false);
            dispatch({ type: 'login', payload: user });
          })
          .catch((err) => {
            setError(err.message);
            setPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
        console.log(error);
        if (err.message.includes('email-already-in-use')) {
          alert('중복된 이메일이 존재합니다.');
        }
      });
  };
  return { error, isPending, signup };
};

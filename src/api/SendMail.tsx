import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export interface FormData {
  email: string;
  subject: string;
  text: string;
}

export const SendMail = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      return axios.post(
        'https://personal-web-backend-1wxz.onrender.com/api/send-mail',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
    },
  });
};

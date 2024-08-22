export interface FormData {
  email: string;
  subject: string;
  text: string;
}

export interface SendMailResponse {
  message: string; 
}

export interface SendMailState {
  isSended: boolean;
  isSendingNow: boolean;
  isError: string | null;
}

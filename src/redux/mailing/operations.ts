import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FormData {
  email: string;
  subject: string;
  text: string;
}

export const sendMail = createAsyncThunk<any, FormData, { rejectValue: string }>(
  'contact/sendMail',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://personal-web-backend-1wxz.onrender.com/api/send-mail',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || 'Failed to send mail'
      );
    }
  }
);
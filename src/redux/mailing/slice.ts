import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendMail } from "./operations";
import { SendMailState } from "./types";

const initialState: SendMailState = {
  isSended: false,
  isSendingNow: false,
  isError: null,
};

const sendMailSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state) => {
        state.isSended = false;
        state.isSendingNow = true;
        state.isError = null;
      })
      .addCase(sendMail.fulfilled, (state) => {
        state.isSended = true;
        state.isSendingNow = false;
        state.isError = null;
      })
      .addCase(sendMail.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isSended = false;
        state.isSendingNow = false;
        state.isError = action.payload || 'An unexpected error occurred';
      });
  }
});

export const sendMailReducer = sendMailSlice.reducer;
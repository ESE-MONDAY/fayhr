import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface UserLoginInfo {
    status:  "idle" | "loading" | "succeeded" | "failed";
    userinfo: {
        email: string;
        mame: string;
    } | null;
    
  }



  export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload: UserLoginInfo, thunkApi) => {
  
      try {
        // const response = await userLogin(payload);
        // SetAuthorizedUser("accessToken", response);
      
        return payload
      } catch (error: any) {
        // const message = handleAxiosErrorMessage(error);
        toast.error(error);
        thunkApi.rejectWithValue(error);
      }
    }
  );

  
  export const registerUser = createAsyncThunk(
    "auth/login",
    async (payload: UserLoginInfo, thunkApi) => {
  
      try {
        // const response = await userLogin(payload);
        // SetAuthorizedUser("accessToken", response);
      
        return payload
      } catch (error: any) {
        // const message = handleAxiosErrorMessage(error);
        toast.error(error);
        thunkApi.rejectWithValue(error);
      }
    }
  );

  const initialState = {
    status: 'idle',
    userinfo: null
   
}


  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(loginUser.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userinfo = action.payload as any;
      });
      builder.addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      });
    },

    });
export default authSlice.reducer;
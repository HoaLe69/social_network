import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import roomConversationReducer from "./conversationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    room: roomConversationReducer,
  },
});

export default store;

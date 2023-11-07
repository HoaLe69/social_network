import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
  name: "roomConversation",
  initialState: {
    selectedRoom: {
      id: undefined,
      recevierId: undefined,
    },
    createRoomConversation: {
      isFetching: false,
      error: false,
      room: {},
    },
    getAllRoomConversation: {
      isFetching: false,
      error: false,
      rooms: [],
    },
  },
  reducers: {
    getSelectedRoom: (state, action) => {
      state.selectedRoom.id = action.payload;
    },
    createRoomConversationStart: (state) => {
      state.createRoomConversation.isFetching = true;
    },
    createRoomConversationSuccess: (state, action) => {
      state.createRoomConversation.isFetching = false;
      state.createRoomConversation.room = action.payload;
      state.createRoomConversation.error = false;
    },
    createRoomConversationFailed: (state) => {
      state.createRoomConversation.isFetching = false;
      state.createRoomConversation.error = true;
    },
    getAllRoomConversationStart: (state) => {
      state.getAllRoomConversation.isFetching = true;
    },

    getAllRoomConversationSuccess: (state, action) => {
      state.getAllRoomConversation.isFetching = false;
      state.getAllRoomConversation.rooms = action.payload;
      state.getAllRoomConversation.error = false;
    },
    getAllRoomConversationFailed: (state) => {
      state.getAllRoomConversation.isFetching = false;
      state.getAllRoomConversation.error = true;
    },
  },
});

export const {
  getSelectedRoom,
  createRoomConversationStart,
  createRoomConversationFailed,
  createRoomConversationSuccess,
  getAllRoomConversationStart,
  getAllRoomConversationFailed,
  getAllRoomConversationSuccess,
} = conversationSlice.actions;

export default conversationSlice.reducer;

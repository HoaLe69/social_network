import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    width: 240,
    isShowModalSearch: false,
    isShowModalNotifi: false,
  },
  reducers: {
    clickExpand: (state) => {
      state.width = 240;
      state.isShowModalSearch = false;
      state.isShowModalNotifi = false;
    },
    clickNarrow: (state) => {
      state.width = 72;
      state.isShowModalNotifi = false;
      state.isShowModalSearch = false;
    },
    clickShowModalSearch: (state) => {
      state.width = 72;
      state.isShowModalNotifi = false;
      state.isShowModalSearch = true;
    },
    clickShowModalNotifi: (state) => {
      state.width = 72;
      state.isShowModalNotifi = true;
      state.isShowModalSearch = false;
    },
  },
});

export const {
  clickExpand,
  clickNarrow,
  clickShowModalSearch,
  clickShowModalNotifi,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;

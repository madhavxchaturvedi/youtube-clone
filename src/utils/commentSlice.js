import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;

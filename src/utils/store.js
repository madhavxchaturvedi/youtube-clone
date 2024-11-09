import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat:chatSlice,
    comment:commentSlice,
  },
});

export default store;

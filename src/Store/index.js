import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../reducers/searchSlice'

export default configureStore({
  reducer: {
      search: searchSlice,
  },
  // It is required to enable redux devtool extension in browser
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
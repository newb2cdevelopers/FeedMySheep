import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/user/userSlice";
import  eventsReducer  from "../features/events/eventsSlice";
import bookingsReducer from "../features/bookings/bookingSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        events: eventsReducer,
        bookings: bookingsReducer
    },
    devTools: process.env.REACT_APP_NODE_ENV !== 'production',
})
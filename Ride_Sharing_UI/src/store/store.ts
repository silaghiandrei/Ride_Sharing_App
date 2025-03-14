import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/loginSlice';
import signUpDriverReducer from '../slices/signUpDriverSlice';
import signUpPassengerReducer from '../slices/signUpPassengerSlice';
import passengerRidesReducer from '../slices/passengerRidesHistorySlice.ts'
import driverRidesReducer from '../slices/driverRidesHistorySlice.ts';
import orderNotificationReducer from '../slices/orderNotificationSlice';

export const store = configureStore({
    reducer: {
        driverSignUp: signUpDriverReducer,
        passengerSignUp: signUpPassengerReducer,
        passengerRides: passengerRidesReducer,
        driverRides: driverRidesReducer,
        auth: authReducer,
        orderNotification: orderNotificationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });
            console.log(response.data);
            if (!response.ok) {
                throw new Error("Login failed");
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

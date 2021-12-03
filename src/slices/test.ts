import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'test';

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        test(state, action: PayloadAction<string>) {
            state = action.payload;
        }
    }
});

export const testActions = testSlice.actions;
export default testSlice.reducer;

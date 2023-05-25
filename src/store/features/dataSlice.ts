import { createSlice } from '@reduxjs/toolkit';


export interface IData {
    text: string;
    important: boolean;
    id: number;
}

interface initialState {
    items: IData[];
        
    
}




const initialState = {
    items:
    [
        {text: "Drink Coffee", important: true, id: 1},
        {text: "Learn JS", important: true, id: 2},
        {text: "Drink Beer", important: true, id: 3},
        {text: "Sleep", important: true, id: 4},
        
    ],

}

export const dataSLice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        refreshData: (state, action) => {
            state.items = action.payload;
        }

    }    
})

export const {refreshData} = dataSLice.actions;
export default dataSLice.reducer;
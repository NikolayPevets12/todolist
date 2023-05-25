import { createSlice } from '@reduxjs/toolkit';

interface initialState {
    modalIsOpen: boolean;
    modalInner: string;
    modalInput: string;
    isAlert: boolean;
    editId: number;
}

const initialState: initialState  = {
    modalIsOpen: false,
    modalInner: 'add',
    modalInput: '',
    isAlert: false,
    editId: 0,
}

export const modalSLice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalIsOpen: (state, action) => {
            state.modalIsOpen = !state.modalIsOpen;
        },
        setModalInner: (state, action) =>{
            state.modalInner = action.payload;
        },
        setModalInput: (state, action) => {
            state.modalInput = action.payload;
        },
        setIsAlert: (state, action) => {
            state.isAlert = action.payload;
        },
        setModalEditId: (state, action)  => {
            state.editId = action.payload
        }
    }
})

export const {setModalIsOpen, setModalInner, setModalInput, setIsAlert, setModalEditId} = modalSLice.actions;
export default modalSLice.reducer;
import React, {FC} from "react";
import './AppHeader.css'
import {useDispatch, useSelector} from 'react-redux';
import { setModalIsOpen, setModalInner } from "../store/features/modalSlice";




const AppHeader:FC = () => {

    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state: any) => state.modalIsOpen)
    const data = useSelector((state: any) => state.data.items)

    const open = () =>{
        dispatch(setModalInner('add'))
        dispatch(setModalIsOpen(!modalIsOpen))
    }

    return(
        <>
        <div className="app-header">
        <div className="app-header-info">
            <div>
                <h1>To Do List</h1>
            </div>
            <div>
                <p>{data.length} {(data.length > 1) ? 'items' : 'item'}</p>
            </div>
        
        </div>
        <button onClick={open}>Add new item</button>
        </div>
        </>
    )
}

export default AppHeader;
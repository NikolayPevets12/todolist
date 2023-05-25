import React, {useState, useEffect, FC, ChangeEvent} from "react";
import './ModalAdd.css';
import generateId from "../services";
import { setModalIsOpen, setModalInner, setModalInput, setIsAlert } from "../store/features/modalSlice";
import {useDispatch, useSelector} from 'react-redux';
import { refreshData } from "../store/features/dataSlice";



const ModalAdd:FC = () =>{

    const dispatch = useDispatch();
    const modalInput = useSelector((state: any) => state.modal.modalInput)
    const isAlert = useSelector((state: any) => state.modal.isAlert )
    const data = useSelector((state: any) => state.data.items)


    useEffect(() => {
        if(modalInput){
            dispatch(setIsAlert(false));
        }
      }, [modalInput]);

    const addNewItem = (event: React.MouseEvent<HTMLElement>) =>{
        if(!modalInput){
          event.preventDefault();
          dispatch(setIsAlert(true));
        } else{
          let newItem = {text: modalInput, important: true, id: generateId(data)}
          dispatch(refreshData([...data, newItem]))
          dispatch(setModalIsOpen(false))
          dispatch(setModalInput(''))
          dispatch(setIsAlert(false));
        }
  
      }
      function handleChange (event: ChangeEvent<HTMLInputElement>) {
        dispatch(setModalInput(event.target.value))
        if(modalInput){dispatch(setIsAlert(false))}
      } 

      function closeModal() {
        dispatch(setModalIsOpen(false));
        dispatch(setIsAlert(false));
      }
    return(
        <>  
            <div className="modal-add">
            <div className="modal-add-body">
            <h1>Add new task:</h1>
            {isAlert?<div className="modal-alert">Field is empty</div>: null}
            <input type="textarea" name="text" id="exampleText" maxLength={100} className="modal-text-input" onChange={handleChange}/>
            </div>
            <div className="button-group">
            <button  onClick ={addNewItem} className="add">Add Item</button>
            <button  onClick={closeModal} className="cancel">Cancel</button>
            </div>    
            </div>
        </>
    ) 

}
export default ModalAdd;








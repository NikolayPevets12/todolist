import React, {useEffect,FC, ChangeEvent} from "react";
import './ModalEdit.css';
import { setModalIsOpen, setModalInput, setIsAlert } from "../store/features/modalSlice";
import {useDispatch, useSelector} from 'react-redux';
import { refreshData } from "../store/features/dataSlice";




const ModalEdit:FC = () => {

    const dispatch = useDispatch();
    const modalInput = useSelector((state: any) => state.modal.modalInput)
    const isAlert = useSelector((state: any) => state.modal.isAlert )
    const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen )
    const data = useSelector((state: any) => state.data.items)
    const editId = useSelector((state: any) => state.modal.editId)

    const itemValue = data.findIndex((item: any) => {
        return item.id === editId;
      });  
      
      useEffect(() => {
        dispatch(setModalInput(data[itemValue].text))
      }, []);

      useEffect(() => {
        if(modalInput){
            dispatch(setIsAlert(false));
        }
      }, [modalInput]);

    function editItem(event: React.MouseEvent<HTMLElement>)  {
        if(!modalInput){
            event.preventDefault();
            dispatch(setIsAlert(true))
        }
        else{
            const newItem = {text: modalInput, important: true, id: editId}
            const newData = [...data.slice(0, itemValue),newItem,...data.slice(itemValue+1)];
            dispatch(refreshData(newData))
            dispatch(setModalIsOpen(!modalIsOpen))
            dispatch(setModalInput(''))
        }
      }

    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        dispatch(setModalInput(event.target.value));
        !modalInput ? dispatch(setIsAlert(true)) : dispatch(setIsAlert(false)) ;
    }  

    function closeModal(){
        dispatch(setModalIsOpen(!modalIsOpen));
        dispatch(setIsAlert(false));
        dispatch(setModalInput(''));
    }

    return(
        <>
        <div className="modal-edit">
        <h1>Edit task:</h1>
        {isAlert?<div className="modal-alert">Field is empty</div>: null}
        <input type="textarea" name="text" id="exampleText" value = {modalInput} maxLength={100} className="modal-edit-input" onChange={handleChange}/>
        <div className="button-group">
        <button  className="edit" onClick={editItem}>Edit Item</button>
        <button  onClick={closeModal} className="cancel">Cancel</button>
        </div>  
        </div>
    </>
    )

    
}

export default ModalEdit;
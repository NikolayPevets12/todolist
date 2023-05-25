import "./ToDoModal.css";
import ModalAdd from "../ModalAdd/ModalAdd";
import ModalEdit from "../ModalEdit/ModalEdit";
import { FC } from "react";
import { useSelector, useDispatch} from 'react-redux';





const ToDoModal: FC = () =>{
  const dispatch = useDispatch();  
  const modalInner = useSelector((state: any) => state.modal.modalInner)
  const data = useSelector((state: any) => state.data.items)

    return(
        <>
        <div className="modal">
          <div className="modal-overlay"></div>
          <div className="modal-window">
          {modalInner === 'edit' ? <ModalEdit/> : <ModalAdd/>}
          </div>
          </div>
        </>
    )
}

export default ToDoModal;



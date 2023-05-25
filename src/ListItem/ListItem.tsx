import  {FC} from "react";
import './ListItem.css'
import { setModalIsOpen, setModalInner, setModalEditId} from "../store/features/modalSlice";


import {useDispatch, useSelector} from 'react-redux';
import { refreshData } from "../store/features/dataSlice";

interface ListItemProps {
    key: number;
    text: string;
    id: number;
}

const ListItem:FC<ListItemProps> = ({text, id}) =>{
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.data.items)
    const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen)
   
    const deleteItem = () =>{
        const newData =items.filter((item: any) => {
            return item.id != id  
        })
        dispatch(refreshData(newData))  
    }

    const editItem = () => {
        dispatch(setModalIsOpen(!modalIsOpen))    
        dispatch(setModalInner('edit')) 
        dispatch(setModalEditId(id))
    }
    
    return(
        <li className="list-item">    
            <div className="item-text">{text}</div>
            <div className="buttons">
            <button onClick ={editItem} className='edit'>
                    <svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                    </button> 
                    <button onClick ={deleteItem} className='delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24   " fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg> 
                    </button> 
            </div>
            
        </li>

    )
}

export default ListItem;
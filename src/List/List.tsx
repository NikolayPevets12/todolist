import  {FC} from "react";
import ListItem from "../ListItem/ListItem";
import './List.css'
import { useSelector} from 'react-redux';




const List:FC = () =>{

        const items = useSelector((state: any) => state.data.items)

        const elements = items.map((item: any) => {
            return(
                <ListItem key={item.id} text ={item.text} id = {item.id}   />
            )
        })
        return elements;
        
}

export default List;

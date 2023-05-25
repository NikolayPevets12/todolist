import { FC} from 'react';
import AppHeader from './AppHeader/AppHeader';
import ToDoModal from './ToDoModal/ToDoModal';
import List from './List/List';
import './App.css';
import {useSelector} from 'react-redux';


const App:FC =() =>{

  const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen);

  return (
    <div className="App">
      <div className='container'>
        <AppHeader />
        <List/>
        {modalIsOpen ? ( <ToDoModal/> ) : null}
    </div>
      </div>

  );
}

export default App;


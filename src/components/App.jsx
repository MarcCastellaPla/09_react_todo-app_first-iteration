import { Header } from './Header.jsx';
import { Subheader } from './Subheader.jsx';
import { ListHeader } from './ListHeader.jsx';
import { ItemsList } from './ItemsList.jsx';
import { ListContainer } from './ListContainer.jsx';
import './App.css';
import { taskList } from './data/tasks.js';

const App = () => {
  return (
    <div>
      <header className="header__wrapper">
        <Header title="TodoApp" />
        <Subheader subtitle="Todo List Manager" />
      </header>

      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={taskList} />
      </ListContainer>
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import InputGroup from './input_group/Input';
import ListGroup from './list-group/listGroup';
import Info from './info/Info';



function App() {

  return (
    <div className='container d-flex flex-column w-50 position-absolute top-50 start-50 translate-middle'>
      <InputGroup/>
      <ListGroup name = "Clean up bedroom"/>
      <ListGroup name = "Buy some milk"/>
      <ListGroup name = "Jogging"/>
      <ListGroup name = "Learn React"/>
      <ListGroup name = "Doing Exercises"/>
      <Info total = "5"/>
    </div>
  );
}
export default App;

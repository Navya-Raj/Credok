import React , {useMemo, useState} from 'react';
import styled from "styled-components";
import bg from './images/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import { useGlobalContext } from './context/globalContext';
import Navigation from "./components/Navigation/Navigation";
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Incomes/Incomes'
import Expenses from './components/Expenses/Expenses';
// import Budget from './components/Budget/Budget';
// import Goals from './components/Goals/Goals';
// import Investment from './components/Investment/Investment';

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      // case 5:
      //   return <Budget />
      // case 6:
      //   return <Goals />
      // case 7:
      //   return <Investment />
      // case 8: 
      //   return <Retirement />
      default:
        return <Dashboard />
    }
  }
  const orbMemo = useMemo(() => { return <Orb />}, [])
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
`;

export default App;
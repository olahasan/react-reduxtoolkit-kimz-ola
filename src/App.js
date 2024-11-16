import { useDispatch, useSelector } from 'react-redux';
import { increase , decrease } from './store/counterSlice';
// import counter from './Components/counter';
import './App.css';
import { login, logout } from './store/authSlice';
import { useEffect, useCallback } from 'react';

function App() {
 
  const globalState = useSelector((state) => state);
  // console.log(globalState);
  const dispatch = useDispatch();

  
  const counterHandler = useCallback((type, value)=> {
    if(type === 'increase') {
      dispatch(increase(value));
    }else{
      dispatch(decrease(value));
    }
  },[dispatch]);

  useEffect(() => {
    counterHandler('increase', 15)
  },[counterHandler]);


  const isLoggedIN = ()=>{
    // console.log(globalState.auth.isLogged)
    return globalState.auth.isLogged 
  }

  const loginHandler = (status) => {
     console.log(status)
     if(status){
        dispatch(logout())
     }else{
      dispatch(login())
     }
  }

  return (
    <div className="App">
       <h1>Hello Redux Toolkit Basics</h1>
       {
        isLoggedIN() && (
          <>
            <div className="Counter"> Counter:{globalState.counter.value}</div>
            <div>
              <button className="btn" onClick={()=>counterHandler('decrease', 2)}>decrease -</button>
              <button className="btn" onClick={()=>counterHandler('increase' , 5)}>increase +</button>
            </div>
          </>
        )
       }
        {/* <>
          <div className="Counter"> Counter:{globalState.counter.value}</div>
          <div>
            <button className="btn" onClick={()=>dispatch(decrease(2))}>decrease -</button>
            <button className="btn" onClick={()=>dispatch(increase(4))}>increase +</button>
          </div>
        </> */}

          <div>                                 
            <button className="btn" onClick={()=>loginHandler(isLoggedIN())}> {isLoggedIN() ? "logout" : "login"} </button>
            {/* <button className="btn" onClick={()=>dispatch()}> {globalState.auth.isLogged ? "logout" : "login"} </button> */}
          </div> 
    </div>


    // <div>
    //   < counter />
    // </div>
  );
}

export default App;

import { Route, Switch } from 'wouter';
import LoginScreen from './pages/login/LoginScreen';

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 text-neutral-100 font-sans">
      <Switch>
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </div>
  );
}

export default App;

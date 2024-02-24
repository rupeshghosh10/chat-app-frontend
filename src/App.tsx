import { Route, Switch } from 'wouter';
import LoginScreen from './pages/authentication/LoginScreen';
import RegisterScreen from './pages/authentication/RegisterScreen';

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 text-neutral-100 font-sans">
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Switch>
    </div>
  );
}

export default App;

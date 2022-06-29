import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectContext from './store/appContext';

import NotFound from './views/notfound';
import Menu from './components/navbar';
import FooterPage from './components/footer'
import Home from './views/home';
import Gallery from './views/gallery';
import Product from './views/product';
import Cart from './views/cart';
import Resumen from './views/cartresumen';
import Account from './views/account';
import History from './views/history';
import Address from './views/address';
import Dates from './views/dates';
import Login from './views/inicioSecion';

function App() {
  return(
    <>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route path="/product/:id" component={Product}></Route>
        <Route exact path="/account" component={Account}></Route>
        <Route exact path="/history" component={History}></Route>
        <Route exact path="/address" component={Address}></Route>
        <Route exact path="/dates" component={Dates}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/cartresumen" component={Resumen}></Route>
        <Route exact path="/inicioSecion" component={Login}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <FooterPage />
    </BrowserRouter>
    </>
  );
}

export default injectContext(App);

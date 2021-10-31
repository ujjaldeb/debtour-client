import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound';
import ManageAllOrder from './pages/Private/ManageAllOrders/ManageAllOrder';
import AddService from './pages/Private/AddService/AddService';
import Booking from './pages/Booking/Booking';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import MyOrders from './pages/Private/MyOrders/MyOrders';
import Services from './pages/Home/Services/Services';
import UpdateOrder from './pages/Private/UpdateOrder/UpdateOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/orders/update/:id">
              <UpdateOrder></UpdateOrder>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

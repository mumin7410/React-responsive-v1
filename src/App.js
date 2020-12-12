import { Fragment } from 'react'
import  GlobalStyles  from './globalStyles'
import {Navbar,InfoSection,Footer} from './components'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import  Home  from './pages/Home/home'
import About from './pages/About/About'
import SignUp from './pages/SingUp/SingUp'
import Contact from './pages/Contact/Contact'
import ScrolltoTop from './ScrolltoTop'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrolltoTop />
      <Navbar />
      <Switch> {/*จะ render เฉพาะตัวที่ path route ตรงกันแล้วตัวอื่นๆก็จะไม่สนใจอีกเลยเอาใว้ใส่กันเวลา path ไม่ตรงเช่น 404 eror*/}
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/SignUp" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

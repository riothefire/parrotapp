import Navbar from './Components/Navbar';
import './App.css';
import { Redirect, Route  , Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Box from './Components/Box';
import Card from './Components/Card';
import Pictures from './Components/Pictures';
import Events from './Components/Events';
function App() 
{
 return (<main>

    <Switch>
        <Route path="/"exact>
        <Redirect to="/prashant.ranjan/">

        </Redirect>

        </Route>
    <Route path="/prashant.ranjan/">
    <Navbar>
        </Navbar>
        <Pictures>
        </Pictures>
        <Box>
        </Box>
        <Card>
        </Card>
        <Footer>
        </Footer>
    </Route>
    
 </Switch>
    </main>)
}

export default App;

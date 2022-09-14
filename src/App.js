import './App.css';
import HOC from './Components/high';
import ProductList from './Components/product';

function App() {
  return (
    <div className="App">
    <h1>Higher Order Components</h1>
    <p>A Higher-order component is a function that takes a component and returns a new component. <br/>
    HOCs are not part of the React API.<br/>
    They are a pattern that emerges from React's compositional nature.<br/>
    Higher-order components or HOC is the advanced method of reusing the component functionality logic. <br/> 
    It simply takes the original component and returns the enhanced component.
    </p>

<pre>

<strong>Syntax :</strong> const EnhancedComponent = higherOrderComponent(WrappedComponent);</pre>
       <HOC/>
       <ProductList/>
    </div>
  );
}

export default App;

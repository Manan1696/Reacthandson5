import React, { PureComponent } from 'react'

export default class Purecomponents extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    updateCount = () => {
       this.setState({count:this.state.count +10})
    }

    render() {
        console.log("count purecomponent renders");
        return (
            <div>
                <h1>Pure Components</h1>
                <h2>Count : {this.state.count}</h2>
                <p>Prevents re-rendering of Component if props or state is the same <br/>
                  Takes care of “shouldComponentUpdate” implicitly <br/>
                  State and Props are Shallow Compared <br/>
                  Pure Components are more performant in certain cases
                </p>
                <br/>
                <pre>
                 <strong>Syntax:</strong>export default class Purecomponents extends PureComponent{
                    
                  }
                 </pre>
                <button onClick={this.updateCount}>Update Count</button>
            </div>
        )
    }
}

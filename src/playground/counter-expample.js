class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleLess = this.handleLess.bind(this);
        this.handleResert = this.handleResert.bind(this);
        this.state = {
            count: 0
        };
    }
    handlePlus() {
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            };
        });
    }
    handleLess() {
        this.setState((prevState) => {
            return{
                count : prevState.count - 1
            };
        });
    }
    handleResert() {
        this.setState((prevState) => {
            return{
                count : 0
            };
        });
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            };
        });
    }
    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleLess}>-1</button>
                <button onClick={this.handleResert}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

/*let count = 0;
const addOne = () =>{
    count ++;
    renderCounterApp();
};
const minusOne = () =>{
    count --;
    renderCounterApp();
};
const Reset = () =>{
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();*/
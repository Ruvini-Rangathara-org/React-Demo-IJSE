import React from 'react';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
// import Home from "./views/home";


const arr = [1, 2, 3, "A", "B", 4]
console.log(arr)


//Properties vidiyta component ekata danna ona ewaprops
interface Props {
    title: string
    content: string
}

interface State {
    count: number
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        console.log('--constructor')
        super(props);
        this.state = {
            count: 0
        }
    }

    //constructor complexity eka hide karanava
    // state = {
    //   count: 0
    // }


    static getDerivedStateFromProps(props: Props, state: State) {
        console.log('--getDerivedStateFromProps - '+props.title+" "+state.count)
        return null
    }

    componentDidMount() {
        console.log('--componentDidMount')
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log('--shouldComponentUpdate')
        console.log(nextProps+" "+nextState+" "+nextContext)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
        console.log('--getSnapshotBeforeUpdate')
        console.log(prevProps+" "+prevState)
        return null;
    }

    up = () => {
        this.setState({count: this.state.count + 1})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (<div>

                <Header/>
                {/*<Home/>*/}

                <div className={'text-center m-5'}>
                    <div className={'text-2xl font-bold'}>{this.state.count}</div>
                    <br/>
                    <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>
                </div>


                <Footer/>

            </div>);
    }

}

export default App

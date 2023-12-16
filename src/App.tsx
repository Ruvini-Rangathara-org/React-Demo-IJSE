import React from 'react';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import Login from "./views/login";
import SignUp from "./views/signup";
import New from "./views/new-article";
import MyArticles from "./views/my-articles";

import {BrowserRouter, Route, Routes} from "react-router-dom";

interface Props {
    title: string
    content: string
}

interface State {
    count: number
}

const arr = [1, 2, 3, "A", "B", 4]
console.log(arr)


class App extends React.Component<Props, State> {


    up = () => {
        this.setState({count: this.state.count + 1})
    }

    constructor(props: Props) {
        console.log('--constructor')
        super(props);
        this.state = {
            count: 0
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (<div>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/new-article"} element={<New/>}/>
                    <Route path={"/my-articles"} element={<MyArticles/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>



            {/*<Login/>*/}

            {/*<SignUp/>*/}

            {/*<Home/>*/}

            {/*    <div className={'text-center m-5'}>*/}
            {/*        <div className={'text-2xl font-bold'}>{this.state.count}</div>*/}
            {/*        <br/>*/}
            {/*        <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>*/}
            {/*    </div>life cycle of react component*/}

            {/*{*/}
            {/*    this.state.count > 2 ? null : <Card title={this.props.title} content={this.props.content}/>*/}
            {/*}*/}




        </div>);
    }

}

export default App

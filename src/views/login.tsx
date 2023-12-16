import React from "react";
import {Link} from "react-router-dom";
import Input from "../components/input/input";



class Login extends React.Component {
    render():React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (

            // black border and border radius and center this login section and center
            <section className={'border border-gray-300 rounded-lg p-10 w-1/4 m-auto mt-20 mb-20 text-xs bg-emerald-50 shadow-lg '}>

            <div className={'text-2xl text-center'}>Login</div>
                <div className={'flex-col align-middle'}>
                    <img src="https://logodix.com/logo/1597040.png" alt="logo" className={'w-24 m-auto mt-2'}/><br/>

                    <Input label={"email"} name={'email'} type={'email'} optional={false} placeholder={'Email'}/>
                    <Input label={"password"} name={'password'} type={'password'} optional={false} placeholder={'Password'}/>

                    <div className={'m-auto text-center'}>
                        <button className={'border border-green-300 text-black hover:bg-green-600 px-2 hover:text-white h-7 text-center  rounded'}>Login
                        </button>
                    </div>

                    <div className={'text-center'}>
                        <a href="#" className={'text-gray-600 hover:text-gray-800'}>Forgot Password?</a>
                    </div>

                    <div className={'text-center mt-2'}>
                        <span>Don't have an account? </span>
                        <a href="#" className={'text-green-600 hover:text-green-900'}> <Link
                            to={'/signup'}>Register</Link></a>
                    </div>

                </div>
            </section>
        )
    }
}

export default Login;
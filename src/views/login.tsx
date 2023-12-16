import React from "react";

class Login extends React.Component {
    render():React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (

            // black border and border radius and center this login section and center
            <section className={'border border-gray-300 rounded-lg p-10 w-1/4 m-auto mt-28 text-xs bg-emerald-50'}>

            <div className={'text-2xl text-center'}>Login</div>
                <div>
                    <img src="https://logodix.com/logo/1597040.png" alt="logo" className={'w-24 m-auto mt-2'}/><br/>

                    <div>
                        <label htmlFor={'email'} className={'block'}>Email<span
                            className={'text-red-600'}>*</span></label>
                        <input type={'text'} id={'email'} placeholder={'Enter your email'}
                               className={'block border border-green-300 outline-none focus:border-green-600 w-full p-1'}/><br/>
                    </div>

                    <div>
                        <label htmlFor={'password'} className={'block'}>Password<span
                            className={'text-red-600'}>*</span></label>
                        <input type={'password'} id={'password'} placeholder={'Enter your Password'}
                               className={'block border border-green-300 outline-none focus:border-green-600 w-full p-1'}/><br/>
                    </div>

                    <div>
                        <button className={'bg-green-600 text-white hover:bg-green-700 w-full h-7 text-center'}>Login</button>
                    </div>

                    <div className={'text-center mt-2'}>
                        <span>Don't have an account? </span>
                        <a href="#" className={'text-green-600 hover:text-green-900'}>Register</a>
                    </div>

                    <div className={'text-center'}>
                        <a href="#" className={'text-gray-600 hover:text-gray-800'}>Forgot Password?</a>
                    </div>

                </div>
            </section>
        )
    }
}

export default Login;
import Input from "../components/input/input";
import {Link} from "react-router-dom";

//functional component
function SignUp() {
        return (

            // black border and border radius and center this login section and center
            <section className={'border border-gray-300 shadow-lg p-10 w-2/5 m-auto mt-16 mb-9 text-xs bg-emerald-50'}>

                <div className={'text-2xl text-center'}>Sign Up</div>
                <div>
                    <img src="https://logodix.com/logo/1597040.png" alt="logo" className={'w-24 m-auto mt-2'}/><br/>


                    <div className={'flex'}>
                        <Input type={'text'} name={'firstName'} label={'First Name'} optional={false}
                               placeholder={'First Name'}/>
                        <Input type={'text'} name={'lastName'} label={'Last Name'} optional={true}
                               placeholder={'Last Name'}/>
                    </div>
                    <Input type={'email'} name={'email'} label={'Email'} optional={false} placeholder={'Email'}/>
                    <Input type={'password'} name={'password'} label={'Password'} optional={false}
                           placeholder={'Password'}/>
                    <Input type={'password'} name={'confirmPassword'} label={'Confirm Password'} optional={false}
                           placeholder={'Confirm Password'}/>


                    <div className={'m-auto text-center'}>
                        <button
                            className={'border border-green-300 hover:text-white text-black hover:bg-green-600 h-7 text-center px-2 rounded'}>Register
                        </button>
                    </div>

                    <div className={'text-center mt-2'}>
                        <span>Do have an account? </span>
                        <a href="#" className={'text-green-600 hover:text-green-900'}> <Link
                            to={'/login'}>Login</Link></a>
                    </div>


                </div>
            </section>
        )

}

export default SignUp;
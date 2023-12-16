import React from "react";
import Input from "../components/input/input";
import ReactQuill from 'react-quill';
// import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class NewArticle extends React.Component {

    state={
        value:''
    }

    handleQuillChange = (content: string) => {
        this.setState({ value: content });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (

            // black border and border radius and center this login section and center
            <section className={'border border-gray-300 p-8 w-2/4 m-auto mt-11 text-xs mb-9'}>

                <div className={'text-2xl text-center'}>Write Your Article</div>

                <div className={'mr-0 flex justify-end'}>
                    <button
                        className={'bg-gray-500 text-white hover:bg-gray-600 h-7 text-center p-1 rounded-lg mr-2 w-16'}>Clear
                    </button>
                    <button
                        className={'bg-green-600 text-white hover:bg-green-700 h-7 text-center p-1 rounded-lg w-16'}>Publish
                    </button>
                </div>

                <div>
                    <Input type={'text'} name={'title'} label={'Title'} optional={false} placeholder={'Title'}/>
                </div>

                <ReactQuill theme="snow" value={this.state.value} onChange={this.handleQuillChange} className={'ql-container'}/>

            </section>)
    }
}

export default NewArticle;
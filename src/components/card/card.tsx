import React from 'react';

//Properties vidiyta component ekata danna ona ewaprops
interface Props {
    title: string
    content: string
}

interface State {
    count: number
}

class Card extends React.Component<Props, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div className={'w-72 p-5 border-solid border-2 m-5 flex-col '}>
                <h1 className={'text-lg'}>{this.props.title}</h1>
                <p className={'my-5 text-xs'}>{this.props.content}</p>
                <button className={'bg-white text-green-600 hover:bg-green-600 p-1 hover:text-white border border-green-600 '}>Read More...</button>
            </div>
        );
    }


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
        console.log('--getDerivedStateFromProps - ' + props.title + " " + state.count)
        return null
    }

    componentDidMount() {
        console.log('--componentDidMount')
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log('--shouldComponentUpdate')
        console.log(nextProps + " " + nextState + " " + nextContext)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
        console.log('--getSnapshotBeforeUpdate')
        console.log(prevProps + " " + prevState)
        return null;
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        console.log('--componentDidUpdate')
        console.log(prevProps + " " + prevState + " " + snapshot)
    }

    componentWillUnmount() {
        console.log('--componentWillUnmount')
    }

}

export default Card;
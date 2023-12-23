import React from 'react';
import Card from "../components/card/card.js";
import axios from "axios";

interface Data {
    id: number,
    title: string,
    body: string
}

class Home extends React.Component {

    state = {
        data: []
    }

    fetchData() {
        /*fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => {
                this.setState({data: result})
            })
            .catch(err => {
                console.log(err);
            })*/

        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                this.setState({data: res.data})
            }
        ).catch(err => {
            console.log(err);
        })
    }



    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (

            <section>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

                    {
                        this.state.data.map((r: Data, index: number) => {
                            console.log(r.id+1 +" "+r.body);
                            return <Card key={r.id} title={++index + ". " + r.title} content={r.body} />
                        })

                        // data.map((r, index) => {
                        //     return <Card title={++index+" " + r.title} content={r.content}/>
                        // })
                    }

                </div>
            </section>
        );
    }
}

// const data = [
//     {
//         id: 1,
//         title: "IJSE",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
//     {
//         id: 2,
//         title: "GDSE",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
//     {
//         id: 3,
//         title: "Javascript",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
//     {
//         id: 4,
//         title: "Typescript",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
//     {
//         id: 5,
//         title: "Java",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
//     {
//         id: 6,
//         title: "Go",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
//     },
// ];


export default Home;
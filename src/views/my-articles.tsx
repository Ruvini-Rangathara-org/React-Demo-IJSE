import { FaEye,FaPen,FaTrash } from 'react-icons/fa';

//arrow function
// const MyArticles =(): JSX.Element => {
//     return (
//         <div>
//             <h1>My Articles</h1>
//
//         </div>
//     );
// }

interface Data {
    id: number
    date?: string
    title: string
    content: string
}

const data= [{
    id: 1,
    date: "2021-09-01",
    title: "IJSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
}, {
    id: 2,
    date: "2021-09-01",
    title: "GDSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
}, {
    id: 3,
    date: "2021-09-01",
    title: "Javascript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
}, {
    id: 4,
    date: "2021-09-01",
    title: "Typescript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
}, {
    id: 5,
    date: "2021-09-01",
    title: "Java",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
}, {
    id: 6,
    date: "2021-09-01",
    title: "Go",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
},];


function myArticles() {
    return (<section className={'p-16'}>
            <div>
                <table className={'p-5 text-xs'}>
                    <thead className={'bg-gray-300'}>
                    <tr>
                        <th className={'py-5'}>Date</th>
                        <th className={'py-5'}>Title</th>
                        <th className={'py-5'}>Content</th>
                        <th className={'py-5'}>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map((r: Data, index: number) => {
                        return <tr className={'border-b'}>
                            <td  className={'w-[15%] pl-3'}>{r.date}</td>
                            <td  className={'w-[15%]'}>{index + " " + r.title}</td>
                            <td  className={'w-[55%]'}>{r.content}</td>
                            <td   className={'w-[20%]'}>
                                <button className={'border border-blue-500 text-black hover:bg-blue-500  mx-3 hover:text-white rounded-3xl p-2 text-center'}><FaEye/></button>
                                <button className={'border border-green-500 text-black hover:bg-green-500  mx-3 hover:text-white rounded-3xl p-2 text-center'}><FaPen/></button>
                                <button className={'border border-gray-500 text-black hover:bg-gray-500 mx-3 hover:text-white rounded-3xl p-2 text-center'}><FaTrash/></button>

                            </td>
                        </tr>
                    })}
                    </tbody>

                </table>
            </div>

        </section>);
}

console.log(data)

export default myArticles;
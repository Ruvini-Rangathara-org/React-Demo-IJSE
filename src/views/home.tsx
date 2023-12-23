import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/card.tsx";

interface Data {
    id: number,
    title: string,
    body: string
}

function Home() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <section>
            <div className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>
                {data.map((r: Data, index: number) => (
                    <Card key={r.id} title={`${index + 1}. ${r.title}`} content={r.body} />
                ))}
            </div>
        </section>
    );
}

export default Home;

import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import HTTP from '../services/axiosConfig';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const Homepage = () => {

    const [items, setItems] = useState(Array.from({ length: 20 }))
    const [book, setBook] = useState([]);

    React.useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        await HTTP.get('manage/books').then((res) => {
            setBook(res.data)
        })
    }

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 1500);
    };

    return (
        <div>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((i, index) => (
                    <div style={style} key={index}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default Homepage
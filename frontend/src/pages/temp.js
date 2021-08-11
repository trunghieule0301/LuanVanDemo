import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import HTTP from '../services/axiosConfig'

export default function Avatar({ onSelectImage }) {
    const [book, setBook] = React.useState([]);

    React.useEffect(() => {
        let isMounted = true;
        HTTP.get('manage/books').then((res) => {
            if (isMounted) {
                setBook(res.data)
            }
        })
        return () => { isMounted = false }
    }, [])


    const show = () => console.log(book)

    return (
        <Button onClick={show} icon={<UploadOutlined />}>Upload Image</Button>
    )
}
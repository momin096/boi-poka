import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList , setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const readBookList  = allBooks.filter(book => storedReadList.includes(book.bookId));

        setReadList(readBookList);
    },[])

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const wishList = allBooks.filter(book => storedWishList.includes(book.bookId));
        setWishList(wishList);
    },[])


    return (
        <div>
            <h3 className="text-3xl mb-10">Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab><span className='text-xl font-semibold'>Wish List</span></Tab>
                    <Tab><span className='text-xl font-semibold'>Read List</span></Tab>
                </TabList>

                <TabPanel>
                    <h2>My WIsh list{wishList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        wishList.map((book,idx) =>  <Book key={idx} book={book}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Reads i book:{readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        readList.map((book, idx) => <Book key={idx} book={book}></Book>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
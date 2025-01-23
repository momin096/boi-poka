import './Book.css';
import { HiOutlineStar } from "react-icons/hi";

const Book = ({ book }) => {


    const { bookName, author, image, rating, tags, category } = book;
    return (
        <div className="book">
            <div className="card bg-base-200 max-w-xl shadow-2xl p-4">
                <figure className="p-4 bg-base-100 rounded-xl">
                    <img src={image} alt={bookName} className="rounded-xl h-[300px] " />
                </figure>
                <div className="card-body">
                    <div className='flex gap-8 justify-center'>
                        {
                            tags.map((tag, idx) => <button key={idx} className='btn btn-xs bg-gray-700'>{tag}</button>)
                        }
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>{bookName}</h3>
                        <p>By: {author}</p>
                    </div>
                    <div className="border-t border-dashed border-gray-600 my-1"></div>

                    <div className='flex items-center justify-between '>
                        <p className='text-sm font-semibold'>{category}</p>
                        <div className='flex items-center gap-1 '>
                            <p className='text-sm'>{rating}</p>
                            <HiOutlineStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
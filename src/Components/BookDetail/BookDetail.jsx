import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../../utility/addToDb";


const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const book = data.find(book => book.bookId === parseInt(bookId))
    const id = parseInt(bookId);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = () => {
        addToStoredReadList(id);
    }

    const handleWishList = () =>{
        addToWishList(id);
    }
    

    return (
        <div>
            <div className=" bg-base-200 min-h-max mt-5 pt-5">
                <div className="flex flex-col lg:flex-row justify-evenly gap-10">
                    <div className="card bg-base-100 lg:w-1/2  max-h-[650px] max-w-xl shrink-0 shadow-2xl rounded-lg p-5 lg:px-24 lg:py-16">
                        <img src={image}
                            className="w-auto h-full  rounded-lg shadow-2xl " />
                    </div>
                    <div className="lg:w-1/2 lg:pb-16 p-5 lg:px-24 ">
                        <div>
                            <h2 className="text-2xl font-bold text-white">{bookName}</h2>
                            <p className="font-bold">By : {author}</p>
                        </div>

                        <div className="border-t my-3 border-gray-500"></div>

                        <p className="text-lg font-semibold">{category}</p>

                        <div className="border-t my-3 border-gray-500"></div>

                        <p><span className="font-bold">Review :</span>{review} </p>

                        <div className="my-3 flex gap-5 items-center">
                            <span className="font-bold">Tag</span>
                            {
                                tags.map((tag, idx) => <p key={idx} className="bg-gray-800 px-2 py-1 rounded-lg text-white">{tag}</p>)
                            }
                        </div>

                        <div className="border-t my-5 border-gray-500"></div>

                        <div className="space-y-2">
                            <p>Number of pages: <span className="text-white font-medium">{totalPages}</span></p>
                            <p>Publisher: <span className="text-white font-medium">{publisher}</span></p>
                            <p>Year of Publishing: <span className="text-white font-medium">{yearOfPublishing}</span></p>
                            <p>Rating: <span className="text-white font-medium">{rating}</span></p>
                        </div>

                        <div className="mt-4 space-x-10">
                            <button onClick={handleMarkAsRead} className="btn btn-outline px-8">Read</button>
                            <button onClick={handleWishList} className="btn btn-info px-8 text-white">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
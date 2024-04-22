import { Link } from "react-router-dom";
import Carousel from './Carousel';
import Cards from './Cards';
import AllBooks from '../views/all_books';



export default function Dashboard(){
    return (
        <div>

             <AllBooks />
             <Carousel />
             {/* <Cards /> */}


        </div>
    );
}

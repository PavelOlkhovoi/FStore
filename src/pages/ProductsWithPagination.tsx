import Pagination from "../components/UI/pagination/Pagination"
import AllProducts from "./AllProducts"

const ProductsWithPagination = () => {
    console.log('Product with pagination')
    return (
        <>
            <AllProducts/>
            <Pagination />
        </>
    )
}

export default ProductsWithPagination
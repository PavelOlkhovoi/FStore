import * as ProductsActions from '../actions/productsAction'
import * as CategoriesActions from '../actions/categoriesActions'
import * as CartsActions from '../actions/cartsActions'

export const AllActions = {
    ...ProductsActions,
    ...CategoriesActions,
    ...CartsActions,
}
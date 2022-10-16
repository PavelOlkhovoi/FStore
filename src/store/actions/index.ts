import * as ProductsActions from '../actions/productsAction'
import * as CategoriesActions from '../actions/categoriesActions'
import * as CartsActions from '../actions/cartsActions'
import * as UserActions from '../actions/userAction'
import * as InitialActions from '../actions/shared'
import * as PaginationActions from '../actions/paginationActions'

export const AllActions = {
    ...ProductsActions,
    ...CategoriesActions,
    ...CartsActions,
    ...UserActions,
    ...InitialActions,
    ...PaginationActions
}
import * as ProductsActions from '../actions/productsAction'
import * as CategoriesActions from '../actions/categoriesActions'
import * as CartsActions from '../actions/cartsActions'
import * as UserActions from '../actions/userAction'

export const AllActions = {
    ...ProductsActions,
    ...CategoriesActions,
    ...CartsActions,
    ...UserActions,
}
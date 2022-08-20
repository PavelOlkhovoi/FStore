import * as ProductsActions from '../actions/productsAction'
import * as CategoriesActions from '../actions/categoriesActions'

export const AllActions = {
    ...ProductsActions,
    ...CategoriesActions
}
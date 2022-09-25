import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';


const App = () => {
  const {categoriesActions, initCart, authhWithLocalhost} = useActions()
  useEffect(()=> {
    console.log('Apppppppppppppppppp 1')
    authhWithLocalhost()
    console.log('Apppppppppppppppppp 2')
    initCart()
    console.log('Apppppppppppppppppp 3')
  }, [])
  return (
  <AppRoutes />
  );
}

export default App




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/index.jsx'
import { QueryClient, QueryClientProvider } from "react-query";
 const queryClient= new QueryClient();


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
  </Provider>
  </QueryClientProvider>
  
)

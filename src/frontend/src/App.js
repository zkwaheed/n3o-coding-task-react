import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Donations } from './donations/components/Donations';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Donations/>
      </div>  
    </QueryClientProvider>
  );
}

export default App;

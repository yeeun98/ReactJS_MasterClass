import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
// import router from './crypto-tracker/Router';
import router from './trello/Router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

import React from 'react';

import 'styles/index.css';

import {
  AuthProvider,
  ReduxProvider,
  RouterProvider,
  RoutesProvider,
} from 'providers';

function App() {
  return (
    <ReduxProvider>
      <RouterProvider>
        <AuthProvider>
          <RoutesProvider>
            {/* Some Toast Or Global Modal Is here */}
          </RoutesProvider>
        </AuthProvider>
      </RouterProvider>
    </ReduxProvider>
  );
}

export default App;

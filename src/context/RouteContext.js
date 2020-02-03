import React from 'react';

const RouteContext = React.createContext(
    {
        route: '',
        toggleRoute: () => {}
    }
);

export default RouteContext;
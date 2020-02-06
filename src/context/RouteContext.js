import React from 'react';

const RouteContext = React.createContext(
    {
        route: '',
        plugin: undefined,
        toggleRoute: () => {}
    }
);

export default RouteContext;
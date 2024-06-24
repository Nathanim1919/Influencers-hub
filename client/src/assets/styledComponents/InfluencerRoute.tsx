import styled from 'styled-components';

export const RouteContainer = styled.div`
    display: grid;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .route{
        display: grid;
        grid-template-columns: minmax(auto, max-content) 1fr;
    }

    .sidebar {
        width: 200px; /* Initial width */
        transition: width .3s ease-in-out; /* Apply transition to width */
    }

    .sidebar:hover {
        width: 250px; /* Width on hover */
    }
`
import styled from 'styled-components';

export const RouteContainer = styled.div`
    display: grid;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .route{
        display: grid;
        grid-template-columns: minmax(auto, max-content) 1fr;
        transition: all 1s ease-in-out;
    }

    .sidebar {
        width: 70px; /* Initial width */
        transition: width .3s ease-in-out; /* Apply transition to width */
        a{
            span{
                /* display: none; */
                position: absolute;
                opacity: 0;
                transform: translateX(-100px);
                transition: all .3s ease-in-out;

            }
        }
    }

    .sidebar:hover {
        width: 200px;
        cursor: pointer;

        a{
            span{
                display: grid;
                position: relative;
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
`
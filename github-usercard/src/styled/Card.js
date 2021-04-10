import styled from 'styled-components'

const Card =styled.div`
    display:flex;
    width: 75em;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px #d3d3d3 solid;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 1.5em;
    background-color: #DCDCDC;

`
const Button = styled.button `
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    background-color: white;
    
`


export { Card, Button } 
import styled from 'styled-components';

export const Contacts = styled.ul`
padding-left: 0;

li {
    display: flex;

    :not(:last-child) {
        margin-bottom: 15px;
    }
}

p {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        fill: #2a2a2a;
    }
}

button {
    margin-left: 10px;

    display: flex;
    border: 0;
    padding: 8px 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 12px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    background-color: #cad7e3;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #a5bacd;
        color: #544d4d;
    }
}
`
import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  font-family: 'Lato';
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;

  input {
    flex: 1;
    background: #eee;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 35px;
    font-size: 16px;
    height: 50px;

    transition: border 0.25s ease-out;
  }
`;

export const Search = styled.input`
  flex: 1;
  background: #eee;
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 35px;
  font-size: 16px;
  height: 50px;

  transition: border 0.25s ease-out;
`;

export const FilmBox = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const FilmList = styled.div`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  width: 100%;
  font-family: 'Lato';
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    display: flex;
    width: 100%;
    border-radius: 4px;
    padding: 10px;

    & + a {
      padding: 10px;
      margin-top: 15px;
      display: flex;
    }
  }
`;

export const Info = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h1`
  background: #116193;
  font-family: 'Abel';
  font-weight: lighter;
  font-size: 40px;
  width: 100%;
  padding: 10px 95px;
  color: #00e8e4;
`;

export const Rate = styled.h3`
  margin-top: -30px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  background: #116193;
  border-radius: 50%;
  border: 5px solid #00e8e4;
  box-shadow: 0px 0px 0px 3px #116193;
  padding-left: 1px;
  color: #00e8e4;
`;

export const Date = styled.h2`
  margin-top: -20px;
  margin-left: 95px;
  font-size: 19px;
  font-weight: lighter;
  color: #999;
`;

export const Overview = styled.p`
  margin: 25px 15px;
  color: #777;
  font-size: 17px;
  font-weight: normal;
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center; /**space-between */
  align-items: center;
  font-size: 12px;
`;

export const SpanPage = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: #116193;
  border-radius: 50%;
  border: 5px solid #00e8e4;
  box-shadow: 0px 0px 0px 3px #116193;
  margin: 0 13px;
  padding-left: 1px;
  color: #00e8e4;
  font-size: 20px;
`;

export const PageButton = styled.button`
  transition: opacity 0.25s ease-out;
  border-radius: 50%;
  width: 37px;
  outline: 0;
  border: 10;
  padding: 8px;
  color: #116193;
  background: #fff;
  border-color: #fff;
  border-style: solid;
  font-weight: bold;
  font-size: 15px;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin-bottom: 10px;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Poster = styled.img`
  display: flex;
  /* width: 400px; */
  width: 200px;
  /* height: 500px !important; */
  height: 100%;
  bottom: 0px;
`;

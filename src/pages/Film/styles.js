import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 30px;
  border-top: 1px solid #fff;
  list-style: none;
  width: 100%;
  font-family: 'Lato';
  align-items: center;
`;

export const FilmBox = styled.div`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #f2f2f2;
`;

export const Title = styled.div`
  background: #e6e6e6;
  font-family: 'Abel';
  padding: 5px 30px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  right: 0;
`;

export const Description = styled.p`
  font-family: 'Lato';
  font-size: 15px;
  color: #777;
`;

export const Movie = styled.div`
  display: flex;
  width: 100%;
`;

export const Poster = styled.img`
  display: flex;
  width: 400px;
  /* height: 500px !important; */
  height: 100%;
  bottom: 0px;
`;

export const Overview = styled.p`
  padding: 20px 30px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  font-family: 'Abel';
  font-size: 23px;
  color: #116193;
  font-weight: lighter;
`;

export const SubValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitle = styled.h1`
  font-family: 'Abel';
  width: 100%;
  border-bottom: 3px solid #00e8e4;
  padding-bottom: 5px;
  color: #116193;
  font-weight: lighter;
  margin-bottom: 15px;
`;

export const RateSpace = styled.p`
  display: flex;
  width: 100%;
  /* margin-top: 50px; */
  justify-items: center;
  justify-content: flex-end;
  /* padding-top: 70px; */
`;

export const NormalText = styled.p``;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  padding-top: 100px;
`;

export const CategorieBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  li {
    background: #fff;
    font-family: 'Abel';
    padding: 10px 17px;
    border-radius: 25px;
    border: 2px solid #116193;
    color: #116193;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  color: #116193;
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
    fill: #116193;
  }
`;

export const Date = styled.div`
  font-size: 20px;
  color: #999;
  font-weight: lighter;
  display: flex;
  align-items: center;
`;

export const TextTitle = styled.div`
  font-size: 45px;
  color: #116193;
  font-weight: lighter;
`;

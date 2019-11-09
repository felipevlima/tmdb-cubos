import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Iso from 'iso-639-1';
import { FaSpinner } from 'react-icons/fa';
import Moment from 'react-moment';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

import api from '../../services/api';
import moviedb from '../../config/moviedb';

import YoutubeVideo from '../../components/YoutubeVideo';
import Topic from '../../components/Topic';
import Rate from '../../components/Rate';

import {
  Container,
  Title,
  FilmBox,
  Movie,
  Poster,
  Overview,
  Infos,
  SubInfos,
  SubValues,
  Topics,
  Text,
  SubTitle,
  Description,
  RateSpace,
  NormalText,
  BottomBox,
  CategorieBox,
  Spinner,
  Loading,
  Date,
  TextTitle,
} from './styles';

function timeConvert(n) {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return `${rhours} h ${rminutes} min`;
}

export default class Film extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  state = {
    id: {},
    resp: [],
    videos: [],
    categorias: [],
    link: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const id = decodeURIComponent(match.params.id);

    const [response, video] = await Promise.all([
      api.get(`movie/${id}?api_key=${moviedb.apiKey}&language=pt-BR`),
      api.get(`movie/${id}/videos?api_key=${moviedb.apiKey}&language=pt-BR`),
    ]);

    const filter = response.data.genres;

    this.setState({
      resp: response.data,
      videos: video.data.results,
      categorias: filter,
      loading: false,
    });
  }

  render() {
    const { resp, videos, categorias, loading } = this.state;

    const ResponsiveEllipses = responsiveHOC()(LinesEllipsis);

    if (loading) {
      return (
        <Loading>
          <Spinner>
            <FaSpinner color="#FFF" size={55} />
          </Spinner>
          Carregando...
        </Loading>
      );
    }

    return (
      <>
        <Container>
          <FilmBox>
            <Title>
              <TextTitle>{resp.title}</TextTitle>

              <Date>
                <Moment format="DD/MM/YYYY">{resp.release_date}</Moment>
              </Date>
            </Title>
            <Movie>
              <Infos>
                <Overview>
                  <SubTitle>Sinopse</SubTitle>
                  <Description>
                    <ResponsiveEllipses
                      text={resp.overview}
                      maxLine="20"
                      ellipsis="..."
                      trimRight
                      basedOn="words"
                    />
                  </Description>
                </Overview>
                <SubInfos>
                  <SubTitle>Informações</SubTitle>
                  <SubValues>
                    <Topics>
                      <Text>Situação</Text>
                      <NormalText>{resp.status}</NormalText>
                    </Topics>
                    <Topics>
                      <Text>Idioma</Text>
                      <NormalText>
                        {Iso.getName(resp.original_language)}
                      </NormalText>
                    </Topics>
                    <Topics>
                      <Text>Duração</Text>
                      <NormalText>{timeConvert(resp.runtime)}</NormalText>
                    </Topics>
                    <Topic name="Orçamento" valor={resp.budget} />
                    <Topic name="Receita" valor={resp.revenue} />
                    <Topic name="Lucro" valor={resp.revenue - resp.budget} />
                  </SubValues>
                  <BottomBox>
                    <CategorieBox>
                      {categorias.map(categoria => (
                        <li>{categoria.name}</li>
                      ))}
                    </CategorieBox>
                    <RateSpace>
                      <Rate>{resp.vote_average}</Rate>
                    </RateSpace>
                  </BottomBox>
                </SubInfos>
              </Infos>
              <Poster
                src={
                  resp.poster_path === null
                    ? `data:image/jpeg;base64,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`
                    : `https://image.tmdb.org/t/p/original${resp.poster_path}`
                }
                alt=""
              />
            </Movie>
          </FilmBox>
        </Container>

        {videos.map(video => (
          <YoutubeVideo
            url={`https://www.youtube.com/watch?v=${video.key}`}
            key={video.key}
          />
        ))}

        {/* {videos.map(video => (
          <YoutubeVideo
            url={`https://www.youtube.com/watch?v=${video.key}`}
            key={video.key}
          />
        ))} */}
      </>
    );
  }
}

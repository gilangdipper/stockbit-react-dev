import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { useHistory } from "react-router-dom";

import '../styles/DetailPage.css';
import { API_URL, API_KEY } from '../constant';
import { encodeQueryData } from '../helper';
import { IDetails, IInitialState, IDetailsPage } from '../interfaces';
import * as actions from '../redux/actions';
import { ReactComponent as BackIcon } from '../icon/back.svg';

type DetailsProps = IDetailsPage & RouteComponentProps<{ id: string }>;

const DetailPage = (props: DetailsProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { details, match, setDetails } = props;
  const routerHistory = useHistory();

  useEffect(() => {
    getMovieDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieDetails = () => {
    const queryData = {
      apikey: API_KEY,
      i: match.params.id
    };
    const queryString: string = encodeQueryData(queryData);
    const fetchUrl: string = API_URL + queryString;

    setIsFetching(true);

    axios.get(fetchUrl)
      .then((res: AxiosResponse) => {
        setDetails(res.data);
        setIsFetching(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  if (isFetching) {
    return (<p>Loading!!</p>);
  }

  return (
    <div className="app__wrapper">
      <div className="detail-page__poster-wrapper">
        <img src={details.Poster} alt={details.Title}/>
        <button onClick={() => { routerHistory.goBack() }}><BackIcon /></button>
      </div>

      <div className="detail-page__first-box-wrapper">
        <h1 className="detail-page__title">{details.Title} <span>({details.Year})</span></h1>
        <div className="detail-page__infobar">
          {[details.Rated, details.Runtime, details.Genre].join(' | ')}
        </div>
      </div>

      <div className="detail-page__second-box-wrapper">
        <p className="detail-page__plot">{details.Plot}</p>
      </div>

      <div className="detail-page__third-box-wrapper">
        <p className="detail-page__cast">Cast: <span>{details.Actors}</span></p>
        {details.Ratings.length > 0 &&
          <p className="detail-page__ratings">
            Ratings: <span>{details.Ratings[0].Value}</span>
          </p>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IInitialState): {
  details: IDetails;
} => ({ details: state.details });
const mapDispatchToProps: {
  setDetails(details: IDetails): void;
} = {
  setDetails: actions.setDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

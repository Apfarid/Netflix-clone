import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Upcomming" fetchUrl={request.requestPopular} />
      <Row rowId="2" title="Popular" fetchUrl={request.requestTopRated} />
      <Row rowId="3" title="Horror" fetchUrl={request.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchUrl={request.requestHorror} />
      <Row rowId="5" title="Treding" fetchUrl={request.requestUpcoming} />
    </>
  );
};

export default Home;

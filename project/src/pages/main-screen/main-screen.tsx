function MainScreen(): JSX.Element {
  return (
    <>
      <header className="page-header">
        <div className="page-body__container  page-header__container">
          <img
            className="page-header__logo"
            src="img/logo.png"
            width={42}
            height={42}
            alt="Trip logo"
          />
        </div>
      </header>
      <main className="page-body__page-main  page-main">
        <div className="page-body__container main">
          <section className="trip-events" style = {{textAlign: 'center'}}>
            <h2 className="visually-hidden">Trip events</h2>
            <p className="trip-events__msg">Are you ready for the discoveries<br/>and impressions that travel gives?</p>
            <a className = "button__link" href="/points"
            >
              Let`s go!
            </a>
          </section>
        </div>
      </main>
    </>

  );
}

export default MainScreen;

function NonFoundScreen(): JSX.Element {
  return (
    <div className="page">
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
      <main className="page__main page__main--index">
        <section className="container not-found">
          <img className="property__image" style = {{marginTop: 150}} src="img/error.png" width={741} height={360} alt="Error 404" />
          <div style = {{textAlign: 'center'}}>
            <h1>Page found&nbsp;found</h1>
            <p style ={{ maxWidth: 450, margin: '0 auto 40px', fontSize: 18, lineHeight: 1.4}}>
              Most likely there was a page, but&nbsp;now it has also gone on a journey.
            </p>
            <a className = "button__link" href="/"
            >
              Back to main page
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NonFoundScreen;

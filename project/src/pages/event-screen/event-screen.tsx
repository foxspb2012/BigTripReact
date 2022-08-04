import Point from '../../components/point/point';
import PointEdit from '../../components/point-edit/point-edit';

type MainScreenProps = {
  pointCount: number;
}

function EventScreen({pointCount}: MainScreenProps): JSX.Element {
  return (
    <>
      <header className="page-header">
        <div className="page-body__container  page-header__container">
          <img className="page-header__logo" src="img/logo.png" width={42} height={42} alt="Trip logo"/>
          <div className="trip-main">
            <section className="trip-main__trip-info  trip-info">
              <div className="trip-info__main">
                <h1 className="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
                <p className="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
                <p className="trip-info__cost">
                  Total: €&nbsp;<span className="trip-info__cost-value">1230</span>
                </p>
              </div>
              <div className="trip-info__list">
                <p className="trip-info__item">Oliver.conner@gmail.com</p>
                <a className="trip-info__item" href="/#">
                  <span className="header__signout">Sign out</span>
                </a>
              </div>
            </section>
            <div className="trip-main__trip-controls  trip-controls">
              <div className="trip-controls__filters">
                <h2 className="visually-hidden">Filter events</h2>
                <form className="trip-filters" action="#" method="get">
                  <div className="trip-filters__filter">
                    <input id="filter-everything" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="everything" checked/>
                    <label className="trip-filters__filter-label" htmlFor="filter-everything">
                      Everything
                    </label>
                  </div>
                  <div className="trip-filters__filter">
                    <input id="filter-future" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="future"/>
                    <label className="trip-filters__filter-label" htmlFor="filter-future">
                      Future
                    </label>
                  </div>
                  <div className="trip-filters__filter">
                    <input id="filter-past" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="past"/>
                    <label className="trip-filters__filter-label" htmlFor="filter-past">
                      Past
                    </label>
                  </div>
                  <button className="visually-hidden" type="submit">
                    Accept filter
                  </button>
                </form>
              </div>
            </div>
            <button className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>
              New event
            </button>
          </div>
        </div>
      </header>
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
              <div className="trip-sort__item  trip-sort__item--day">
                <input id="sort-day" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-day" checked/>
                <label className="trip-sort__btn" htmlFor="sort-day">
                  Day
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--event">
                <input id="sort-event" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-event" disabled/>
                <label className="trip-sort__btn" htmlFor="sort-event">
                  Event
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--time">
                <input id="sort-time" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-time"/>
                <label className="trip-sort__btn" htmlFor="sort-time">
                  Time
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--price">
                <input id="sort-price" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-price"/>
                <label className="trip-sort__btn" htmlFor="sort-price">
                  Price
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--offer">
                <input id="sort-offer" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-offer" disabled/>
                <label className="trip-sort__btn" htmlFor="sort-offer">
                  Offers
                </label>
              </div>
            </form>
            <ul className="trip-events__list">
              <li className="trip-events__item">
                <PointEdit />
              </li>
              {
                Array.from(Array(pointCount).keys())
                  .map((item) => (
                    <li className="trip-events__item" key={item}>
                      <Point />
                    </li>
                  ))
              }
            </ul>
          </section>
        </div>
      </main>
    </>

  );
}

export default EventScreen;

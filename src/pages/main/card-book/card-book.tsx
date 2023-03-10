import iconCat from '../../../assets/img/icon_cat.png';
import { HOST } from '../../../constants/api';
import { Book } from '../../../store/book-slice';
import { Rank } from '../../components/rank/rank';

import { Highlighter } from './highlighter';

import './card-book.css';

export const CardBook = ({ book, view, search }: { book: Book; view: boolean; search: string }) => {
  const { rating, image } = book;

  return (
    <section className={view ? 'card__container' : 'card__container-list'} data-test-id='card'>
      <div className={view ? 'card__img-container' : 'card__img-container-grid'}>
        {image ? (
          <img src={HOST + image.url} alt='book' className={view ? 'card__page__img' : 'card__image-flex'} />
        ) : (
          <div className={view ? 'cat__block' : 'cat__line'}>
            <img src={iconCat} alt='empty' />
          </div>
        )}
      </div>
      <div className={view ? 'card__rank__container' : 'card__rank__container-grid order2'}>
        <Rank rank={rating} smallGap={true} view={view} />
      </div>
      <Highlighter title={book.title} search={search} view={view} />
      <p
        className={
          view ? 'body-small inactive-text hide__text-overflow' : 'body-large inactive-text card__content-text'
        }
      >
        {book.authors.join(', ')}, {book.issueYear}
      </p>
      <div className={view ? 'card__rank__container' : 'card__rank__container-button order2'}>
        <button className='button-small' type='button'>
          Забронировать
        </button>
      </div>
    </section>
  );
};

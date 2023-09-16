import css from './Loader.module.css';
import sprite from '../picture/sprite-icon.svg'

export default function Loader() {
  return (
    <div>
<svg className={css.icon__spin}>
          <use href={sprite + '#border'} />
        </svg>

    
    </div>
  );
}
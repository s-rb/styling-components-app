// import "./Button.module.css";
import styles from './Button.module.css';
// import styled from 'styled-components';

// у объекта styled вызывается метод button в который передается то что в кавычках
// Будет создан объект кнопки со стилями переданными между кавычками
// указание на стиль себя (кнопки) - заменяется на & если есть чтото. Если ничего нет, просто стили открыто передаются
// такой способ tagged template literals
// Медиа query - @media (min-width: 700px) - применение стилей к устройствам, шириной мин.700пикс.
// const Button = styled.button`
//
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   color: white;
//   background: #00358b;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
//   cursor: pointer;
//
//
//   @media (min-width: 700px) {
//     width: auto;
//   }
//
//
//  &:focus {
//   outline: none;
// }
//
// &:hover,
// &:active {
//   background: #245fbd;
//   box-shadow: 0 0 8px rgba(50, 50, 50, 0.25);
// }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;

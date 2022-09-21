import './css/styles.css';
import axios from "axios";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;



// Делаем запрос пользователя с данным ID
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
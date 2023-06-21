export type MovieProps = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

const movies: MovieProps[] = [
  {
    title: "Властелин колец: Братство Кольца",
    posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
    releaseYear: 2001,
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
    genre: "fantasy",
    id: "2aT976Fs_Bek0e2ZR_05V",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
  },
  {
    title: "Властелин колец: Две крепости",
    posterUrl: "https://i.postimg.cc/9MfFCgnP/2.webp",
    releaseYear: 2002,
    description:
      "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
    genre: "fantasy",
    id: "CTzeB2PGEHHBwxCNlU4uo",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["yvLjlSo9w6T4Mp6gG22pc", "PnxKfx6XS_RqcIxC7w4a7"],
  },
  {
    title: "Властелин колец: Возвращение короля",
    posterUrl: "https://i.postimg.cc/FF8sXZgc/3.webp",
    releaseYear: 2003,
    description:
      "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.",
    genre: "fantasy",
    id: "5flr8UOuJz7UuputaZ9iL",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["sFpB1zc2RB1_06S9PMWj4", "sFpB1zc2RB1_06S9PMWj4"],
  },
  {
    title: "Оно",
    posterUrl: "https://i.postimg.cc/NfXGsHpn/image.webp",
    releaseYear: 2017,
    description:
      "Когда в городке Дерри штата Мэн начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами - не только с группой школьных хулиганов, но со злобным клоуном Пеннивайзом, чьи проявления жестокости и список жертв уходят в глубь веков.",
    genre: "horror",
    id: "9t2dPgRBgWpmOXRXK5l4Q",
    rating: 8,
    director: "Андрес Мускетти",
    reviewIds: ["t8QHNLoec1QF1XFyObGk7", "-b9ezNy3oSoMpldgUl_IC"],
  },
];

export default movies;

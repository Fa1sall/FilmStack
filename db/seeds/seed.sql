INSERT INTO categories(name) 
VALUES
('Action'),
('Comedy'),
('Drama'),
('Romance'),
('Sci-Fi'),
( 'Horror');

INSERT INTO movies(title,description,release_year,poster_url,category_id)
VALUES
-- Action
('Inception', 'A thief who steals corporate secrets through dream-sharing technology.', 2010, 'https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg', 1),
('The Dark Knight', 'Batman raises the stakes in his war on crime.', 2008, 'https://posters.movieposterdb.com/24_06/2008/468569/l_the-dark-knight-movie-poster_96214dbd.jpg', 1),

-- Comedy
('The Hangover', 'Three buddies wake up from a bachelor party in Las Vegas with no memory.', 2009, 'https://posters.movieposterdb.com/09_05/2009/1119646/l_1119646_ffb1b0c5.jpg', 2),
('Superbad', 'High school friends attempt to make the most of their last days before graduation.', 2007, 'https://posters.movieposterdb.com/07_10/2007/829482/l_829482_69906c82.jpg', 2),

-- Drama
('Forrest Gump', 'The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of Forrest Gump.', 1994, 'https://posters.movieposterdb.com/12_04/1994/109830/l_109830_58524cd6.jpg', 3),
('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.', 1994, 'https://posters.movieposterdb.com/11_08/1994/111161/l_111161_e9ccda65.jpg', 3),

-- Romance
('Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist.', 1997, 'https://posters.movieposterdb.com/12_06/1997/120338/s_120338_80e415d1.jpg', 4),
('Chungking Express', 'Two melancholy Hong Kong policemen fall in love: one with a mysterious woman, the other with a quirky snack bar worker.', 1994, 'https://www.tallengestore.com/cdn/shop/products/ChungkingExpress-WongKarWai-KoreanMoviePoster_06d6d31c-6b07-42fc-b6c9-6022c23a1b80.jpg?v=1689307014', 4),

-- Sci-Fi
('Interstellar', 'Explorers travel through a wormhole to save humanity.', 2014, 'https://posters.movieposterdb.com/14_09/2014/816692/l_816692_593eaeff.jpg', 5),
('Arrival', 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.', 2016, 'https://posters.movieposterdb.com/22_10/2016/2543164/l_arrival-movie-poster_145d17f3.jpg', 5),

-- Horror
('The Conjuring', 'Paranormal investigators help a family terrorized by a dark presence.', 2013, 'https://posters.movieposterdb.com/13_09/2013/1457767/l_1457767_1845afad.jpg', 6),
('It', 'Seven children face the evil clown Pennywise in their town.', 2017, 'https://posters.movieposterdb.com/21_10/2017/1396484/l_1396484_82953f0a.jpg', 6);
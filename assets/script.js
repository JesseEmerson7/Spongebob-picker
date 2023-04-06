const textEntry = $("#episode");

const btn = $("#btn");


const choices = [
  {
    season: 1,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    season: 2,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    season: 3,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
  },
  {
    season: 4,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    season: 5,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    season: 6,
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
];






btn.click(function () {


const randomSeasonAndEpisode = getRandomSeasonAndEpisode(choices);
const randomSeason = randomSeasonAndEpisode.season;
const randomEpisode = randomSeasonAndEpisode.episode;
console.log(randomSeasonAndEpisode);

console.log("Season: ", randomSeason);
console.log("Episode: ", randomEpisode);

textEntry.text("Season: "+ randomSeason +" "+ "Episode: "+ randomEpisode);

});



function getRandomSeasonAndEpisode(choices) {
    const randomSeasonIndex = Math.floor(Math.random() * choices.length);
    const season = choices[randomSeasonIndex].season;
    const episodeArray = choices[randomSeasonIndex].episode;
    const randomEpisodeIndex = Math.floor(Math.random() * episodeArray.length);
    const episode = episodeArray[randomEpisodeIndex];
    return { season, episode };
  }

 

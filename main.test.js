import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search 'Armenia', expected outputs 'Decoder: Armenia in a bind as Ukraine war resets global order'", () => {
  const inputValue = "Armenia"
  expect(newsList.filter(value => value.match(inputValue))).toEqual([
    "Decoder: Armenia in a bind as Ukraine war resets global order"
  ]);
});

// Test for sort function 
test("Test ascending sort", () => {
    expect(sort("ascending")).toEqual(
      [
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        'Buried underpants and tea bags help scientists evaluate soil',
        'Decoder: Armenia in a bind as Ukraine war resets global order',
        'Decoder: Mining asteroids for minerals can help spare Earth',
        'Marie Colvin shined a light on war-torn corners of the world',
        'Media glare can enrich tennis pros yet imperil mental health',
        'What books should an aspiring journalist read?',
        'What films should an aspiring journalist watch?'
      ]);
});

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

      // Function to replace values in the array
function replaceValuesForKeys(array, keys, oldValue, newValue) {
  for (let i = 0; i < array.length; i++) {
    for (const key of keys) {
      // Check if the key exists in the dictionary
      if (array[i][key] !== undefined) {
        // Replace the old value with the new value
        array[i][key] = array[i][key].replace(oldValue, newValue);
      }
    }
  }
}

function repeatEntries(array, repeatCount) {
  if (!Array.isArray(array) || typeof repeatCount !== 'number' || repeatCount <= 0) {
    console.error('Invalid input. Please provide a valid array and a positive repeat count.');
    return [];
  }

  const result = [];

  array.forEach((entry) => {
    for (let i = 0; i < repeatCount; i++) {
      result.push({ ...entry }); // Use spread operator to create a shallow copy of the entry
    }
  });

  return result;
}
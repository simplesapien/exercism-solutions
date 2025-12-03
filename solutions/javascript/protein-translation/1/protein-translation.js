//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA) => {

  const dict = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP"
  }

  function checkForMatch(codon){
  for (const [key, value] of Object.entries(dict))
    {
      if (codon == key) return value;
    }
    throw new Error ('Invalid codon');
  }
  
  const translation = [];

  // Check for empty entries and skip the loop
  if (!RNA) return translation;

  for (let i = 0; i < RNA.length; i += 3)
    {
      let codon = RNA[i] + RNA[i+1] + RNA[i+2];
      let translatedString = checkForMatch(codon);
      if (translatedString == "STOP") break;
      translation.push(translatedString)
    }


  return translation;
  
};

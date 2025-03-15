// ts - " satisfies " keyword

const dataEntries = {
  entry1: 1,
  entry2: 7,
} satisfies Record<string, number>; // satisfies - type saftey & dyanmic object flexibility

dataEntries.entry1; // accessing props values
dataEntries.entry2;

//dataEntries.entry3 !!! ERROR - entry3 dont exist !!!

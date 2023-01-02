
// A coloured triangle is created from a row of colours, each of which is red, green or blue.Successive rows, each containing one fewer colour than the last,
// are generated by considering the two touching colours in the previous row. 
// If these colours are identical, the same colour is used in the new row.If they are different, the missing colour is used in the new row. 
// This is continued until the final row, with only a single colour, is generated.

// The different possibilities are:

// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G


// triangle('RBRGBRBGGRRRBGBBBGG'), 'G'
// triangle('RGBG'), 'B'
// RGBG
// BRR
// GR
// B
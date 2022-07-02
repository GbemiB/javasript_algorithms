// Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => Object.entries(gunners)
  .some((e) => e[1] === 'nay') ? 'Shiver me timbers!' : 'Fire!';
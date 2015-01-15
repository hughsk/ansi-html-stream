module.exports.inline = {
  resets:    { '0': false },
  bold:      { '1': { style: 'font-weight:bold' } },
  underline: { '4': { style: 'text-decoration:underline' } },
  foregrounds: {
      '30': { style: 'color:#111' } // black
    , '31': { style: 'color:#ff7e76' } // red
    , '32': { style: 'color:#a4f87b' } // green
    , '33': { style: 'color:#f6fcc0' } // yellow
    , '34': { style: 'color:#9cd8fb' } // blue
    , '35': { style: 'color:#ff85f6' } // magenta
    , '36': { style: 'color:#0cfdf8' } // cyan
    , '37': { style: 'color:#eee' } // white
    // +intensity
    , '90': { style: 'color:#666' } // black
    , '91': { style: 'color:#f77' } // red
    , '92': { style: 'color:#7f7' } // green
    , '93': { style: 'color:#ff7' } // yellow
    , '94': { style: 'color:#77f' } // blue
    , '95': { style: 'color:#f7f' } // magenta
    , '96': { style: 'color:#7ff' } // cyan
    , '97': { style: 'color:#fff' } // white
    , '39': false // default
  },
  backgrounds: {
      '40': { style: 'background-color:#111' } // black
    , '41': { style: 'background-color:#ff7e76' } // red
    , '42': { style: 'background-color:#a4f87b' } // green
    , '43': { style: 'background-color:#f6fcc0' } // yellow
    , '44': { style: 'background-color:#9cd8fb' } // blue
    , '45': { style: 'background-color:#ff85f6' } // magenta
    , '46': { style: 'background-color:#cfd0f8' } // cyan
    , '47': { style: 'background-color:#eee' } // white
    // +intensity
    , '100': { style: 'background-color:#666' } // black
    , '101': { style: 'background-color:#f77' } // red
    , '102': { style: 'background-color:#7f7' } // green
    , '103': { style: 'background-color:#ff7' } // yellow
    , '104': { style: 'background-color:#77f' } // blue
    , '105': { style: 'background-color:#f7f' } // magenta
    , '106': { style: 'background-color:#7ff' } // cyan
    , '107': { style: 'background-color:#eee' } // white
    , '49': false // default
  }
};

module.exports.classes = {
  resets:    { '0': false },
  bold:      { '1': { 'class': 'ansi-bold' } },
  underline: { '4': { 'class': 'ansi-underline' } },
  foregrounds: {
      '30': { 'class': 'ansi-fg-black' }
    , '31': { 'class': 'ansi-fg-red' }
    , '32': { 'class': 'ansi-fg-green' }
    , '33': { 'class': 'ansi-fg-yellow' }
    , '34': { 'class': 'ansi-fg-blue' }
    , '35': { 'class': 'ansi-fg-magenta' }
    , '36': { 'class': 'ansi-fg-cyan' }
    , '37': { 'class': 'ansi-fg-white' }
    , '90': { 'class': 'ansi-fg-intense ansi-fg-black' }
    , '91': { 'class': 'ansi-fg-intense ansi-fg-red' }
    , '92': { 'class': 'ansi-fg-intense ansi-fg-green' }
    , '93': { 'class': 'ansi-fg-intense ansi-fg-yellow' }
    , '94': { 'class': 'ansi-fg-intense ansi-fg-blue' }
    , '95': { 'class': 'ansi-fg-intense ansi-fg-magenta' }
    , '96': { 'class': 'ansi-fg-intense ansi-fg-cyan' }
    , '97': { 'class': 'ansi-fg-intense ansi-fg-white' }
    , '39': false // default
  },
  backgrounds: {
      '40': { 'class': 'ansi-bg-black' }
    , '41': { 'class': 'ansi-bg-red' }
    , '42': { 'class': 'ansi-bg-green' }
    , '43': { 'class': 'ansi-bg-yellow' }
    , '44': { 'class': 'ansi-bg-blue' }
    , '45': { 'class': 'ansi-bg-magenta' }
    , '46': { 'class': 'ansi-bg-cyan' }
    , '47': { 'class': 'ansi-bg-white' }
    , '100': { 'class': 'ansi-bg-intense ansi-bg-black' }
    , '101': { 'class': 'ansi-bg-intense ansi-bg-red' }
    , '102': { 'class': 'ansi-bg-intense ansi-bg-green' }
    , '103': { 'class': 'ansi-bg-intense ansi-bg-yellow' }
    , '104': { 'class': 'ansi-bg-intense ansi-bg-blue' }
    , '105': { 'class': 'ansi-bg-intense ansi-bg-magenta' }
    , '106': { 'class': 'ansi-bg-intense ansi-bg-cyan' }
    , '107': { 'class': 'ansi-bg-intense ansi-bg-white' }
    , '49': false // default
  }
};

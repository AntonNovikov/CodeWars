function cake(x, y){
    let a = y.split("");
    let res = 0;
    for (i in a){
      res += i % 2 == 0 ? a[i].charCodeAt(0) : a[i].charCodeAt(0) - 96;
    }
    return res > x * 0.7 ? 'Fire!': 'That was close!';
  }

cake(279, "iu");
cake(900, "abcdef"); //'That was close!')
cake(56, "ifkhchlhfd");
cake(256, "aaaaaddddr");
cake(506, "utjs");
cake(458, "sfalf"); // Chrono79  (1 kyu) 2 years ago 1 edit "sfalf" score is 332, that's more than 72% of 458, 'Fire!' is ok. Not a kata issue.

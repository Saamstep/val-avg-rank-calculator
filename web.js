function rank() {
  var elements = document.getElementById("form").elements;

  const key = {
    i1: 1,
    i2: 2,
    i3: 3,
    b1: 4,
    b2: 5,
    b3: 6,
    s1: 7,
    s2: 8,
    s3: 9,
    g1: 10,
    g2: 11,
    g3: 12,
    p1: 13,
    p2: 14,
    p3: 15,
    d1: 16,
    d2: 17,
    d3: 18,
    a1: 19,
    a2: 20,
    a3: 21,
    im1: 22,
    im2: 23,
    im3: 24,
    r: 25,
    blank: 0,
  };

  const key2 = {
    1: "Iron 1",
    2: "Iron 2",
    3: "Iron 3",
    4: "Bronze 1",
    5: "Bronze 2",
    6: "Bronze 3",
    7: "Silver 1",
    8: "Silver 2",
    9: "Silver 3",
    10: "Gold 1",
    11: "Gold 2",
    12: "Gold 3",
    13: "Platinum 1",
    14: "Platinum 2",
    15: "Platinum 3",
    16: "Diamond 1",
    17: "Diamond 2",
    18: "Diamond 3",
    19: "Ascendant 1",
    20: "Ascendant 2",
    21: "Ascendant 3",
    22: "Immortal 1",
    23: "Immortal 2",
    24: "Immortal 3",
    25: "Radiant",
  };

  let sum = 0;
  let offset = 0;

  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    console.log(item.value);
    sum += key[item.value];
    if (item.value == "blank") {
      offset--;
    }
  }

  sum /= elements.length + offset;

  let rounded = Math.round(sum);

  document.getElementById("demo").innerHTML = `<p><b>Average:</b> ${sum}<br><b>Rounded Avg:</b> ${rounded}<br><b>Rank:</b> ${key2[rounded]}</p>`;
}

function newPlayer() {
  let count = 0;
  let form = document.getElementById("form");
  for (var i = 0; i < form.elements.length; ++i) {
    var e = form.elements[i];
    // console.log(e.name + e.value);
    count++;
  }

  var new_input = `<select id="player" name="player${count + 1}">
  <option value="blank"></option>
  <option value="i1">Iron 1</option>
  <option value="i2">Iron 2</option>
  <option value="i3">Iron 3</option>
  <option value="b1">Bronze 1</option>
  <option value="b2">Bronze 2</option>
  <option value="b3">Bronze 3</option>
  <option value="s1">Silver 1</option>
  <option value="s2">Silver 2</option>
  <option value="s3">Silver 3</option>
  <option value="g1">Gold 1</option>
  <option value="g2">Gold 2</option>
  <option value="g3">Gold 3</option>
  <option value="p1">Platinum 1</option>
  <option value="p2">Platinum 2</option>
  <option value="p3">Platinum 3</option>
  <option value="d1">Diamond 1</option>
  <option value="d2">Diamond 2</option>
  <option value="d3">Diamond 3</option>
  <option value="a1">Ascendant 1</option>
  <option value="a2">Ascendant 2</option>
  <option value="a3">Ascendant 3</option>
  <option value="im1">Immortal 1</option>
  <option value="im2">Immortal 2</option>
  <option value="im3">Immortal 3</option>
  <option value="r">Radiant</option>
</select><br>`;
  $("form").append(new_input);
}

function rank_lol() {
  var elements = document.getElementById("form").elements;

  const key = {
    i4: 1,
    i3: 2,
    i2: 3,
    i1: 4,
    b4: 5,
    b3: 6,
    b2: 7,
    b1: 8,
    s4: 9,
    s3: 10,
    s2: 11,
    s1: 12,
    g4: 13,
    g3: 14,
    g2: 15,
    g1: 16,
    p4: 17,
    p3: 18,
    p2: 19,
    p1: 20,
    e4: 21,
    e3: 22,
    e2: 23,
    e1: 24,
    d4: 25,
    d3: 26,
    d2: 27,
    d1: 28,
    m: 29,
    gm: 30,
    ch: 31,
    blank: 0,
  };

  const key2 = {
    1: "Iron 4",
    2: "Iron 3",
    3: "Iron 2",
    4: "Iron 1",
    5: "Bronze 4",
    6: "Bronze 3",
    7: "Bronze 2",
    8: "Bronze 1",
    9: "Silver 4",
    10: "Silver 3",
    11: "Silver 2",
    12: "Silver 1",
    13: "Gold 4",
    14: "Gold 3",
    15: "Gold 2",
    16: "Gold 1",
    17: "Platinum 4",
    18: "Platinum 3",
    19: "Platinum 2",
    20: "Platinum 1",
    21: "Emerald 4",
    22: "Emerald 3",
    23: "Emerald 2",
    24: "Emerald 1",
    25: "Diamond 4",
    26: "Diamond 3",
    27: "Diamond 2",
    28: "Diamond 1",
    29: "Master",
    30: "Grandmaster",
    31: "Challenger",
  };

  let sum = 0;
  let offset = 0;

  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    console.log(item.value);
    sum += key[item.value];
    if (item.value == "blank") {
      offset--;
    }
  }

  sum /= elements.length + offset;

  let rounded = Math.round(sum);

  document.getElementById("demo").innerHTML = `<p><b>Average:</b> ${sum}<br><b>Rounded Avg:</b> ${rounded}<br><b>Rank:</b> ${key2[rounded]}</p>`;
}

function newPlayer_lol() {
  let count = 0;
  let form = document.getElementById("form");
  for (var i = 0; i < form.elements.length; ++i) {
    var e = form.elements[i];
    // console.log(e.name + e.value);
    count++;
  }

  var new_input = `<select id="player" name="player${count + 1}">
  <option value="blank"></option>
      <option value="i4">Iron 4</option>
      <option value="i3">Iron 3</option>
      <option value="i2">Iron 2</option>
      <option value="i1">Iron 1</option>
      <option value="b4">Bronze 4</option>
      <option value="b3">Bronze 3</option>
      <option value="b2">Bronze 2</option>
      <option value="b1">Bronze 1</option>
      <option value="s4">Silver 4</option>
      <option value="s3">Silver 3</option>
      <option value="s2">Silver 2</option>
      <option value="s1">Silver 1</option>
      <option value="g4">Gold 4</option>
      <option value="g3">Gold 3</option>
      <option value="g2">Gold 2</option>
      <option value="g1">Gold 1</option>
      <option value="p4">Platinum 4</option>
      <option value="p3">Platinum 3</option>
      <option value="p2">Platinum 2</option>
      <option value="p1">Platinum 1</option>
      <option value="e4">Emerald 4</option>
      <option value="e3">Emerald 3</option>
      <option value="e2">Emerald 2</option>
      <option value="e1">Emerald 1</option>
      <option value="d4">Diamond 4</option>
      <option value="d3">Diamond 3</option>
      <option value="d2">Diamond 2</option>
      <option value="d1">Diamond 1</option>
      <option value="m">Master</option>
      <option value="gm">Grandmaster</option>
      <option value="ch">Challenger</option>
</select><br>`;
  $("form").append(new_input);
}

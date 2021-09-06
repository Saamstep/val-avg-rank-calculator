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
    i: 19,
    r: 20,
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
    19: "Immortal",
    20: "Radiant",
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

  let rounded = Math.floor(sum);

  document.getElementById("demo").innerHTML = `<br><h2>Sum:</h2><p>${sum}</p><h2>Rounded:</h2><p>${rounded}</p><h2>Rank:</h2><p>${key2[rounded]}</p>`;
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
    <option value="i">Immortal</option>
    <option value="r">Radiant</option>
</select><br>`;
  $("form").append(new_input);
}

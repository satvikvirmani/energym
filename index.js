var day = 0;

const btns = document.querySelectorAll("button[id^=button]");

const schedules = [
  `<tr>
<td colspan="2">Aerobics<br>By Jack Sparrow
</td>
<td></td>
<td></td>
<td colspan="2">Power Lifting <br> By Andrew</td>
</tr>
<tr>
<td></td>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
<td colspan="2">Cardio Training <br> By Tristian</td>
<td></td>
</tr>`,
  `<tr>
<td></td>
<td colspan="2">Aerobics<br>By Jack Sparrow</td>
<td></td>
<td colspan="2">Power Lifting <br> By Andrew</td>
</tr>
<tr>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
<td colspan="2">Cardio Training <br> By Tristian</td>
<td></td>
<td></td>
</tr>`,
  `<tr>
<td colspan="2">Power Lifting <br> By Andrew</td>
<td></td>
<td colspan="2">Aerobics<br>By Jack Sparrow</td>
<td></td>
</tr>
<tr>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
<td></td>
<td></td>
<td colspan="2">Cardio Training <br> By Tristian</td>
</tr>`,
  `<tr>
<td></td>
<td colspan="2">Power Lifting <br> By Andrew</td>
<td></td>
<td colspan="2">Aerobics<br>By Jack Sparrow</td>
</tr>
<tr>
<td></td>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
<td></td>
<td colspan="2">Cardio Training <br> By Tristian</td>
</tr>`,
  `<tr>
<td colspan="2">Aerobics<br>By Jack Sparrow</td>
<td></td>
<td colspan="2">Power Lifting <br> By Andrew</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td colspan="2">Cardio Training <br> By Tristian</td>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
</tr>`,
  `<tr>
<td colspan="2">Aerobics<br>By Jack Sparrow</td>
<td colspan="2">Power Lifting <br> By Andrew</td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td colspan="2">Cross Fit Training <br> By Jordan Petersan</td>
<td></td>
<td colspan="2">Cardio Training <br> By Tristian</td>
</tr>`,
];

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    day = event.target.id.replace("button-", "").toUpperCase();

    document.getElementById("day").innerHTML = day;
    document.getElementById("table-body").innerHTML =
      schedules[event.target.value];
  });
});

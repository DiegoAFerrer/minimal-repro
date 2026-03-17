/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { ipcRenderer } = require("electron")
const fs = require('node:fs')

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#imc_form')

  form.addEventListener('submit', onSubmit)
  
  function onSubmit(e){
      e.preventDefault();
  
      let bodyMassIndex = fweight.value / (fheight.value * fheight.value);
  
      let items = fname.value + " - " + bodyMassIndex + "\n";

      const table = document.getElementById("table");

      const tablerow = document.createElement("tr");
      table.appendChild(tablerow);

      const tabledata_name = document.createElement("td");
      tabledata_name.innerHTML = fname.value;

      const tabledata_weight = document.createElement("td");
      tabledata_weight.innerHTML = fweight.value;

      const tabledata_height = document.createElement("td");
      tabledata_height.innerHTML = fheight.value;

      const tabledata_bmi = document.createElement("td");
      tabledata_bmi.innerHTML = bodyMassIndex;

      tablerow.appendChild(tabledata_name);
      tablerow.appendChild(tabledata_weight);
      tablerow.appendChild(tabledata_height);
      tablerow.appendChild(tabledata_bmi);
  
      fs.appendFile('./save/test.txt', items, err => {
          if (err) {
              console.error(err);
          } else {
              console.log("success");
          }
      });
    }
  })

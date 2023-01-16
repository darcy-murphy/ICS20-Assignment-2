

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Darcy Murphy
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */

"use strict"
/**
 * This function calculates area and perimeter of kite.
 */
function calculate() {
  // input
  const hight = parseInt(document.getElementById("hight-of-kite").value)
  const base = parseInt(document.getElementById("base-of-kite").value)

  // process
  const area = (hight * base) / 2
  const perimeter = 2 * (hight + base)

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
/*
* Version: 1.2.0
* Template: Hope-Ui - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Design and Developed by: iqonic.design
* NOTE: This file contains the script for initialize & listener Template.
*/
/*----------------------------------------------
Index Of Script
------------------------------------------------

------- Plugin Init --------

:: Sticky-Nav
:: Popover
:: Tooltip
:: Circle Progress
:: Progress Bar
:: NoUiSlider
:: CopyToClipboard
:: CounterUp 2
:: SliderTab
:: Data Tables
:: Active Class for Pricing Table
:: AOS Animation Plugin

------ Functions --------

:: Resize Plugins
:: Loader Init
:: Sidebar Toggle
:: Back To Top

------- Listners ---------

:: DOMContentLoaded
:: Window Resize
:: DropDown
:: Form Validation
:: Flatpickr
------------------------------------------------
Index Of Script
----------------------------------------------*/
"use strict";
/*---------------------------------------------------------------------
              Progress Bar
-----------------------------------------------------------------------*/
const progressBarInit = (elem) => {
  const currentValue = elem.getAttribute('aria-valuenow');
  elem.style.width = '0%';
  elem.style.transition = 'width 2s';
  if (typeof Waypoint !== typeof undefined) {
    new Waypoint({
      element: elem,
      handler: function () {
        setTimeout(() => {
          elem.style.width = currentValue + '%';
        }, 100);
      },
      offset: 'bottom-in-view',
    });
  }
};
const customProgressBar = document.querySelectorAll('[data-toggle="progress-bar"]');
Array.from(customProgressBar, (elem) => {
  progressBarInit(elem);
});

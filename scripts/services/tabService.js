var myapp = angular.module("myApp");
myapp.service('menuService', function ($rootScope) {
$rootScope.firstLoad = true;
this.getMenuItems = function(){
    menuItems = [
    {
      "itemId":"dashboard",
      "icon":"fa-tachometer",
      "label":"Dashboard"
    },
	{
      "itemId":"history",
      "icon":"fa-user",
      "label":"History"
    },
    {
      "itemId":"budget",
      "icon":"fa-graduation-cap",
       "label":"Budget"
     },
    {
      "itemId":"distrubution",
      "icon":"fa-briefcase",
      "label":"Distrubution"
     },
    {
      "itemId":"statistics",
      "icon":"fa-phone",
      "label":"Statistics"
     }
  ]

  return menuItems;
  }

 });
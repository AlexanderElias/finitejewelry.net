function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="radial-box-light"><h2>Jewelry</h2><div class="sort-bar"><input class="search" type="text" ng-model="MC.sort.search" placeholder="Search"><div class="drop-down"><select ng-model="MC.sort.option"><option ng-repeat="option in MC.sort.options" value="{{option.value}}">{{option.text}}</option></select><object data="/static/images/icons/arrow-drop-down.svg" type="image/svg+xml"></object></div></div><ul class="list"><li class="items glass-box" dir-paginate="item in MC.items | filter:{title: MC.sort.search} | orderBy:MC.sort.option:MC.sort.direction | itemsPerPage: 10" layout="column" layout-align-xs="center center" layout-gt-xs="row" layout-align-gt-xs="left center" layout-padding><div layout="row" layout-align="center center"><img ng-src="/static/images{{item.images[0].src}}" alt="{{item.images[0].alt}}"></div><div layout="row" layout-align="center center" layout-padding><div class="ie-fixes" layout="column"><p class="items-title">{{item.title}}</p><p class="items-price">{{item.price | currency}}</p><div layout="row" layout-xs="column" layout-sm="column" layout-align="center center"><a ng-href="{{item.buyLink}}" class="button-gold m-l-0">Buy</a><a ng-href="/jewelry/{{item._id}}" class="button-blue m-r-0">View</a></div></div></div></li><li class="items glass-box" ng-show="MC.productsEmptyOrError" layout="row" layout-align="center center" layout-padding>Please Refresh The Page</li></ul><dir-pagination-controls></dir-pagination-controls></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);
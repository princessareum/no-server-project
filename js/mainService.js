angular.module('app').service('mainSvc', function(){
  var products = [
    {name: 'Chestnut Bread',
    image: '../image/chestnut.jpg',
    discription: 'Bread with sweet chestnuts'},
    {name: 'Cream Bread',
    image: '../image/cream.jpeg',
    discription: 'Bread with cream filling'},
    {name: 'Croquette',
    image: '../image/croquette.jpg',
    discription: 'Oven baked croquettes'},
    {name: 'Pizza Bread',
    image: '../image/pizza.jpg',
    discription: 'Delicious Pizza bread'},
    {name: 'Red Bean Bread',
    image: '../image/red-bean.jpeg',
    discription: 'Classic Korean bread'},
    {name: 'Chocolate Sora Bread',
    image: '../image/sora.jpg',
    discription: 'Cone shape bread with chocolate cream filling'},
    {name: 'Cream Sora Bread',
    image: '../image/sora2.jpg',
    discription: 'Cone shape bread with custard cream filling'},
    {name: 'Veggie Bread',
    image: '../image/veggie.jpg',
    discription: 'Healthy snack for veggie lovers' }
  ];

  this.getProducts = function(){
    return products;
  }

})

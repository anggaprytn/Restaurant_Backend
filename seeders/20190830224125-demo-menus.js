'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
      {
        name: 'Bakwan Wortel',
        price: '6000',
        image: 'https://static.limakaki.com/2017/03/bakwan-298x300.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Batagor Udang',
        price: '5000',
        image: 'https://www.masakapaya.com/Uploads/Batagor-Udang.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Chicken Salad',
        price: '5000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/september18/Chicken-Salad.png',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Salad Buah',
        price: '3000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/september18/Salad-Buah-1.png',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Mie Goreng Sosis',
        price: '6000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Juli18/Mi-Goreng-Sosis-Balut-Telur.png',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Kroket Wortel',
        price: '8000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Juli18/Kroket-Isi-Wortel-Jeruk.png',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Bubur Jagung',
        price: '9000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/April18/bubur-jagung.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Salad Sayuran',
        price: '2000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Februari18/80103.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Nasi Padang',
        price: '18000',
        image: 'https://cdn.idntimes.com/content-images/community/2019/04/indonesian-food-nasi-padang-one-most-delicious-favourite-foods-indonesia-which-originates-cuty-west-81447227-fa8f035b9a1d8e3ee22b526708464b66_600x400.jpg',
        isStared: 1,
        categoryId: 2
      },
      {
        name: 'Mie Indomie Goreng',
        price: '2500',
        image: 'https://cdn.idntimes.com/content-images/community/2019/05/img-20190523-210827-2d4b25cfddea92b395f6684229248a27_600x400.jpg',
        isStared: 1,
        categoryId: 2
      },
      {
        name: 'Ayam Geprek',
        price: '25000',
        image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/04/29/1968429524.jpg',
        isStared: 0,
        categoryId: 2
      },
      {
        name: 'Nasi Telor Sentosa',
        price: '25000',
        image: 'https://assets-pergikuliner.com/uploads/image/picture/1514181/picture-1564663326.JPG',
        isStared: 0,
        categoryId: 2
      },
      {
        name: 'Bakso Sapi',
        price: '18000',
        image: 'https://awsimages.detik.net.id/community/media/visual/2019/08/12/dca21bf3-923c-486f-bc2e-a3dcd759b1df.jpeg',
        isStared: 1,
        categoryId: 2
      },
      {
        name: 'Nasi Goreng Seafood',
        price: '50000',
        image: 'https://tumpi.id/wp-content/uploads/2016/11/nasi-goreng-seafood.jpg',
        isStared: 0,
        categoryId: 2
      },
      {
        name: 'Soto Betawi',
        price: '25000',
        image: 'https://i2.wp.com/www.romadecade.org/wp-content/uploads/2019/03/Resep-Soto-Betawi.jpg',
        isStared: 0,
        categoryId: 2
      },
      {
        name: 'Nasi Tumpeng',
        price: '40000',
        image: 'http://happinesshabits.info/wp-content/uploads/2015/05/pesan-nasi-tumpeng-kelapa-gading-jakarta.jpg',
        isStared: 1,
        categoryId: 2
      },
      {
        name: 'Martabak Keju',
        price: '18000',
        image: 'http://usaharumahan.id/wp-content/uploads/2019/03/resep-terang-bulan-manis-keju.jpg',
        isStared: 0,
        categoryId: 3
      },
      {
        name: 'Klepon Gula Merah',
        price: '2000',
        image: 'https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/klepon-50470227.jpg',
        isStared: 1,
        categoryId: 3
      },
      {
        name: 'Gemblong Puncak',
        price: '5000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/af1fc0865eb26da7b1aa427184a3b083.jpg',
        isStared: 0,
        categoryId: 3
      },
      {
        name: 'Pukis Keju',
        price: '6000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/11762a6fb0453e7f5958aae4d1c9ab4d.jpg',
        isStared: 0,
        categoryId: 3
      },
      {
        name: 'Pisang Goreng',
        price: '10000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/42d347b636c71d21e983e0cdb3309aa8.jpg',
        isStared: 1,
        categoryId: 3
      },
      {
        name: 'Kue Lapis',
        price: '7000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/cf4c3b937ccc3fc534e3e58a1cbc6821.jpg',
        isStared: 0,
        categoryId: 3
      },
      {
        name: 'Kue Cucur',
        price: '5000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/368c60c77edf189f32da9813dedf3ff4.jpg',
        isStared: 0,
        categoryId: 3
      },
      {
        name: 'Bika Ambon',
        price: '3000',
        image: 'https://cdn.idntimes.com/content-images/post/20180910/7a850a7610e91e63219e372d4df641d0.jpg',
        isStared: 1,
        categoryId: 3
      },
      {
        name: 'Ice Taro Large',
        price: '15000',
        image: 'https://assets-pergikuliner.com/uploads/image/picture/1457532/picture-1561351840.jpg',
        isStared: 1,
        categoryId: 4
      },
      {
        name: 'Es Kelapa Muda',
        price: '11000',
        image: 'https://cdn.brilio.net/community/community-news/2018/10/15/c81d30fe57e281d8f63a211ad1db0993/15-image_1539556387_5bc3c4231d989.jpeg',
        isStared: 0,
        categoryId: 4
      },
      {
        name: 'Ice Boba Lychee Tea',
        price: '21000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Mei18/Es-Teh-Boba.jpg',
        isStared: 0,
        categoryId: 4
      },
      {
        name: 'Wedang Ronde Susu',
        price: '26000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/April18/wedang-ronde.jpg',
        isStared: 0,
        categoryId: 4
      },
      {
        name: 'Es Buah Susu',
        price: '20000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Desember/Es%20Buah%20Susu.jpg',
        isStared: 0,
        categoryId: 4
      },
      {
        name: 'Es Selendang Mayang',
        price: '4000',
        image: 'https://www.masakapaya.com/Uploads/es-selendang-mayang.jpg',
        isStared: 0,
        categoryId: 4
      },
      {
        name: 'Teh Pucuk',
        price: '3000',
        image: 'https://cdn.monotaro.id/media/catalog/product/cache/6/image/b5fa40980320eb406ba395dece54e4a8/S/0/S000003821-1.jpg',
        isStared: 1,
        categoryId: 4
      },
      {
        name: 'Air Bening',
        price: '99000',
        image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2018/11/23/5bf77cb89898d-air-mineral-air-putih_665_374.jpg',
        isStared: 1,
        categoryId: 4
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

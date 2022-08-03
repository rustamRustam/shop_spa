const products = [
  {
    "id": "p1",
    "title": "Тележка 1",
    "img": "product/1.jpg",
    "price": "100",
    "category": "c1",
    "info": "То куда складывать при ходьбе между полок с товарами."
  },
  {
    "id": "p2",
    "title": "Коробка 1",
    "img": "product/2.png",
    "price": "110",
    "category": "c2",
    "info": "То куда складывать что то при переезде."
  },
  {
    "id": "p3",
    "title": "Козинка 1",
    "img": "product/3.jpeg",
    "price": "90",
    "category": "c3",
    "info": "Почти как тележка только меньше и для малых походов."
  },
  {
    "id": "p4",
    "title": "Мебель 1",
    "img": "product/4.jpg",
    "price": "12345",
    "category": "c4",
    "info": "Этим обставляют помещения что бы было удобно и уютно."
  },
  {
    "id": "p5",
    "title": "Компьютер 1",
    "img": "product/5.png",
    "price": "654329",
    "category": "c5",
    "info": "Просто техника."
  },
  {
    "id": "p6",
    "title": "Тележка 2",
    "img": "product/1.jpg",
    "price": "102",
    "category": "c1",
    "info": "То куда складывать при ходьбе между полок с товарами."
  },
  {
    "id": "p7",
    "title": "Коробка 2",
    "img": "product/2.png",
    "price": "110",
    "category": "c2",
    "info": "То куда складывать что то при переезде."
  },
  {
    "id": "p8",
    "title": "Козинка 2",
    "img": "product/3.jpeg",
    "price": "90",
    "category": "c3",
    "info": "Почти как тележка только меньше и для малых походов."
  },
  {
    "id": "p9",
    "title": "Мебель 2",
    "img": "product/4.jpg",
    "price": "12345",
    "category": "c4",
    "info": "Этим обставляют помещения что бы было удобно и уютно."
  },
  {
    "id": "p10",
    "title": "Компьютер 2",
    "img": "product/5.png",
    "price": "654329",
    "category": "c5",
    "info": "Просто техника."
  },
  {
    "id": "p11",
    "title": "Тележка 3",
    "img": "product/1.jpg",
    "price": "104",
    "category": "c1",
    "info": "То куда складывать при ходьбе между полок с товарами."
  },
  {
    "id": "p12",
    "title": "Коробка 3",
    "img": "product/2.png",
    "price": "110",
    "category": "c2",
    "info": "То куда складывать что то при переезде."
  },
  {
    "id": "p13",
    "title": "Козинка 3",
    "img": "product/3.jpeg",
    "price": "90",
    "category": "c3",
    "info": "Почти как тележка только меньше и для малых походов."
  },
  {
    "id": "p14",
    "title": "Мебель 3",
    "img": "product/4.jpg",
    "price": "12345",
    "category": "c4",
    "info": "Этим обставляют помещения что бы было удобно и уютно."
  },
  {
    "id": "p15",
    "title": "Компьютер 3",
    "img": "product/5.png",
    "price": "654329",
    "category": "c5",
    "info": "Просто техника."
  },
  {
    "id": "p16",
    "title": "Тележка 4",
    "img": "product/1.jpg",
    "price": "106",
    "category": "c1",
    "info": "То куда складывать при ходьбе между полок с товарами."
  },
  {
    "id": "p17",
    "title": "Коробка 4",
    "img": "product/2.png",
    "price": "110",
    "category": "c2",
    "info": "То куда складывать что то при переезде."
  },
  {
    "id": "p18",
    "title": "Козинка 4",
    "img": "product/3.jpeg",
    "price": "90",
    "category": "c3",
    "info": "Почти как тележка только меньше и для малых походов."
  },
  {
    "id": "p19",
    "title": "Мебель 4",
    "img": "product/4.jpg",
    "price": "12345",
    "category": "c4",
    "info": "Этим обставляют помещения что бы было удобно и уютно."
  },
  {
    "id": "p20",
    "title": "Компьютер 4",
    "img": "product/5.png",
    "price": "654329",
    "category": "c5",
    "info": "Просто техника."
  },
  {
    "id": "p21",
    "title": "Тележка 5",
    "img": "product/1.jpg",
    "price": "108",
    "category": "c1",
    "info": "То куда складывать при ходьбе между полок с товарами."
  },
  {
    "id": "p22",
    "title": "Коробка 5",
    "img": "product/2.png",
    "price": "110",
    "category": "c2",
    "info": "То куда складывать что то при переезде."
  },
  {
    "id": "p23",
    "title": "Козинка 5",
    "img": "product/3.jpeg",
    "price": "90",
    "category": "c3",
    "info": "Почти как тележка только меньше и для малых походов."
  },
  {
    "id": "p24",
    "title": "Мебель 5",
    "img": "product/4.jpg",
    "price": "12345",
    "category": "c4",
    "info": "Этим обставляют помещения что бы было удобно и уютно."
  },
  {
    "id": "p25",
    "title": "Компьютер 5",
    "img": "product/5.png",
    "price": "654329",
    "category": "c5",
    "info": "Просто техника."
  }
];

export default products;

export function getProductById(_product_id) {
  let result_product = null;
  products.some((_product) => {
    if (_product.id === _product_id) {
      result_product = _product;
      return true;
    }
    return false;
  });
  return result_product;
}

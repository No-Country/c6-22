const tablets = [
  {
    name: "Apple iPad Air 2022",
    img: "https://educacion30.b-cdn.net/wp-content/uploads/2022/12/modelo-apple_tablet.jpg.webp",
    price: 187000,
    details:
      "Pantalla Liquid Retina de 10,9 pulgadas con tecnología True Tone, gama cromática amplia (P3) y película antirreflectante",
    id: 1,
  },
  {
    name: "Huawei MatePad",
    img: "https://educacion30.b-cdn.net/wp-content/uploads/2022/12/modelo-huawei.jpg.webp",
    price: 92000,
    details:
      "Una de las características más interesantes de este modelo, provisto de una pantalla de 10,4 pulgadas y 2.000 x 1.200 píxeles de resolución, es que cuenta con una función llamada visualización multiventana que puede mostrar hasta cuatro aplicaciones a la vez. Además, este display posee doble certificación TÜV Rheinland que reduce tanto la luz azul como los parpadeos. Es capaz de eliminar el ruido durante las videoconferencias empleando un algoritmo de audio que filtra el ruido del entorno.",
    id: 2,
  },
  {
    name: "Lenovo Tab P12 Pro",
    img: "https://educacion30.b-cdn.net/wp-content/uploads/2022/12/modelo-lenovo-1.jpg.webp",
    price: 240000,
    details:
      "Se comercializa con el stylus Lenovo Precision Pen 3 que se recarga de manera inalámbrica y permite realizar anotaciones manuscritas sobre su pantalla. Con un grosor de 5,63 cm, incorpora una superficie de visualización de 12,6 pulgadas y resolución de 2.560 x 1.600 píxeles idónea para jugar y consumir contenidos multimedia gracias a su tecnología AMOLED, compatibilidad con Dolby Vision y tasa de refresco de 120 Hz. Mientras, sus cuatro altavoces JBL reproducen sonido Dolby Atmos. Está fabricada en una aleación de aluminio y ofrece estas otras características de interés: batería de 10.200 mAh, Wi-Fi 6, Bluetooth 5.2 y lector de huellas en el botón de encendido.",
    id: 3,
  },
  {
    name: "Xiaomi Redmi Pad",
    img: "https://educacion30.b-cdn.net/wp-content/uploads/2022/12/modelo-xiaomi.jpg.webp",
    price: 90000,
    details:
      "Cuatro altavoces compatibles con Dolby Atmos, Wi-Fi dual, protección ocular, cargador de 22,5 vatios de potencia que alimenta su batería de 8.000 mAh…  Estas son algunas de las características que ofrece la Redmi Pad, una tablet con pantalla de 10,1 pulgadas y 2.000 x 1.200 píxeles de resolución que, gracias a su certificación TÜV Rheinland, protege la vista. Con su función de división en pantalla es posible arrastrar y soltar de manera rápida varias apps sin tener que cambiar de una pantalla a otra.",
    id: 4,
  },
];
const notebooks = [
  {
    name: "Dell XPS 13 OLED",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/11/del-xps-13.jpg?fit=720%2C540&p=1",
    price: 335000,
    details:
      "La XPS 13 empieza con un Core i3-1115G4, 8 GB de RAM, un 256 GB SSD y un pantalla Full HD (1,920 x 1,080 pixeles) y puede ser configurada con un Core i7-1185G7, hasta 32 GB de RAM, 2 TB de almacenamiento, y la pantalla OLED.",
    id: 1,
  },
  {
    name: "Apple MacBook Air M1",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/12/MacBook-Air-M1-Gold-on-Table.jpg?fit=720%2C480&p=1",
    price: 336000,
    details:
      "M1 aporta ventajas importantes a la MacBook Air, convirtiéndola en la portátil perfecta para los estudiantes. Además del chip M1, puedes configurarla hasta 16 GB de RAM y hasta 2 TB SSD.",
    id: 2,
  },
  {
    name: "Lenovo Chromebook Duet 3",
    img: "https://www.techlicious.com/images/computers/lenovo-chromebook-duet-3-side-icon-670px.jpg",
    price: 120000,
    details:
      "Pero la Lenovo Chromebook Duet 3 logra brindar una excelente experiencia de computadora portátil, aunque en un dispositivo muy pequeño. Su pequeña pantalla de 10.9 pulgadas es perfecta para estudiantes o cualquier persona que solo necesite un dispositivo compacto para llevar de un lado a otro. La resolución de la pantalla es incluso mejor que 1080p, alcanzando hasta 2000 x 1200. Eso es muy nítido para una pantalla de este tamaño, lo que la hace excelente para escribir y leer texto. Incluso obtiene hasta 400 nits de brillo, lo que significa que trabajar cerca de ventanas no será un problema. Insistimos: esto es inaudito para una computadora portátil de este precio.",
    id: 3,
  },
  {
    name: "Apple MacBook Pro 16",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/12/macbook-pro-2021-01.jpg?fit=720%2C480&p=1",
    price: 120000,
    details:
      "La MacBook Pro ha corregido muchos de los problemas recientes con la línea 'Pro'. La Touch Bar se ha ido. Vuelve la amplia selección de puertos. Ahora es aún más gruesa y está mejor enfriada.\n Pero es más que una lista de disculpas. La pantalla mini-LED de 120 Hz es la mejor que hemos visto en una computadora portátil, especialmente cuando la usas para ver contenido HDR o de gran formato.",
    id: 4,
  },
];

const smartphones = [
  {
    name: "Samsung Galaxy S22 Ultra",
    img: "https://images.techadvisor.com/cmsdata/slideshow/3678899/mejores-smartphones_samsung-galaxy-s22-ultra.jpg",
    price: 361000,
    details:
      "La amplia pantalla LTPO AMOLED de 6,8″ ofrece una alta resolución WQHD+ y una tasa de refresco adaptativa de hasta 120 Hz, mientras que el soporte de software a largo plazo, que supera incluso a los Pixel de Google, completa una impresionante lista de puntos fuertes.",
    id: 1,
  },
  {
    name: "iPhone 14 Pro",
    img: "https://images.techadvisor.com/cmsdata/slideshow/3678899/mejores-smartphones_iphone-14-pro.jpg",
    price: 531000,
    details:
      "El iPhone 14 estándar es una actualización menor respecto al iPhone 13, así que es una agradable sorpresa ver que el iPhone 14 Pro ha dado un gran salto respecto a su predecesor. Algunos de los cambios son solo superficiales, pero es difícil ignorar la Isla dinámica.",
    id: 2,
  },
  {
    name: "Samsung Galaxy Z Flip 4",
    img: "https://images.techadvisor.com/cmsdata/slideshow/3678899/mejores-smartphones_samsung-galaxy-z-flip-4.jpg",
    price: 240000,
    details:
      "Samsung ha resuelto los problemas del Z Flip 3 de mala duración de la batería y rendimiento de la cámara mediocre para el precio y ha hecho del Z Flip 4 un teléfono para todo el día con las mismas cámaras principal y ultra ancha que el Galaxy S22 y S22 Plus.",
    id: 3,
  },
  {
    name: "Xiaomi 12 Pro",
    img: "https://images.techadvisor.com/cmsdata/slideshow/3678899/mejores-smartphones_xiaomi-12.jpeg",
    price: 343000,
    details:
      "El Xiaomi 12 Pro tiene muchas cosas a su favor, pero eso no significa que no haya un par de puntos débiles importantes a tener en cuenta.\n Tiene un diseño elegante y discreto, una bonita pantalla con cuatro altavoces y un chip Snapdragon 8 Gen 1 que ofrece un rendimiento impresionante. En su mayor parte, el sistema de cámaras también funciona bien. No es el mejor, pero es bueno",
    id: 4,
  },
];

const PCs = [
  {
    name: "Dell XPS 8950",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/12/dell-xps-desktop-8950-review-04.jpg?fit=720%2C480&p=1",
    price: 354000,
    details:
      "La XPS 8950 es una PC de escritorio altamente personalizable con un impresionante potencial de rendimiento.",
    id: 1,
  },
  {
    name: "HP Omen 45L",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/12/hp-omen-45l-review-01.jpg?fit=720%2C480&p=1",
    price: 554000,
    details:
      "La Omen 45L es más fácil de actualizar que la mayoría de las computadoras, y viene con un hardware emblemático.",
    id: 2,
  },
  {
    name: "Apple iMac M1 24 pulgadas",
    img: "https://http2.mlstatic.com/D_NQ_NP_713893-MLA50956407324_082022-O.webp",
    price: 424000,
    details:
      "Cuando se trata de Apple, una parte del encanto reside en la estética. La iMac de 24 pulgadas no es una excepción. Disponible en siete colores: azul, verde, rosa, blanco, amarillo, naranja y morado, la iMac ofrece la combinación perfecta de ángulos y esquinas suaves.",
    id: 3,
  },
  {
    name: "HP Pavilion Gaming Desktop",
    img: "https://es.digitaltrends.com/wp-content/uploads/2022/12/hp-pavilion-gaming-desktop-hero-image.jpg?fit=720%2C392&p=1",
    price: 227000,
    details:
      "A diferencia de equipos parecidos, esta viene con un APU AMD Ryzen independientemente de tu configuración. El modelo base viene con un Ryzen 3 5300G y AMD RX 5500. Si puedes extender tu presupuesto a alrededor de $1,300 dólares, puedes tener la Pavilion Gaming Desktop con el nuevo Nvidia RTX 3060 y Ryzen 7 5700G.",
    id: 4,
  },
];

export class Products {
  smartphones = smartphones;
  tablets = tablets;
  pcs = PCs;
  laptops = notebooks;

  getProducts(productsName) {
    switch (productsName) {
      case "laptops":
        return this.laptops;
      case "pc":
        return this.pcs;
      case "tablets":
        return this.tablets;
      case "smartphones":
        return this.smartphones;
      default:
        break;
    }
  }
  getDetails(productType, id) {
    const findProduct = this.getProducts(productType).find((el) => el.id == id);
    return findProduct;
  }
}

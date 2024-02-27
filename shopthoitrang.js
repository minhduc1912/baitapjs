var man = [
  {
    id:1,
    name: "ÁO SƠ MI DÀI TAY ARISTINO ALSM080Z -BST NGUYÊN KHÍ HIỀN TÀI MÀU TRẮNG IN",
    code: "TN001",
    price: "1.150.000",
    image: "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/alsm080z/_TC_5787x900x900x4.webp"
  },
  {
    id:2,
    name: "QUẦN ÂU ARISTINO",
    code: "TN002",
    price: "750.000",
    image: "https://aristino.com/Data/ResizeImage/images/product/quan-au/atr00303/_TC_9731x900x900x4.webp"
  },
  {
    id:3,
    name: "BỘ COM-LÊ ARISTINO ASUM0203 BST-MINI MÀU NÂU",
    code: "TN003",
    price: "6.000.000",
    image: "https://aristino.com/Data/ResizeImage/images/product/bo-suit/asum0203/DSC02198x900x900x4.webp"
  },
  {
    id:4,
    name: "GIÀY DA ARISTINO ASHR22 MÀU ĐEN",
    code: "TN004",
    price: "5.250.0000",
    image: "https://aristino.com/Data/ResizeImage/images/product/giay-da/ashr22/_TC_0968x900x900x4.webp"
  },
];
var woman = [
  {
    id:1,
    name: "SM CAM ĐẤT CỔ ĐỨC TRANG TRÍ CÚC TAY",
    code: "TN011",
    price: "1.098.000",
    image: "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2308012tlwoor.jpg"
  },
  {
    id:2,
    name: "SƠ MI TƠ ĐEN HT XÍCH",
    code: "TN012",
    price: "1.098.000",
    image: "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/s/fs2401140tsorpb.jpg"
  },
  {
    id:3,
    name: "CHÂN VÁY XÒE TƠ NÂU",
    code: "TN013",
    price: "1.298.000",
    image: "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2309060bkorbr.jpg"
  },
  {
    id:4,
    name: "QUẦN SUÔNG XANH GHI GẤU LƠ VÊ",
    code: "TN014",
    price: "1.198.000",
    image: "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2306144bpwogr4.jpg"
  },
];
function listProducts(){
  for (let i=0;i<=man.length-1;i++){
    var demo= '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem">';
    demo += '<img src="'+man[i].image+'"class="card-img-top" style="height:300px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">'+man[i].name+'</h5>';
    demo += '<p class="card-text">'+man[i].price+' vnđ</p>';
    demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';
    console.log(demo);
    document.getElementById("man").innerHTML +=demo;
  }
  for (let i=0;i<=woman.length-1;i++){
    var demo= '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem">';
    demo += '<img src="'+woman[i].image+'"class="card-img-top" style="height:300px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">'+woman[i].name+'</h5>';
    demo += '<p class="card-text">'+woman[i].price+' vnđ</p>';
    demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';
    console.log(demo);
    document.getElementById("woman").innerHTML +=demo;
  }
}
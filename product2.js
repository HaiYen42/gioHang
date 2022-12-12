let listProduct = [{
    name: "IPhone 5",
    price: "3000",
    image: "img/anh1.jpg",
    id: 1,
},
{
    name: "IPhone 6",
    price: "3000",
    image: "img/anh2.jpg",
    id: 2,
},
{
    name: "IPhone  7",
    price: "3000",
    image: "img/anh3.jpg",
    id: 3,
},
{
    name: "Samsung 8",
    price: "3000",
    image: "img/anh4.jpg",
    id: 4,
},
{
    name: "IPhone  9",
    price: "3000",
    image: "img/anh5.jpg",
    id: 5,
},
]
// Lưu trên local Storage
localStorage.setItem("listProduct",JSON.stringify(listProduct));
let list=JSON.parse(localStorage.getItem("listProduct"));


function renderProducts(all){
    
let data='';
// console.log(listProduct,"11");
for (let i = 0; i < all.length; i++) {
   data+=`
   <div class="product">
   <img src="./${all[i].image}" alt="" width="200px" height="150px">
   <p>${all[i].name}</p>
   <label for="price">${all[i].price}</label> <br>
   <input type="number" value="1">
   <i onclick="addToCart(${all[i].id})" class="fa-solid fa-cart-shopping"></i>   
   </div>
   `

}
document.getElementById("showProduct").innerHTML = data;
}

renderProducts(list);

function addToCart(id) {
    let listProducts = JSON.parse(localStorage.getItem("listProduct"));
// lấy phần tử có danh mục đt từ local (listPro) ra => parse ra mảng =
    console.log("listProduct", listProducts);
    console.log("id",id);
// lấy list product khi add vào giỏ hàng.
    let listProductCart = localStorage.getItem("listProductCart");
//lấy phần tử có danh mục từ local (danh mục listPrCart)
    console.log(listProductCart == null);
// set đk 
// nếu listPrCart mà trống
    if (listProductCart == null) {
        listCart = [];
        for (let i = 0; i < listProducts.length; i++) {
            if (listProducts[i].id == id) {//sau khi tìm đúng ptu
                listCart.push(listProducts[i]);//push cái sp mà "click" vào listPrCart
                localStorage.setItem("listProductCart", JSON.stringify(listCart));
                //lưu vào local với key là listPrCart value là lítPrCart đc chuỗi hoá = JSON 
                break;
            }
        }
 } 
 else {
        // trường hợp trong giỏ hàng đã có sản phẩm rồi ad thwm sản phẩm
        let listProductAddCart = JSON.parse(listProductCart);
        for ( let i = 0; i < listProducts.length; i++) {
            let flag= false
            if(listProducts[i].id==id){
                for(let j = 0; j< listProductAddCart.length; j++){
                    if(listProductAddCart[j].id==id){
                        flag=true;
                        break;
                    }
                    else {
                        flag=false
                    }
                }
                if(flag==true){
                    console.log("san pham dax co trong gio hang");
                }
                else {
                    listProductAddCart.push(listProducts[i]);
                    localStorage.setItem("listProductCart",JSON.stringify(listProductAddCart))
                }
        }
    }
}
}

function searchProduct() {
    let data="";
    let listRender =[];
    // console.log("đã bắt được sự kiện");
    let valueInput= document.getElementById("search").value.toLowerCase();
    // console.log("valueinput");
    for (let i = 0; i < list.length; i++) {
        if (list[i].name.toLowerCase().indexOf(valueInput) !=-1) {
            console.log("same");
            // data+=`
            // <div class="product">
            // <img src="./${listProduct[i].image}" alt="" width="200px" height="150px">
            // <p>${listProduct[i].name}</p>
            // <label for="price">${listProduct[i].price}</label> <br>
            // <input type="number" value="1">
            // <i onclick="addToCart(${listProduct[i].id})" class="fa-solid fa-cart-shopping"></i>   
            // </div>
            // `
            listRender.push(list[i]);
            console.log(listRender);
         
        } 
        
    }
   
    // document.getElementById("showProduct").innerHTML=renderProducts(listRender);
    renderProducts(listRender);
   
}

const express = require("express");
const path = require("path");
app = express();

app.use(express.static(path.join(__dirname,"public")));



app.get("/product",(req,res) =>{
	const productList:[
                {"product_name":"기계식키보드","price":25000,"category":"노트북/태블릿","delivery_price":5000},
                {"product_name":"무선마우스","price":12000,"category":"노트북/태블릿","delivery_price":5000},
                {"product_name":"아이패드","price":725000,"category":"노트북/태블릿","delivery_price":5000},
                {"product_name":"태블릿거치대","price":32000,"category":"노트북/태블릿","delivery_price":5000},
                {"product_name":"무선충전기","price":42000,"category":"노트북/태블릿","delivery_price":5000}
            ];
	res.json(productList);
});

app.listen(3000, () =>{
    console.log("서버 실행중!");
});
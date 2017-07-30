var express=require("express");
var path=require("path");
var app=express();
var server=require("http").createServer(app);


app.listen(3000);
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname +"/web_trang_chu.html"));
})

app.get("/SanPham",function(req,res){
	res.sendFile(path.join(__dirname+"/web_san_pham.html"))
})

app.get("/Dangki",function(req,res){
	res.sendFile(__dirname +"/web_dang_ki.html");
})

app.get("/DangNhap",function(req,res){
	res.sendFile(__dirname +"/web_dang_ki.html");
})

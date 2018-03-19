$("#dr-img").on("change",function(e){
    console.log(URL.createObjectURL($("#dr-img")['0'].files['0']));
})
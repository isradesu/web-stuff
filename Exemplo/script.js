var batataDoce = $(".doce");
var quantidadeDeBatata = 78;
var btn = $("#btn")

btn.click(() => {
    quantidadeDeBatata--;
    batataDoce.html(`batata doce: ${quantidadeDeBatata}`);
    if(quantidadeDeBatata < 50){

        btn.removeClass("btn btn-primary").addClass("btn btn-danger")
        window.alert("Ta pouco, para de pegar")
    }
})
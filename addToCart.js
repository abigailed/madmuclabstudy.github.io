
{ <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
function updateCartDisplay(productName, productLink, productPrice, productImage){

    // text content of product title on cart page
    let Name = $("#cartz-product-title").text();

    // text content of product link on cart page
    let Link = $("#cartz-product-title").attr("href");

    // text content of product price on cart page
    let Price = $("#cartz-price-col").text();

    // imgeconten of prouct on cart page
    let Image = $("img#cartz-image").attr('src');

    // changng content
    Name = productName;
    Link = productLink;
    Price = productPrice;
    Image = productImage;

} }
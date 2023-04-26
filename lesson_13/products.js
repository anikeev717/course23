const createProduct = ({ id, media, title, price }) => {
  //   const { id, media, title, price } = product;
  return `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
        <div class="product-card" id="${id}">
            <figure class="product-card__pic">
            <img src="${media[0].fullUrl}" alt="" class="product-card__img" />
            <button class="product-card__quick-view">Quick View</button>
            </figure>
            <h2 class="product-card__title">${title}</h2>
            <div class="product-card__price">${price} USD</div>
        </div>
    </div>
 `;
};

export { createProduct };

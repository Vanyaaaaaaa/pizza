export function Item() {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <img width={30} src="./img/cart1.svg" alt="cart" />
          Корзина
        </h2>
        <div className="cart__clear">
          <img width={20} src="./img/clean.svg" alt="clean" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        <div className="cart__item">
          <div className="cart__item_img">
            <img src="./img/pizza1.jpeg" alt="pizza" />
          </div>
          <div className="cart__item_info">
            <h3>Сырой цыплёнок</h3>
            <p>Тонкое тесто, 26 см</p>
          </div>
          <div className="cart__item_count">
            <div class="button button--outline button--circle cart__item-count-minus">
              <img width={10} height={10} src="./img/minus.svg" alt="minus" />
            </div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-minus">
              <img width={10} height={10} src="./img/plusOrang.svg" alt="minus" />
              <div />
            </div>
            <div className="cart__item_price">
              <b>770 ₽.</b>
            </div>
            <div className="cart__item_remove">
              <div className="button button--outline button--circle">
                <img width={10} height={10} src="./img/X.svg" alt="x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

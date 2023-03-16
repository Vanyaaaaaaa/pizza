export function Item() {
  return (
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
          <div class="button button--outline button--circle cart__item-count-plus">
            <img width={10} height={10} src="./img/plusOrang.svg" alt="plus" />
          </div>
        </div>
        <div className="cart__item_price">
          <b>770 ₽</b>
        </div>
        <div className="cart__item_remove">
          <div className="button button--outline button--circle">
            <img width={10} height={10} src="./img/X.svg" alt="x" />
          </div>
        </div>
      </div>
    </div>
  );
}

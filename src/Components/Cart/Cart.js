import ModalPopUp from "../UI/ModalPopUp";

const Cart = (props) => {
  const cartItem = (
  <li className="list-group-item">
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => {
        return item.name;
      })}
    </li>
  );

  return (
    <ModalPopUp onCloseBackdrop={props.onHideCartFn}>
      <ul className="list-group">{cartItem}</ul>
      <section className="d-flex justify-content-between text-end border border-end-0 border-bottom-0 border-start-0 border-3 pt-3 pb-3">
        <span className="h4">Total Amount </span>
        <span className='h4'>35.55</span>
      </section>
      <section className="text-end border border-end-0 border-bottom-0 border-start-0 border-3 pt-3">
        <button className="btn btn-primary" onClick={props.onHideCartFn}>Close</button>
        <button className="btn btn-success mx-3">Order</button>
      </section>
    </ModalPopUp>
  );
};

export default Cart;

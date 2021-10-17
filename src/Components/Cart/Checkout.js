import { useRef, useState } from "react";
import classes from './Checkout.module.css'
const isEmpty = (value) => {
  return value.trim() === "";
};
const isFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const [formInputsValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    // checking all form is valid
    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!isFormValid) {
      return;
    }
  };

  const nameControlClass = formInputsValidity.name? 'form-control' : classes["invalid"] + ' form-control';
  const streetControlClass = formInputsValidity.street? 'form-control' : classes["invalid"] + ' form-control';
  const postalCodeControlClass = formInputsValidity.postalCode? 'form-control' : classes["invalid"] + ' form-control';
  const cityControlClass = formInputsValidity.city? 'form-control' : classes["invalid"] + ' form-control';

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            ref={nameInputRef}
            type="text"
            className={nameControlClass}
            id="name"
          />
          {!formInputsValidity.name && (
            <p className="text-danger"> Please enter valid name </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Your Street
          </label>
          <input
            ref={streetInputRef}
            type="text"
            className={streetControlClass}
            id="street"
          />
          {!formInputsValidity.street && (
            <p className="text-danger"> Please enter valid street </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            Postal Code
          </label>
          <input
            ref={postalCodeInputRef}
            type="number"
            className={postalCodeControlClass}
            id="postalCode"
          />
          {!formInputsValidity.postalCode && (
            <p className="text-danger"> Please enter valid postal code </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>  
          <input
            ref={cityInputRef}
            type="text"
            className={cityControlClass}
            id="city"
          />
          {!formInputsValidity.city && (
            <p className="text-danger"> Please enter valid City </p>
          )}
        </div>
        <section className="text-end">
          <button
            className="btn  btn-secondary"
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button className="btn  btn-primary ms-3">Confirm</button>
        </section>
      </form>
    </section>
  );
};

export default Checkout;

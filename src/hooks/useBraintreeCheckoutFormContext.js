import { useContext } from 'react';
import CheckoutFormContext from '../../../../context/Form/CheckoutFormContext';

export default function useBraintreeCheckoutFormContext() {
  return useContext(CheckoutFormContext);
}

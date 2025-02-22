import { shape, string } from 'prop-types';
import { get as _get } from 'lodash-es';

import { config } from '../../../../config';
import LocalStorage from '../../../../utils/localStorage';

export const paymentMethodShape = shape({ title: string, code: string });

export function performRedirect(order) {
  const orderNumber = _get(order, 'order_number');

  if (orderNumber && config.isProductionMode) {
    window.location.replace(`${config.baseUrl}/checkout/onepage/success`);
  }

  if (orderNumber) {
    LocalStorage.clearCheckoutStorage();
  }
}

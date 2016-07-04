/**
 * Created on 3/21/16.
 * @author rankun203
 */
'use strict';

const qr     = require('./index'),
      log4js = require('log4js').getLogger('test');


const svg = qr.gqr('weixin://wxpay/bizpayurl?pr=xEmYnqO');

log4js.info(svg);


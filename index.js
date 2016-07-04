/**
 * Created on 3/21/16.
 * @author rankun203
 */
'use strict';

const qr  = require('qr-image'),
      log = require('log4js').getLogger('index');

const qgr = module.exports.gqr = function gqr(text) {
    log.info('generating qr for: ', text);

    const qr_svg = qr.image(text);
    qr_svg
    return qr_svg;
};


// todo 2016-03-21 18:23:45 generate QR base64

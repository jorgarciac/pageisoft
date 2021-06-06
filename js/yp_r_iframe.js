function yp_emb_resp_check(){
    var embed_containers= document.querySelectorAll('.embed-container');
    if ( (navigator.userAgent.match(/Mobi/) || navigator.userAgent.match(/Android/)) && window.innerHeight > window.innerWidth ) {
        for (const container of embed_containers) {
            var oL = ( typeof(container.offsetLeft) == "undefined" ) ? 0 : container.offsetLeft;
            var h = (window.innerWidth - oL)*parseInt(container.getAttribute('data-page-height'))/parseInt(container.getAttribute('data-page-width')) | 0;
            h = (h>window.innerHeight) ? window.innerHeight:h;
            container.style.width = window.innerWidth+'px';
            container.style.height = h+'px';
        }
    } else {
        for (const container of embed_containers) {
            container.style.width = '100%';
            container.style.height = '100%';
        }
    }
}
window.addEventListener('resize', yp_emb_resp_check, true);yp_emb_resp_check();
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
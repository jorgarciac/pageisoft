!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition()
else if(typeof define=='function'&&define.amd)define(name,definition)
else this[name]=definition()}('bowser',function(){var t=true
function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[1])||'';}
function getSecondMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[2])||'';}
var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result
if(/opera|opr|opios/i.test(ua)){result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}}
else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}}
else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}
else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}}
else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(windowsphone){result={name:'Windows Phone',windowsphone:t}
if(edgeVersion){result.msedge=t
result.version=edgeVersion}
else{result.msie=t
result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}
else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion}}
else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier}}
else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}
else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}
else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}
else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}
else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}
else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)}}
else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}
else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};if(/touchpad\//i.test(ua)){result.touchpad=t;}}
else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}
else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}
else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier}}
else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier}}
else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}
else if(android){result={name:'Android',version:versionIdentifier}}
else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t}
if(versionIdentifier){result.version=versionIdentifier}}
else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'}
if(versionIdentifier){result.version=versionIdentifier}}
else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier}}
else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink"
result.blink=t}else{result.name=result.name||"Webkit"
result.webkit=t}
if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko"
result.gecko=t
result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}
if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t
result.ios=t}else if(mac){result.mac=t}else if(xbox){result.xbox=t}else if(windows){result.windows=t}else if(linux){result.linux=t}
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}
if(osVersion){result.osversion=osVersion;}
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||(android&&(osMajorVersion==3||(osMajorVersion>=4&&!mobile)))||result.silk){result.tablet=t}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t}
if(result.msedge||(result.msie&&result.version>=10)||(result.yandexbrowser&&result.version>=15)||(result.vivaldi&&result.version>=1.0)||(result.chrome&&result.version>=20)||(result.firefox&&result.version>=20.0)||(result.safari&&result.version>=6)||(result.opera&&result.version>=10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]>=6)||(result.blackberry&&result.version>=10.1)||(result.chromium&&result.version>=20)){result.a=t;}
else if((result.msie&&result.version<10)||(result.chrome&&result.version<20)||(result.firefox&&result.version<20.0)||(result.safari&&result.version<6)||(result.opera&&result.version<10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]<6)||(result.chromium&&result.version<20)){result.c=t}else result.x=t
return result}
var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent:'')
bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}
return false;}
function getVersionPrecision(version){return version.split(".").length;}
function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}
for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}
return result;}
function compareVersions(versions){var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);version=version+new Array(delta+1).join(".0");return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});while(--precision>=0){if(chunks[0][precision]>chunks[1][precision]){return 1;}
else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){return 0;}}
else{return-1;}}}
function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;if(typeof strictMode==='string'){ua=strictMode;strictMode=void(0);}
if(strictMode===void(0)){strictMode=false;}
if(ua){_bowser=detect(ua);}
var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){return compareVersions([version,minVersions[browser]])<0;}}}
return strictMode;}
function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}
bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;bowser._detect=detect;return bowser});(function($){UABBTrigger={triggerHook:function(hook,args)
{$('body').trigger('uabb-trigger.'+hook,args);},addHook:function(hook,callback)
{$('body').on('uabb-trigger.'+hook,callback);},removeHook:function(hook,callback)
{$('body').off('uabb-trigger.'+hook,callback);},};})(jQuery);jQuery(document).ready(function($){if(typeof bowser!=='undefined'&&bowser!==null){var uabb_browser=bowser.name,uabb_browser_v=bowser.version,uabb_browser_class=uabb_browser.replace(/\s+/g,'-').toLowerCase(),uabb_browser_v_class=uabb_browser_class+parseInt(uabb_browser_v);$('html').addClass(uabb_browser_class).addClass(uabb_browser_v_class);}
$('.uabb-row-separator').parents('html').css('overflow-x','hidden');});var wpAjaxUrl='https://markxpdesign.ga/wp-admin/admin-ajax.php';var flBuilderUrl='https://markxpdesign.ga/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://markxpdesign.ga/wp-content/plugins/bb-plugin/',wpAjaxUrl:'https://markxpdesign.ga/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:992},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},reloadGoogleMap:function(element){var $element='undefined'==typeof element?$('body'):$(element),googleMap=$element.find('iframe[src*="google.com/maps"]');if(googleMap.length){googleMap.attr('src',function(i,val){return val;});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if($(window).width()<FLBuilderLayoutConfig.breakpoints.small){body.addClass('fl-builder-breakpoint-small');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.small&&$(window).width()<FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-medium');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-large');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),videoMobile=wrap.data('video-mobile'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if(!FLBuilderLayout._isMobile()||(FLBuilderLayout._isMobile()&&"yes"==videoMobile)){if('undefined'!=typeof youtube){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}}
else{videoTag.attr('src','')
wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('start')?playerWrap.data('start'):0,endTime='undefined'!==typeof playerWrap.data('end')?playerWrap.data('end'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,stateCount=0,player,fallback_showing;if(videoId){fallback=playerWrap.data('fallback')||false
if(fallback){playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');fallbackTag.css('background-size','cover');fallbackTag.css('transition','background-image 1s')
playerWrap.append(fallbackTag);fallback_showing=true;}
FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio||FLBuilderLayout._isMobile()){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0&&!FLBuilderLayout._isMobile()){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(event.data===1){if(fallback_showing){$('.fl-bg-video-fallback').css('background-image','url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)')}}
if(stateCount<4){stateCount++;}
if(stateCount>1&&(-1===event.data||2===event.data)&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:startTime,end:endTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth(),ua=navigator.userAgent;if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if(ua.indexOf("Safari")>-1||ua.indexOf("Chrome")>-1){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay')),duration=parseFloat(module.data('animation-duration'));if(!isNaN(duration)){module.css('animation-duration',duration+'s');}
if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}else{setTimeout(function(){module.addClass('fl-animated');},1);}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){if(link.hasClass('fl-scroll-link')||element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module')){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);(function($){FLBuilderAccordion=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this._init();};FLBuilderAccordion.prototype={settings:{},nodeClass:'',_init:function()
{$(this.nodeClass+' .fl-accordion-button').on('click',$.proxy(this._buttonClick,this));$(this.nodeClass+' .fl-accordion-button').on('keypress',$.proxy(this._buttonClick,this));$(this.nodeClass+' .fl-accordion-button').on('focus',$.proxy(this._focusIn,this));$(this.nodeClass+' .fl-accordion-button').on('focusout',$.proxy(this._focusOut,this));FLBuilderLayout.preloadAudio(this.nodeClass+' .fl-accordion-content');this._openDefaultItem();},_buttonClick:function(e)
{var button=$(e.target).closest('.fl-accordion-button'),accordion=button.closest('.fl-accordion'),item=button.closest('.fl-accordion-item'),allContent=accordion.find('.fl-accordion-content'),allIcons=accordion.find('.fl-accordion-button i.fl-accordion-button-icon'),content=button.siblings('.fl-accordion-content'),icon=button.find('i.fl-accordion-button-icon');if(!this._validClick(e)){return;}
e.preventDefault();if(accordion.hasClass('fl-accordion-collapse')){accordion.find('.fl-accordion-item-active').removeClass('fl-accordion-item-active');accordion.find('.fl-accordion-button').attr('aria-expanded','false');accordion.find('.fl-accordion-content').attr('aria-hidden','true');allContent.slideUp('normal');if(allIcons.find('svg').length>0){allIcons.find('svg').attr("data-icon",'plus');}else{allIcons.removeClass(this.settings.activeIcon);allIcons.addClass(this.settings.labelIcon);}}
if(content.is(':hidden')){button.attr('aria-expanded','true');item.addClass('fl-accordion-item-active');item.find('.fl-accordion-content').attr('aria-hidden','false');content.slideDown('normal',this._slideDownComplete);if(icon.find('svg').length>0){icon.find('svg').attr("data-icon",'minus');}else{icon.removeClass(this.settings.labelIcon);icon.addClass(this.settings.activeIcon);}
icon.find('span').text('Collapse');}
else{button.attr('aria-expanded','false');item.removeClass('fl-accordion-item-active');item.find('.fl-accordion-content').attr('aria-hidden','true');content.slideUp('normal',this._slideUpComplete);if(icon.find('svg').length>0){icon.find('svg').attr("data-icon",'plus');}else{icon.removeClass(this.settings.activeIcon);icon.addClass(this.settings.labelIcon);}
icon.find('span').text('Expand');}},_focusIn:function(e)
{var button=$(e.target).closest('.fl-accordion-button');button.attr('aria-selected','true');},_focusOut:function(e)
{var button=$(e.target).closest('.fl-accordion-button');button.attr('aria-selected','false');},_slideUpComplete:function()
{var content=$(this),accordion=content.closest('.fl-accordion');accordion.trigger('fl-builder.fl-accordion-toggle-complete');},_slideDownComplete:function()
{var content=$(this),accordion=content.closest('.fl-accordion'),item=content.parent(),win=$(window);FLBuilderLayout.refreshGalleries(content);FLBuilderLayout.refreshGridLayout(content);FLBuilderLayout.reloadSlider(content);FLBuilderLayout.resizeAudio(content);FLBuilderLayout.reloadGoogleMap(content);FLBuilderLayout.resizeSlideshow();if(item.offset().top<win.scrollTop()+100){$('html, body').animate({scrollTop:item.offset().top-100},500,'swing');}
accordion.trigger('fl-builder.fl-accordion-toggle-complete');},_openDefaultItem:function()
{if(typeof this.settings.defaultItem!=='undefined'){var item=$.isNumeric(this.settings.defaultItem)?(this.settings.defaultItem-1):null;if(item!==null){$(this.nodeClass+' .fl-accordion-button').eq(item).trigger('click');}}},_validClick:function(e)
{return(e.which==1||e.which==13||e.which==32||e.which==undefined)?true:false;}};})(jQuery);(function($){$(function(){new FLBuilderAccordion({id:'60aecfab54aad',defaultItem:1,labelIcon:'fas fa-plus',activeIcon:'fas fa-minus',});});})(jQuery);var NJBAModal;;(function($){NJBAModal={settings:{},isActive:false,init:function(data){NJBAModal.settings=data;if(parseInt(NJBAModal.settings.display_after)===0||NJBAModal.settings.display_after<0||NJBAModal.settings.display_after===''){NJBAModal.cookie.remove();}
if((NJBAModal.settings.exit_intent||NJBAModal.settings.auto_load)&&NJBAModal.cookie.get()&&!NJBAModal.settings.previewing){return;}
if(!NJBAModal.settings.previewing&&'undefined'!==typeof NJBAModal.settings.visible&&!NJBAModal.settings.visible){return;}
if(NJBAModal.isActive){return;}
NJBAModal.responsive();NJBAModal.show();},modal:function(){return $('#modal-'+NJBAModal.settings.id+' .njba-modal');},show:function(){if('fullscreen'!==NJBAModal.settings.layout){if(typeof NJBAModal.settings.height==='undefined'){$('#modal-'+NJBAModal.settings.id).addClass('njba-modal-height-auto');var modalHeight=NJBAModal.modal().outerHeight();$('#modal-'+NJBAModal.settings.id).removeClass('njba-modal-height-auto');if('photo'===NJBAModal.settings.type){NJBAModal.modal().find('.njba-modal-content-inner img').css('max-width','100%');}
var topPos=($(window).height()-modalHeight)/2;if(topPos<0){topPos=0;}
NJBAModal.modal().css('top',topPos+'px');}else{NJBAModal.modal().css('top',($(window).height()-NJBAModal.settings.height)/2+'px');}}
setTimeout(function(){$('#modal-'+NJBAModal.settings.id).show();NJBAModal.modal().parent().removeClass(NJBAModal.settings.animation_load+' animated');NJBAModal.modal().addClass('modal-visible');NJBAModal.modal().parent().addClass(NJBAModal.settings.animation_load+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass(NJBAModal.settings.animation_load+' animated');if('url'==NJBAModal.settings.type){var src=NJBAModal.modal().find('.njba-modal-iframe').data('src');if(NJBAModal.modal().find('.njba-modal-iframe').attr('src')===undefined){NJBAModal.modal().find('.njba-modal-iframe').attr('src',src);}}
if('video'==NJBAModal.settings.type){var src='';if(NJBAModal.modal().find('iframe, source').attr('src')===undefined){src=NJBAModal.modal().find('iframe, source').data('src');}else{src=NJBAModal.modal().find('iframe, source').attr('src');}
if(src){if((src.search('youtube')!==-1||src.search('vimeo')!==-1)&&src.search('autoplay=1')==-1){if(typeof src.split('?')[1]==='string'){src=src+'&autoplay=1&rel=0';}else{src=src+'?autoplay=1&rel=0';}}
NJBAModal.modal().find('iframe, source').attr('src',src);}
if(NJBAModal.modal().find('video').length){NJBAModal.modal().find('video')[0].play();}}});NJBAModal.isActive=true;if(NJBAModal.settings.exit_intent||NJBAModal.settings.auto_load){if(!NJBAModal.settings.previewing){NJBAModal.cookie.set();}}
NJBAModal.adjust();NJBAModal.events();},NJBAModal.settings.auto_load?parseFloat(NJBAModal.settings.delay)*1000:100);},hide:function(){NJBAModal.modal().parent().removeClass(NJBAModal.settings.animation_exit+' animated').addClass(NJBAModal.settings.animation_exit+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass(NJBAModal.settings.animation_exit+' animated').find('.njba-modal').removeClass('modal-visible');$(this).find('.njba-modal-content').removeAttr('style');$('#modal-'+NJBAModal.settings.id).removeAttr('style');NJBAModal.isActive=false;NJBAModal.reset();});},adjust:function(){var mH=0,hH=0,cH=0,eq=0;setTimeout(function(){if(NJBAModal.isActive){if('fullscreen'===NJBAModal.settings.layout){var marginTop=parseInt(NJBAModal.modal().css('margin-top'));var marginBottom=parseInt(NJBAModal.modal().css('margin-bottom'));var modalHeight=$(window).height()-(marginTop+marginBottom);NJBAModal.modal().css('height',modalHeight+'px');}
eq=6;mH=NJBAModal.modal().outerHeight();hH=NJBAModal.modal().find('.njba-modal-header').outerHeight();if(NJBAModal.settings.auto_height&&'fullscreen'!==NJBAModal.settings.layout){return;}
cP=parseInt(NJBAModal.modal().find('.njba-modal-content').css('padding'));NJBAModal.modal().find('.njba-modal-content').css('height',mH-(hH+eq)+'px');if(!NJBAModal.settings.auto_height&&NJBAModal.modal().find('.njba-modal-header').length===0){NJBAModal.modal().find('.njba-modal-content').css('height',mH+'px');}
if('url'===NJBAModal.settings.type){NJBAModal.modal().find('.njba-modal-iframe').css('height',NJBAModal.modal().find('.njba-modal-content-inner').outerHeight()+'px');}
if('video'===NJBAModal.settings.type){NJBAModal.modal().find('iframe').css({'height':'100%','width':'100%'});}}},NJBAModal.settings.auto_load?parseFloat(NJBAModal.settings.delay)*1000:0);},responsive:function(){if($(window).width()<=NJBAModal.settings.breakpoint){NJBAModal.modal().removeClass('layout-standard').addClass('layout-fullscreen');}},events:function(){$(document).keyup(function(e){if(NJBAModal.settings.esc_exit&&27==e.which&&NJBAModal.isActive&&$('form[data-type="njba-modal-box"]').length===0){NJBAModal.hide();}});$('.njba-modal-close').on('click',function(){NJBAModal.hide();});$(document).on('click',function(e){if(NJBAModal.settings.click_exit&&NJBAModal.isActive&&!NJBAModal.settings.previewing&&!NJBAModal.modal().is(e.target)&&NJBAModal.modal().has(e.target).length===0&&e.which){NJBAModal.hide();}});},cookie:{set:function(){if(parseInt(NJBAModal.settings.display_after)>0){return $.cookie('njba_modal_'+NJBAModal.settings.id,NJBAModal.settings.display_after,{expires:NJBAModal.settings.display_after,path:'/'});}else{NJBAModal.cookie.remove();}},get:function(){return $.cookie('njba_modal_'+NJBAModal.settings.id);},remove:function(){return $.cookie('njba_modal_'+NJBAModal.settings.id,0,{expires:0,path:'/'});}},reset:function(){if('url'==NJBAModal.settings.type||'video'==NJBAModal.settings.type){var src=NJBAModal.modal().find('iframe, source').attr('src');NJBAModal.modal().find('iframe, source').attr('data-src',src).removeAttr('src');if(NJBAModal.modal().find('video').length){NJBAModal.modal().find('video')[0].pause();}}
NJBAModal.settings={};}};})(jQuery);;(function($){var modal_60aee99d216e4={id:'60aee99d216e4',type:'html',auto_load:false,exit_intent:false,delay:1,animation_load:'fadeOutUp',animation_exit:'slideOutDown',esc_exit:true,click_exit:true,layout:'standard',auto_height:true,width:960,breakpoint:0,previewing:false};$(document).ready(function(){$('#modal-60aee99d216e4').appendTo(document.body);});$(document).on('click','.modal-60aee99d216e4',function(e){e.preventDefault();NJBAModal.init(modal_60aee99d216e4);});})(jQuery);(function($){$(".fl-node-60adb24539ed5 #njba_switch_toggle").click(function(){if($(this).is(":checked")){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").show();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").hide();}else{$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").hide();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").show();}});})(jQuery);(function($){$(".fl-node-60adb24539ed5 #njba_round_switch_toggle").click(function(){if($(this).is(":checked")){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").show();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").hide();}else{$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").hide();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").show();}});})(jQuery);(function($){$(".fl-node-60adb24539ed5 .njba-adv-switch-left").click(function(){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").show();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").hide();});$(".fl-node-60adb24539ed5 .njba-adv-switch-right").click(function(){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").hide();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").show();});})(jQuery);(function($){$(".fl-node-60adb24539ed5 .njba-adv-switch-label-box-inactive").click(function(){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").show();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").hide();});$(".fl-node-60adb24539ed5 .njba-adv-switch-label-box-active").click(function(){$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content1").hide();$(".fl-node-60adb24539ed5 .njba-adv-switch-toggle-content2").show();});})(jQuery);(function($){$(function(){$('.fl-map').on('click',function(){$(this).find('iframe').css('pointer-events','auto');});});})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
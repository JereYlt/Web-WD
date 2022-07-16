this.metaslider=this.metaslider||{},this.metaslider["editor-block"]=function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/assets/js/",i(i.s=458)}({102:function(e,t,i){"use strict";var r=React.createElement("svg",{key:"ms-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 20 20",className:"dashicon metaslider-icon"},React.createElement("path",{key:"icon-path",d:"M10,0C4.477,0,0,4.477,0,10s4.477,10,10,10s10-4.477,10-10S15.523,0,10,0z M2.95,12.667l5.796-7.218 l0.979,1.049l-4.817,6.169H2.95z M12.735,12.667l-2.5-3.015l0.959-1.25l3.46,4.265H12.735z M15.013,12.667l-3.838-4.915 l-3.838,4.915H5.378l5.777-7.382l5.895,7.382H15.013z"}));t.a=r},458:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(102),n=i(459),s=i(464),a=window.wp,o=a.i18n.__,l=a.blocks.registerBlockType,c=a.data,d=c.registerStore,u=c.dispatch,h=c.withSelect,m=a.apiRequest,p={items:[],isLoading:!0};d("metaslider",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments[1];switch(t.type){case"SET_SLIDESHOWS":return{items:t.items,isLoading:!1}}return e},actions:{setSlideshows:function(e){return{type:"SET_SLIDESHOWS",items:e}}},selectors:{getSlideshows:function(e){return e}},resolvers:{getSlideshows:function(e,t){try{m({path:"/metaslider/v1/slideshows/all"}).then(function(e){!0===e.success?u("metaslider").setSlideshows(e.data):(console.warn("MetaSlider: API Request error:",e.data.message),u("metaslider").setSlideshows([]))})}catch(e){console.warn("MetaSlider: API Request error:",e),u("metaslider").setSlideshows([])}}}}),l("metaslider/slider",{title:"MetaSlider",description:o("Use MetaSlider to insert slideshows and sliders in your page","ml-slider"),icon:r.a,category:"common",keywords:[o("slider","ml-slider"),o("slideshow","ml-slider"),o("gallery","ml-slider")],attributes:{slideshowId:{type:"number",default:0},stretch:{type:"string",default:"normal"}},edit:h(function(e,t){return{slideshows:(0,e("metaslider").getSlideshows)()}})(n.a),save:function(e){return Object(s.a)(e)},getEditWrapperProps:function(e){var t=e.stretch;if(-1!==["wide","full","normal"].indexOf(t))return{"data-align":t}}})},459:function(e,t,i){"use strict";var r=i(102),n=i(460),s=i(461),a=i(462),o=i(463),l=window.wp,c=l.i18n.__,d=l.editor,u=d.InspectorControls,h=d.BlockControls,m=l.element.Fragment,p=l.data.withSelect,w=l.components,f=w.Placeholder,v=w.Spinner,g=w.PanelBody,b=w.BaseControl,y=window.metaslider_block_config||{};t.a=p(function(e){return{wideControlsEnabled:e("core/editor").getEditorSettings().alignWide}})(function(e){var t=e.slideshows,i=e.className,l=e.isSelected,d=e.wideControlsEnabled,p=void 0!==d&&d,w=e.attributes.slideshowId,E=e.attributes.stretch,S=t.isLoading,_=t.items.length||!1,k=e.attributes.refreshPreview,R=l&&React.createElement(m,{key:"inspectorControls"},React.createElement(u,{key:"inspector"},React.createElement("a",{className:"ms-plugin-link",href:y.plugin_page,target:"_blank"},c("Edit slideshows","ml-slider")),React.createElement(g,{title:c("Slideshow settings","ml-slider")},_&&React.createElement(a.a,{props:e}),0!==w&&React.createElement("a",{href:y.plugin_page+"&id="+w,target:"_blank",className:"ms-edit-current-slideshow"},c("Edit slideshow","ml-slider")),p&&React.createElement(b,{label:c("Slideshow width","ml-slider")},React.createElement(s.a,{value:E,onChange:function(t){setTimeout(function(){window.dispatchEvent(new Event("resize"))},50),e.setAttributes({stretch:t})}})))),React.createElement(h,{key:"controls"},p&&React.createElement(s.a,{label:c("Slideshow width","ml-slider"),value:E,onChange:function(t){setTimeout(function(){window.dispatchEvent(new Event("resize"))},50),e.setAttributes({stretch:t})}}),0!==w&&React.createElement(o.a,{key:"refresh",label:c("Refresh preview","ml-slider"),onClick:function(){e.setAttributes({refreshPreview:!k})}})));return _||w||!S?_||w||S?[R,!!w&&React.createElement(n.a,{key:"preview",className:i,src:y.preview_url+"&slideshow_id="+w,slideshowId:w,isSelected:l,refresh:k}),!w&&React.createElement(f,{key:"instructions",className:e.className,label:[r.a," MetaSlider"]},React.createElement(a.a,{key:"slidehow-selector",props:e}))]:React.createElement(f,{className:i,label:[r.a," MetaSlider"]},c("No slideshows found.","ml-slider")," ",React.createElement("a",{target:"_blank",href:y.plugin_page},c("Create one now!","ml-slider"))):React.createElement(f,{className:i,label:[r.a," MetaSlider"]},React.createElement(v,{key:"spinner"})," ",c("Loading slideshows list...","ml-slider"))})},460:function(e,t,i){"use strict";var r=i(102),n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();var s=window.wp,a=window.React,o=s.components,l=o.Placeholder,c=o.Spinner,d=s.i18n.__,u=s.apiRequest,h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={height:200,previewIsLoading:!0,slideshowId:null,html:"",previewErrorMessage:""},i.handleOnLoad=i.handleOnLoad.bind(i),i.setHeight=i.setHeight.bind(i),i.getPreview=i.getPreview.bind(i),i.handleResize=i.handleResize.bind(i),i.iframe=a.createRef(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"componentDidMount",value:function(){this.getPreview(),window.addEventListener("resize",this.handleResize),this.props.componentDidMount&&this.props.componentDidMount(this)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),this.props.componentWillUnmount&&this.props.componentWillUnmount()}},{key:"componentDidUpdate",value:function(e){this.props.slideshowId===e.slideshowId&&this.props.refresh===e.refresh||(this.setHeight(200),this.getPreview(),this.iframe.current.contentDocument.location.reload(!0))}},{key:"handleOnLoad",value:function(e){var t=this;this.state.html&&(this.iframe.current.contentDocument.editor_block=this,setTimeout(function(){clearInterval(t.loadInterval),t.setHeight(t.iframe.current.contentDocument.body.clientHeight)},50),this.setState({previewIsLoading:!1}))}},{key:"handleResize",value:function(e){this.setHeight(this.iframe.current.contentDocument.body.clientHeight)}},{key:"setHeight",value:function(e){this.setState({height:e>200?e:200})}},{key:"getPreview",value:function(){var e=this;try{this.setState({html:"",previewIsLoading:!0,previewErrorMessage:""}),u({path:"/metaslider/v1/slideshow/preview",data:{action:"ms_get_preview",slideshow_id:this.props.slideshowId,override_preview_style:!0}}).then(function(t){e.setState({html:t.data}),e.setHeight(e.iframe.current.contentDocument.body.clientHeight)}).fail(function(t){410===t.status?(e.setState({previewIsLoading:!1,previewErrorMessage:t.responseJSON.data.message}),console.error("MetaSlider (Gutenberg): Slideshow not found:",t)):console.error("MetaSlider (Gutenberg): Could not load the preview:",t)})}catch(e){console.error("MetaSlider (Gutenberg): A general error occured:",e)}}},{key:"render",value:function(){return a.createElement("div",{className:this.props.className+(this.state.previewIsLoading?"":" loading")+" ms-preview"},a.createElement("iframe",{key:"preview-iframe",height:this.state.height,srcDoc:this.state.html||"",onLoad:this.handleOnLoad,ref:this.iframe}),a.createElement("div",{key:"trigger",className:"ms-preview__trigger"}),this.state.previewIsLoading&&a.createElement(l,{key:"ms-loader",className:"ms-loader",label:[r.a," MetaSlider"]},a.createElement(c,null)," ",d("Loading slideshow","ml-slider")),this.state.previewErrorMessage&&a.createElement(l,{key:"ms-preview-empty",className:"ms-loader",label:[r.a," MetaSlider"]},this.state.previewErrorMessage))}}]),t}();t.a=h},461:function(e,t,i){"use strict";t.a=function(e){var t=e.value,i=e.onChange,n=e.controls;var s=void 0===n?l:n;return React.createElement(a,{controls:s.map(function(e){return r({},o[e],{isActive:t===e,onClick:function(e){return function(){return i(t===e?void 0:e)}}(e)})})})};var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n=window.wp,s=n.i18n.__,a=n.components.Toolbar,o={normal:{icon:"align-center",title:s("Normal width","ml-slider")},wide:{icon:"align-wide",title:s("Wide width","ml-slider")},full:{icon:"align-full-width",title:s("Full width","ml-slider")}},l=["normal","wide","full"]},462:function(e,t,i){"use strict";t.a=function(e){var t=e.props,i=t.attributes.slideshowId,a=t.slideshows;return React.createElement(s,{label:n("Select a slideshow","ml-slider"),value:i,options:[{label:"-- "+n("Select a slideshow","ml-slider")+" --",value:0}].concat(a.items.map(function(e){return{key:e.id,label:r.htmlEntities.decodeEntities(e.title),value:e.id}})),onChange:function(e){e=parseInt(e),t.setAttributes({slideshowId:e})}})};var r=window.wp,n=r.i18n.__,s=r.components.SelectControl},463:function(e,t,i){"use strict";t.a=function(e){e.value,e.onChange;var t=e.onClick;return React.createElement(s,{controls:[{icon:"update",title:n("Update preview","ml-slider"),isActive:!1,onClick:t}]})};var r=window.wp,n=r.i18n.__,s=r.components.Toolbar},464:function(e,t,i){"use strict";var r=window.wp.element.Fragment;t.a=function(e){var t=e.attributes,i=t.className,n=t.slideshowId,s=t.stretch,a=s?"align"+s:"";return!!n&&React.createElement(r,null,"[metaslider id=",n,' cssclass="',i," ",a,'"]')||""}}});
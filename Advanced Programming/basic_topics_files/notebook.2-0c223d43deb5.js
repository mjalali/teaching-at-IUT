function renderJupyterJson(n){var o,l,c,e=null!==(o=null===(l=n.cells)||void 0===l?void 0:null===(c=l.map(function(n){var o,l,c,e,t,d,i,a,u=null!==(o=null===(l=n.source)||void 0===l?void 0:l.join(""))&&void 0!==o?o:"";a=u&&"code"===n.cell_type?u?'<pre class="code-block"><code class="language-python">'.concat(escapeHtml(u,!0),"</code></pre>"):"":u?render_markdown(u):"";var v=null!==(c=null===(e=n.outputs)||void 0===e?void 0:null===(t=e.map(function(n){var o,l,c,e;return"execute_result"!==n.output_type?null!==(o=null===(l=n.text)||void 0===l?void 0:l.join(""))&&void 0!==o?o:"":null!==(c=null===(e=n.data)||void 0===e?void 0:e["text/plain"].join(""))&&void 0!==c?c:""}))||void 0===t?void 0:t.join(""))&&void 0!==c?c:"",r=v?'<pre class="code-block" style="padding-top: 0px;"><code>'.concat(escapeHtml(render_markdown(v),!0),"</code></pre>"):"";return'<div class="nb-cell nb-'.concat(n.cell_type,'-cell">\n').concat(a&&'<div class="nb-input" data-prompt-number="'.concat(null!==(d=n.execution_count)&&void 0!==d?d:"",'">').concat(a,"</div>"),"\n        ").concat(r?'<div class="nb-output" data-prompt-number="'.concat(null!==(i=n.execution_count)&&void 0!==i?i:"",'">').concat(r,"</div>"):"","\n</div>")}))||void 0===c?void 0:c.join(""))&&void 0!==o?o:"";return'<div class="nb-notebook">\n<div class="nb-worksheet">\n'.concat(e,"\n</div>\n</div>")}
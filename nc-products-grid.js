import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@neogrup/nc-items-grid/nc-items-grid.js';

class NcProductsGrid extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --products-grid-item-content-border-radius: 5px;
          --products-grid-item-content-box-shadow: none;
          --products-grid-item-content-folder-font-size: 1.3em;
          --products-grid-item-content-default-font-size: 1em;
          --products-grid-item-content-default-price-font-size: 1em;
        }

        nc-items-grid{
          --items-grid-item-content-border-radius: var(--products-grid-item-content-border-radius);
          --items-grid-item-content-box-shadow: var(--products-grid-item-content-box-shadow);
          --items-grid-item-content-folder-font-size: var(--products-grid-item-content-folder-font-size);
          --items-grid-item-content-default-font-size: var(--products-grid-item-content-default-font-size);
          --items-grid-item-content-default-price-font-size: var(--products-grid-item-content-default-price-font-size);

        }
      </style>

      <nc-items-grid 
          id="itemsGrid" 
          items-grid-data="{{productsGridData}}" 
          loading="{{itemsGridLoading}}" 
          language="{{language}}" 
          is-paginated
          breadcrumb="[[breadcrumb]]" 
          auto-flow
          item-height="[[heightProductsGridItems]]" 
          item-width="[[widthProductsGridItems]]" 
          item-margin="[[marginProductsGridItems]]" 
          item-view-mode="[[viewModeProductsGridItems]]" 
          hide-items-price ="[[hideProductsPrice]]"
          animations ="[[animations]]"
          on-item-selected="_productSelected">
      </nc-items-grid>
    `;
  }

  static get properties() {
    return {
      productsGridData: {
        type: Array,
        value: []
      },
      language: String,
      breadcrumb: {
        type: Boolean,
        value: false
      },
      animations: {
        type: Boolean,
        value: true
      },
      itemsGridLoading: {
        type: Boolean,
        value: false
      },
      heightProductsGridItems: {
        type: Number,
        reflectToAttribute: true
      },
      widthProductsGridItems: {
        type: Number,
        reflectToAttribute: true
      },
      marginProductsGridItems: {
        type: Number,
        reflectToAttribute: true
      },
      viewModeProductsGridItems: {
        type: String,
        reflectToAttribute: true
      },
      hideProductsPrice: {
        type: Boolean
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  selectTopFolder(){
    this.$.itemsGrid.selectTopFolder();
  }

  _productSelected(item){
    this.dispatchEvent(new CustomEvent('product-selected', {detail: item.detail, bubbles: true, composed: true }));
  }
}

window.customElements.define('nc-products-grid', NcProductsGrid);

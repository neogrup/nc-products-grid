import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@neogrup/nc-items-grid/nc-items-grid.js';

class NcProductsGrid extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --products-grid-item-content-border-radius: 5px;
          --products-grid-item-content-box-shadow: none;
        }

        nc-items-grid{
          --items-grid-item-content-border-radius: var(--products-grid-item-content-border-radius);
          --items-grid-item-content-box-shadow: var(--products-grid-item-content-box-shadow);
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

import React from 'react';
import WPAPI from 'wpapi';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

// This route is copied from the plugin: wordpress/wp-content/plugins/wp-rest-api-v2-menus/wp-rest-api-v2-menus.php
wp.menus = wp.registerRoute('menus/v1', '/menus/(?P<id>[a-zA-Z(-]+)');

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const [headerMenu, categoriesMenu, childProps] = await Promise.all([
        wp.menus().id('header-menu'),
        wp.categories(),
        Comp.getInitialProps(args)
      ]);

      return {
        headerMenu,
        categoriesMenu,
        ...(Comp.getInitialProps ? childProps : null)
      };
    }

    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;

import React from 'react';
import Search from './Search';
import Filter from './Filter';
import { Menu } from 'semantic-ui-react';

const Nav = () => {
  return (
    <div>
      <Menu attached='top' inverted>
        <Menu.Item>
          <i className="material-icons md-48">tv</i>
        </Menu.Item>
        <Menu.Item>
          <h1>Tube Finder</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Filter handleFilter={this.handleFilter} />
        </Menu.Item>
        <Menu.Item position="right">
          <Search handleSearch={this.handleSearch} search={this.search} />
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Nav;

function NavBarItem({id, symbol, title}) {
  return (
  <div class="nav-bar-item">
    <img src={symbol} class="nav-item-symbol" alt="title"/>
    <span class="nav-item-title">{title}</span>
  </div>
  );
}

export default NavBarItem;
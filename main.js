const navLinks = [
  { name: "about", href: "/about" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

/**
 * Creates a navigation list item from a link object.
 *
 * @param {string} name The name of the link
 * @param { string } href The href of the link
 * @returns {HTMLLIElement} The <li> element containing an anchor tag.
 */
const createNavItem = (name, href) => {
  const myLocation = window.location.pathname;

  const li = document.createElement("li");
  const a = document.createElement("a");

  li.classList.add("nav-li");
  a.classList.add("nav-a");

  a.href = href;
  a.innerText = name;

  if (myLocation.includes(href)) a.classList.add("selected");

  li.appendChild(a);
  return li;
};

/**
 * Creates navigation list items from an array of link objects.
 *
 * @param {{ name: string, href: string }[]} navLinks - An array of navigation link objects.
 * @returns {HTMLLIElement[]} Array of <li> elements with anchor tags.
 */
const createNavigation = (navLinks) => {
  const ul = document.createElement("ul");
  navLinks.forEach((navItem) => {
    const { name, href } = navItem;
    const li = createNavItem(name, href);
    ul.appendChild(li);
  });
  return ul;
};

const giveLocation = () => {
  const el = document.createElement("span");

  const myLocation = window.location.pathname;

  el.innerHTML = myLocation;

  return el;
};

const render = () => {
  // CREATE NAVIGATION
  const nav = document.createElement("nav");
  const headerEl = document.getElementsByTagName("header")[0];
  const ulEl = createNavigation(navLinks);

  const location = giveLocation();

  nav.appendChild(ulEl);

  headerEl.appendChild(nav);
  headerEl.appendChild(location); // TODO: remove when done
};

render();

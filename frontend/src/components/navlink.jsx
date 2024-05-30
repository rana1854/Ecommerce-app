import React from 'react'

const NavLink = () => {
  const links =[
    {name: "Men"},
    {name: "Women"},
    {name: "Kids"},
  ];
  return (
    <>
    {links.map(Links =>(
    <div>
      <div>
        <h1>{Link.Home}</h1>
      </div>

     
    </div>
     ))}
    </>
  );
};

export default NavLink;

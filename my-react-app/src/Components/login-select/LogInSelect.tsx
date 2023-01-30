import React from "react";

export interface TEST {
  selectLogIn: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

function LogInSelect({ selectLogIn }: TEST) {
  return (
    <select
      className="filter_selector"
      onChange={selectLogIn}
 >
      <option>Весь список</option>
      <option>Избранные</option>
      <option>Смотреть позже</option>
    </select>
  );
}

export { LogInSelect };
